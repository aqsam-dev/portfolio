import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const canUseGlow = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canUseGlow) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let frameId;

    const moveGlow = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveGlow);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-105 w-105 rounded-full bg-[radial-gradient(circle,rgba(15,155,142,0.16)_0%,rgba(15,155,142,0)_70%)] md:block"
    />
  );
}

export default CursorGlow;