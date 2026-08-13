import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { __resetHeroPointer, setHeroPointerTarget, subscribeHeroPointer, type HeroPointerState } from './heroPointer';

/** A 600x600 box at the origin — stands in for the ring's column. */
const makeTarget = () => {
  const el = document.createElement('div');
  el.getBoundingClientRect = () =>
    ({ left: 0, top: 0, right: 600, bottom: 600, width: 600, height: 600, x: 0, y: 0, toJSON: () => ({}) }) as DOMRect;
  document.body.appendChild(el);
  return el;
};

const movePointer = (clientX: number, clientY: number) => {
  window.dispatchEvent(new MouseEvent('pointermove', { clientX, clientY }));
};

describe('heroPointer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    __resetHeroPointer();
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  it('settles on the shaped target within 600ms and never overshoots it', () => {
    const frames: HeroPointerState[] = [];
    setHeroPointerTarget(makeTarget());
    subscribeHeroPointer((s) => frames.push({ ...s }));

    // Cursor right of centre, still inside the reach box.
    movePointer(600, 300);
    vi.advanceTimersByTime(600);

    const settled = frames[frames.length - 1];
    // shape(0.7407) with unit far-field gain
    expect(settled.nx).toBeCloseTo(0.81, 2);
    expect(settled.ny).toBeCloseTo(0, 2);

    // Critically damped: it must approach from below, never ring past the target.
    const peak = Math.max(...frames.map((f) => f.nx));
    expect(peak).toBeLessThanOrEqual(0.815);
  });

  it('attenuates a cursor parked far outside the ring instead of pinning at full tilt', () => {
    let state: HeroPointerState = { nx: 0, ny: 0, engaged: 0 };
    setHeroPointerTarget(makeTarget());
    subscribeHeroPointer((s) => (state = { ...s }));

    movePointer(2400, 300); // r ≈ 2.6 box-radii away
    vi.advanceTimersByTime(600);

    expect(Math.abs(state.nx)).toBeLessThan(0.35);
    expect(state.engaged).toBeLessThan(0.05);
  });

  it('marks the object engaged only while the cursor is within reach', () => {
    let state: HeroPointerState = { nx: 0, ny: 0, engaged: 0 };
    setHeroPointerTarget(makeTarget());
    subscribeHeroPointer((s) => (state = { ...s }));

    movePointer(300, 300);
    vi.advanceTimersByTime(600);
    expect(state.engaged).toBeGreaterThan(0.95);
  });

  it('returns to rest after the pointer leaves the window', () => {
    let state: HeroPointerState = { nx: 0, ny: 0, engaged: 0 };
    setHeroPointerTarget(makeTarget());
    subscribeHeroPointer((s) => (state = { ...s }));

    movePointer(600, 300);
    vi.advanceTimersByTime(400);
    expect(state.nx).toBeGreaterThan(0.5);

    window.dispatchEvent(new MouseEvent('pointerout')); // relatedTarget === null
    vi.advanceTimersByTime(1200);

    expect(state.nx).toBeCloseTo(0, 2);
    expect(state.engaged).toBeCloseTo(0, 2);
  });

  it('stops driving frames once every channel is at rest', () => {
    const raf = vi.spyOn(window, 'requestAnimationFrame');
    setHeroPointerTarget(makeTarget());
    subscribeHeroPointer(() => undefined);

    movePointer(600, 300);
    vi.advanceTimersByTime(1500);
    const afterSettle = raf.mock.calls.length;

    vi.advanceTimersByTime(1500);
    expect(raf.mock.calls.length).toBe(afterSettle);
  });

  it('detaches its listeners when the last subscriber goes away', () => {
    const remove = vi.spyOn(window, 'removeEventListener');
    setHeroPointerTarget(makeTarget());
    const unsubscribeA = subscribeHeroPointer(() => undefined);
    const unsubscribeB = subscribeHeroPointer(() => undefined);

    unsubscribeA();
    expect(remove).not.toHaveBeenCalledWith('pointermove', expect.anything());

    unsubscribeB();
    expect(remove).toHaveBeenCalledWith('pointermove', expect.anything());
  });
});
