import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
}

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 36;
    const connectionDistance = 110;

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 0.9 + 0.4,
          hue: Math.random() < 0.55 ? 264 : Math.random() < 0.5 ? 238 : 307,
        });
      }
    };

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const resize = () => {
      setSize();
      initParticles();
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(155, 111, 222, 0.07)";
      ctx.lineWidth = 0.3;
      const gridSize = 40;
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      particles.forEach((p) => {
        ctx.fillStyle = `hsla(${p.hue}, 61%, 65%, 0.35)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      particles.forEach((p, i) => {
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (250 - dist) / 250;
          p.vx += dx * force * 0.00025;
          p.vy += dy * force * 0.00025;
        }

        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04;

        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;

        ctx.fillStyle = `hsla(${p.hue}, 61%, 65%, 0.4)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx_conn = p.x - p2.x;
          const dy_conn = p.y - p2.y;
          const dist_conn = Math.sqrt(dx_conn * dx_conn + dy_conn * dy_conn);

          if (dist_conn < connectionDistance) {
            const alpha = 0.18 * (1 - dist_conn / connectionDistance);
            const blendedHue = (p.hue + p2.hue) / 2;
            ctx.strokeStyle = `hsla(${blendedHue}, 61%, 65%, ${alpha})`;
            ctx.lineWidth = 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    if (!prefersReduced) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    setSize();
    initParticles();

    if (prefersReduced) {
      drawStatic();
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.45]"
    />
  );
};

export default GridBackground;
