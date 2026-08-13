/**
 * One pointer source and one spring for the whole hero.
 *
 * Both the 3D ring and the background flare react to the cursor. If each owned
 * its own listener and its own easing they would chase the cursor at slightly
 * different speeds, which is the exact thing that makes this class of effect
 * read as cheap. So: one listener, one rAF loop, one smoothed value, two
 * consumers.
 *
 * The output is normalised to the ring's own box (not the viewport), so the
 * effect is strongest where the object actually is and falls off with distance
 * instead of clipping to a hard stop at the screen edge.
 */

export type HeroPointerState = {
  /** −1..1 horizontal, shaped and distance-attenuated */
  nx: number;
  /** −1..1 vertical, shaped and distance-attenuated */
  ny: number;
  /** 0..1 — the object is "awake" while the cursor is within reach */
  engaged: number;
};

type Listener = (state: HeroPointerState) => void;

// How far past the element's own half-box the effect still reaches.
const REACH = 1.35;
// Spring rates (rad/s). Attack is deliberately ~2x the release: quick to
// acknowledge the cursor, unhurried on the way back to rest.
const ATTACK = 17.5;
const RELEASE = 9.0;
const ENGAGE_UP = { omega: 14.0, zeta: 0.72 };
const ENGAGE_DOWN = { omega: 8.0, zeta: 1.0 };
const MAX_DT = 0.024;
// Below this the motion is invisible; stop the loop rather than idle at 60fps.
const REST_EPSILON = 0.0004;
const REST_VELOCITY = 0.002;

/**
 * 75% smoothstep + 25% linear. Pure smoothstep has zero slope at centre, which
 * feels like a dead zone; pure linear twitches on 1px mouse jitter. The blend
 * keeps a constant gentle slope at both ends.
 */
const shape = (n: number) => {
  const m = Math.min(Math.abs(n), 1);
  const w = 0.75 * (m * m * (3 - 2 * m)) + 0.25 * m;
  return Math.sign(n) * w;
};

/** Inverse-square falloff outside the reach box, so a cursor parked over the
 *  CTAs drives a fraction of the amplitude instead of the full tilt. */
const farFieldGain = (r: number) => 1 / (1 + 0.55 * Math.max(0, r - 1) ** 2);

const listeners = new Set<Listener>();
const state: HeroPointerState = { nx: 0, ny: 0, engaged: 0 };

let target: HTMLElement | null = null;
let rect: DOMRect | null = null;
let rectDirty = true;
let observer: IntersectionObserver | null = null;
let inView = true;

let pointerX = 0;
let pointerY = 0;
let hasPointer = false;

let targetNx = 0;
let targetNy = 0;
let targetEngaged = 0;

let vx = 0;
let vy = 0;
let vEngaged = 0;

let frame = 0;
let lastTime = 0;
let releasing = false;
let leaveTimer = 0;

export const heroMotionEnabled = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const readRect = () => {
  if (!target) return null;
  if (rectDirty || !rect) {
    rect = target.getBoundingClientRect();
    rectDirty = false;
  }
  return rect;
};

const updateTargets = () => {
  const box = readRect();
  if (!box || box.width === 0 || box.height === 0) return;

  const ux = (pointerX - (box.left + box.width / 2)) / ((box.width / 2) * REACH);
  const uy = (pointerY - (box.top + box.height / 2)) / ((box.height / 2) * REACH);
  const gain = farFieldGain(Math.hypot(ux, uy));

  targetNx = shape(Math.max(-1, Math.min(1, ux))) * gain;
  targetNy = shape(Math.max(-1, Math.min(1, uy))) * gain;
  targetEngaged = Math.hypot(ux, uy) <= 1 ? 1 : 0;
};

const step = (value: number, velocity: number, goal: number, omega: number, zeta: number, dt: number) => {
  const accel = omega * omega * (goal - value) - 2 * zeta * omega * velocity;
  const nextVelocity = velocity + accel * dt;
  return [value + nextVelocity * dt, nextVelocity] as const;
};

const atRest = () =>
  Math.abs(targetNx - state.nx) < REST_EPSILON &&
  Math.abs(targetNy - state.ny) < REST_EPSILON &&
  Math.abs(targetEngaged - state.engaged) < REST_EPSILON &&
  Math.abs(vx) < REST_VELOCITY &&
  Math.abs(vy) < REST_VELOCITY &&
  Math.abs(vEngaged) < REST_VELOCITY;

const tick = (now: number) => {
  // A tab that was hidden hands back a multi-second delta; feeding that to the
  // integrator snaps the hero violently. Clamp, then sub-step what's left.
  const raw = lastTime ? (now - lastTime) / 1000 : 1 / 60;
  lastTime = now;

  // While releasing, the targets are pinned at rest — recomputing them from the
  // last known cursor position would drag the object straight back out.
  if (hasPointer && !releasing) updateTargets();

  const omega = releasing ? RELEASE : ATTACK;
  const engage = targetEngaged > state.engaged ? ENGAGE_UP : ENGAGE_DOWN;

  let remaining = Math.min(raw, MAX_DT * 3);
  while (remaining > 0) {
    const dt = Math.min(remaining, MAX_DT);
    [state.nx, vx] = step(state.nx, vx, targetNx, omega, 1.0, dt);
    [state.ny, vy] = step(state.ny, vy, targetNy, omega, 1.0, dt);
    [state.engaged, vEngaged] = step(state.engaged, vEngaged, targetEngaged, engage.omega, engage.zeta, dt);
    remaining -= dt;
  }

  listeners.forEach((listener) => listener(state));

  if (atRest()) {
    state.nx = targetNx;
    state.ny = targetNy;
    state.engaged = targetEngaged;
    vx = vy = vEngaged = 0;
    listeners.forEach((listener) => listener(state));
    frame = 0;
    return;
  }
  frame = requestAnimationFrame(tick);
};

const wake = () => {
  if (frame || !listeners.size || !inView || document.hidden) return;
  lastTime = 0;
  frame = requestAnimationFrame(tick);
};

const sleep = () => {
  cancelAnimationFrame(frame);
  frame = 0;
};

const onPointerMove = (event: PointerEvent) => {
  // Nothing but two float stores — a high-poll mouse fires this ~1000x/sec.
  pointerX = event.clientX;
  pointerY = event.clientY;
  hasPointer = true;
  if (releasing) {
    releasing = false;
    clearTimeout(leaveTimer);
  }
  wake();
};

const releaseToRest = (delay: number) => {
  clearTimeout(leaveTimer);
  leaveTimer = window.setTimeout(() => {
    releasing = true;
    targetNx = 0;
    targetNy = 0;
    targetEngaged = 0;
    hasPointer = false;
    wake();
  }, delay);
};

// A cursor that flicks off the window and straight back must not produce a
// visible double-move, hence the short grace period.
const onPointerOut = (event: PointerEvent) => {
  if (event.relatedTarget === null) releaseToRest(90);
};
const onBlur = () => releaseToRest(0);
const onScroll = () => {
  rectDirty = true;
  if (hasPointer) wake();
};
const onResize = () => {
  rectDirty = true;
  wake();
};
const onVisibility = () => (document.hidden ? sleep() : wake());

let bound = false;

const bind = () => {
  if (bound) return;
  bound = true;
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerout', onPointerOut, { passive: true });
  window.addEventListener('blur', onBlur);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVisibility);
};

const unbind = () => {
  if (!bound) return;
  bound = false;
  window.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('pointerout', onPointerOut);
  window.removeEventListener('blur', onBlur);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
  document.removeEventListener('visibilitychange', onVisibility);
};

/** The element the effect is normalised against — the ring's own box. */
export const setHeroPointerTarget = (element: HTMLElement | null) => {
  target = element;
  rectDirty = true;
  observer?.disconnect();
  observer = null;
  if (!element || typeof IntersectionObserver === 'undefined') return;

  observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      if (inView) wake();
      else sleep();
    },
    { threshold: 0.15 },
  );
  observer.observe(element);
};

export const subscribeHeroPointer = (listener: Listener) => {
  listeners.add(listener);
  bind();
  listener(state);
  wake();
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      sleep();
      unbind();
    }
  };
};

/** Test seam — the engine is a module singleton by design. */
export const __resetHeroPointer = () => {
  sleep();
  unbind();
  listeners.clear();
  observer?.disconnect();
  observer = null;
  target = null;
  rect = null;
  rectDirty = true;
  inView = true;
  hasPointer = false;
  releasing = false;
  state.nx = state.ny = state.engaged = 0;
  targetNx = targetNy = targetEngaged = 0;
  vx = vy = vEngaged = 0;
};
