import { useEffect, useRef } from "react";
import p5 from "p5";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero({
  name = "I am Ganesh",
  greeting = "Hello, Dev's",
  tagline = "B.Tech CSE | Full-Stack Developer | Tech Enthusiast",
}) {
  const sketchParentRef = useRef(null);
  const p5Ref = useRef(null);

  useEffect(() => {
    if (p5Ref.current) return;

    const sketch = (s) => {
      let triangles = [];
      let pts = [];
      let particles = [];
      let w = 0;
      let h = 0;
      const density = 120;
      const mouseInfluence = 150;
      const particleCount = 50;

      class Particle {
        constructor() {
          this.x = s.random(w);
          this.y = s.random(h);
          this.vx = s.random(-0.5, 0.5);
          this.vy = s.random(-0.5, 0.5);
          this.size = s.random(2, 5);
          this.alpha = s.random(100, 200);
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          // Mouse interaction
          const dx = s.mouseX - this.x;
          const dy = s.mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseInfluence) {
            const force = (mouseInfluence - dist) / mouseInfluence;
            this.x -= dx * force * 0.05;
            this.y -= dy * force * 0.05;
          }

          // Wrap around edges
          if (this.x < 0) this.x = w;
          if (this.x > w) this.x = 0;
          if (this.y < 0) this.y = h;
          if (this.y > h) this.y = 0;
        }

        display() {
          s.fill(200, 220, 255, this.alpha);
          s.circle(this.x, this.y, this.size);
        }
      }

      const makePoints = () => {
        pts = [];
        const cols = Math.ceil(w / density) + 1;
        const rows = Math.ceil(h / density) + 1;
        for (let y = 0; y <= rows; y++) {
          for (let x = 0; x <= cols; x++) {
            const px = x * density + s.random(-20, 20);
            const py = y * density + s.random(-20, 20);
            const phase = s.random(0, s.TAU);
            pts.push({ x: px, y: py, phase });
          }
        }

        triangles = [];
        const idx = (cx, cy) => cy * (cols + 1) + cx;
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const a = idx(x, y);
            const b = idx(x + 1, y);
            const c = idx(x, y + 1);
            const d = idx(x + 1, y + 1);
            triangles.push([a, b, c]);
            triangles.push([b, d, c]);
          }
        }

        // Initialize particles
        particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };

      s.setup = () => {
        w = s.windowWidth;
        h = s.windowHeight;
        const canvas = s.createCanvas(w, h);
        canvas.parent(sketchParentRef.current);
        s.noStroke();
        makePoints();
      };

      s.windowResized = () => {
        w = s.windowWidth;
        h = s.windowHeight;
        s.resizeCanvas(w, h);
        makePoints();
      };

      s.draw = () => {
        s.background(30, 40, 60);

        const t = s.millis() * 0.001;

        // Update and draw particles
        for (let particle of particles) {
          particle.update();
          particle.display();
        }

        // Animate points with mouse interaction
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          let offsetX = Math.sin(t * 0.8 + p.phase) * 25;
          let offsetY = Math.cos(t * 0.6 + p.phase) * 25;

          // Mouse repulsion effect
          const dx = s.mouseX - p.x;
          const dy = s.mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseInfluence) {
            const force = (mouseInfluence - dist) / mouseInfluence;
            offsetX -= dx * force * 0.5;
            offsetY -= dy * force * 0.5;
          }

          p._x = p.x + offsetX;
          p._y = p.y + offsetY;
        }

        // Draw triangles with enhanced colors
        for (let i = 0; i < triangles.length; i++) {
          const [ia, ib, ic] = triangles[i];
          const a = pts[ia];
          const b = pts[ib];
          const c = pts[ic];

          const cx = (a._x + b._x + c._x) / 3;
          const cy = (a._y + b._y + c._y) / 3;

          // Distance from center
          const centerDist = Math.hypot(cx - w / 2, cy - h / 2);
          const centerAlpha = s.map(centerDist, 0, Math.max(w, h) / 2, 80, 20);

          // Distance from mouse
          const mouseDist = Math.hypot(cx - s.mouseX, cy - s.mouseY);
          const mouseEffect = s.constrain(s.map(mouseDist, 0, 300, 1.5, 0), 0, 1.5);

          s.fill(200, 220, 255, centerAlpha * (1 + mouseEffect));

          s.triangle(a._x, a._y, b._x, b._y, c._x, c._y);
        }

        // Draw connecting lines near mouse
        s.stroke(100, 200, 255, 50);
        s.strokeWeight(1);
        for (let i = 0; i < pts.length; i++) {
          const p1 = pts[i];
          const dist1 = Math.hypot(p1._x - s.mouseX, p1._y - s.mouseY);
          if (dist1 < 100) {
            for (let j = i + 1; j < pts.length; j++) {
              const p2 = pts[j];
              const dist2 = Math.hypot(p2._x - s.mouseX, p2._y - s.mouseY);
              const distBetween = Math.hypot(p1._x - p2._x, p1._y - p2._y);
              if (dist2 < 100 && distBetween < density * 1.5) {
                const alpha = s.map(distBetween, 0, density * 1.5, 80, 0);
                s.stroke(100, 200, 255, alpha);
                s.line(p1._x, p1._y, p2._x, p2._y);
              }
            }
          }
        }
        s.noStroke();
      };
    };

    p5Ref.current = new p5(sketch);

    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
        p5Ref.current = null;
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-black to-gray-900 text-white"
    >
      <div
        ref={sketchParentRef}
        className="absolute inset-0 z-0"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-base md:text-lg tracking-wide uppercase opacity-80"
          >
            {greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg opacity-90"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <motion.a
              href="/Ganesh_M.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 text-white font-semibold shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300"
            >
              Get My Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 flex justify-center w-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-300" />
        </motion.div>
      </div>
    </section>
  );
}
