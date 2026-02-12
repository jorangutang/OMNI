import { useEffect, useRef } from 'react';

export function PointCloudBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let points: Array<{ x: number; y: number; z: number; vx: number; vy: number; vz: number }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initPoints();
    };

    const initPoints = () => {
      points = [];
      const numPoints = 150;
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          z: Math.random() * 500,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw points
      points.forEach((point, i) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.offsetWidth) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.offsetHeight) point.vy *= -1;
        if (point.z < 0 || point.z > 500) point.vz *= -1;

        // Calculate depth-based size and opacity
        const scale = (500 - point.z) / 500;
        const size = 1 + scale * 2;
        const opacity = 0.3 + scale * 0.5;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.4})`;
        ctx.fill();

        // Draw connections to nearby points
        points.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dz = point.z - otherPoint.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            const lineOpacity = (1 - distance / 120) * 0.15;
            ctx.strokeStyle = `rgba(0, 0, 0, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawPoints);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawPoints();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  );
}
