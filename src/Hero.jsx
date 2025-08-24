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
      let w = 0;
      let h = 0;
      const density = 120; 

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

       
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          p._x = p.x + Math.sin(t * 0.8 + p.phase) * 25; 
          p._y = p.y + Math.cos(t * 0.6 + p.phase) * 25; 
        }

        
        for (let i = 0; i < triangles.length; i++) {
          const [ia, ib, ic] = triangles[i];
          const a = pts[ia];
          const b = pts[ib];
          const c = pts[ic];

         
          const cx = (a._x + b._x + c._x) / 3;
          const cy = (a._y + b._y + c._y) / 3;
          const dist = Math.hypot(cx - w / 2, cy - h / 2);
          const alpha = s.map(dist, 0, Math.max(w, h) / 2, 80, 20);

          s.fill(200, 220, 255, alpha);
          s.triangle(a._x, a._y, b._x, b._y, c._x, c._y);
        }
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
        className="pointer-events-none absolute inset-0 z-0"
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
