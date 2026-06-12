/**
 * Subtle perspective grid floor — meant to sit behind section content
 * to give the page a consistent "engineering floor" feel without
 * competing with the hero's more prominent version.
 *
 * Drop into any section with `position: relative; overflow: hidden`.
 */
const AmbientFloor = () => (
  <div className="ambient-floor" aria-hidden />
);

export default AmbientFloor;
