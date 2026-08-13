import { useEffect, useRef } from 'react';
import { heroMotionEnabled, setHeroPointerTarget, subscribeHeroPointer } from '@/lib/heroPointer';

const SCENE_URL = 'https://prod.spline.design/NTXqycpZhjx9GyOF/scene.splinecode';
/** The single mesh in the scene — the 40-blade ring. */
const RING_OBJECT = 'Rectangle';

const DEG = Math.PI / 180;
// Yaw reads as object-like at larger angles than pitch, which exposes the
// ring's own horizon faster. Past ~8°/5° it stops looking like an instrument
// acknowledging you and starts looking like something being shoved around.
const MAX_YAW = 6.0 * DEG;
const MAX_PITCH = 3.5 * DEG;
// The "awake" lift: a hair closer to the viewer while the cursor is in reach.
const MAX_ENGAGE_SCALE = 0.012;

type SplineObject = {
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
};
type SplineViewer = HTMLElement & { _spline?: { findObjectByName?: (name: string) => SplineObject | undefined } };

/** Poll until the scene graph exists — the viewer loads its scene over the
 *  network and exposes no reliable ready event on this version. */
const whenRingReady = (viewer: SplineViewer, onReady: (ring: SplineObject) => void) => {
  let cancelled = false;
  let attempts = 0;
  const poll = () => {
    if (cancelled) return;
    const ring = viewer._spline?.findObjectByName?.(RING_OBJECT);
    if (ring) {
      onReady(ring);
      return;
    }
    if (attempts++ > 200) return; // ~25s, then give up quietly
    setTimeout(poll, 120);
  };
  poll();
  return () => {
    cancelled = true;
  };
};

const HeroRing = ({ interactive = false, className = 'w-full h-full' }: { interactive?: boolean; className?: string }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<SplineViewer>(null);

  useEffect(() => {
    if (!interactive) return;
    if (navigator.userAgent.includes('ReactSnap')) return;
    if (!heroMotionEnabled()) return;

    const host = hostRef.current;
    const viewer = viewerRef.current;
    if (!host || !viewer) return;

    let unsubscribe: (() => void) | undefined;

    const stopPolling = whenRingReady(viewer, (ring) => {
      const base = { x: ring.rotation.x, y: ring.rotation.y, z: ring.rotation.z };
      const baseScale = ring.scale.x;

      // The ring is authored with a large roll about its own z axis, so its
      // local x/y no longer line up with the screen. Rotating naively would
      // send it diagonally when the cursor moves sideways. Undo the roll so
      // the tilt happens in screen space, where the cursor lives.
      const cos = Math.cos(-base.z);
      const sin = Math.sin(-base.z);

      setHeroPointerTarget(host);
      unsubscribe = subscribeHeroPointer(({ nx, ny, engaged }) => {
        // Turn toward the pointer: cursor right → the right side comes forward.
        const yaw = nx * MAX_YAW;
        const pitch = ny * MAX_PITCH;

        ring.rotation.x = base.x + (pitch * cos - yaw * sin);
        ring.rotation.y = base.y + (pitch * sin + yaw * cos);

        const scale = baseScale * (1 + engaged * MAX_ENGAGE_SCALE);
        ring.scale.x = scale;
        ring.scale.y = scale;
        ring.scale.z = scale;
      });
    });

    return () => {
      stopPolling();
      unsubscribe?.();
      setHeroPointerTarget(null);
    };
  }, [interactive]);

  return (
    <div ref={hostRef} className={className}>
      <spline-viewer
        ref={viewerRef}
        url={SCENE_URL}
        style={{ width: '100%', height: '100%', display: 'block' }}
      ></spline-viewer>
    </div>
  );
};

export default HeroRing;
