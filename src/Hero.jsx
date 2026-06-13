import { useEffect, useRef } from "react";
import p5 from "p5";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero({
  name = "Ganesh M",
  greeting = "Hello, Devs! ✌️",
  tagline = "B.Tech CSE | Full-Stack Developer | Creative Coder & Tech Enthusiast",
}) {
  const sketchParentRef = useRef(null);
  const p5Ref = useRef(null);

  useEffect(() => {
    if (p5Ref.current) return;

    const sketch = (s) => {
      let shapes = [];
      const numShapes = 18;
      const palette = ["#EB4E63", "#908571", "#E0A0A1", "#FBFAF7"];
      let w = 0;
      let h = 0;

      const createShape = (x, y) => {
        const type = s.random(["circle", "square", "triangle", "cross", "star"]);
        const color = s.random(palette);
        const size = s.random(25, 60);
        return {
          x: x || s.random(100, w - 100),
          y: y || s.random(100, h - 100),
          vx: s.random(-0.8, 0.8),
          vy: s.random(-0.8, 0.8),
          driftX: s.random(-0.1, 0.1),
          driftY: s.random(-0.1, 0.1),
          angle: s.random(0, s.TAU),
          vr: s.random(-0.01, 0.01),
          size,
          color,
          type,
        };
      };

      const drawShape = (ctx, type, size) => {
        if (type === "circle") {
          ctx.ellipse(0, 0, size, size);
        } else if (type === "square") {
          ctx.rect(-size / 2, -size / 2, size, size);
        } else if (type === "triangle") {
          ctx.triangle(0, -size / 2, -size / 2, size / 2, size / 2, size / 2);
        } else if (type === "cross") {
          ctx.strokeWeight(ctx.strokeWeight() * 1.5);
          ctx.line(-size / 2, 0, size / 2, 0);
          ctx.line(0, -size / 2, 0, size / 2);
        } else if (type === "star") {
          ctx.beginShape();
          for (let i = 0; i < 8; i++) {
            let angle = (i * s.TAU) / 8;
            let r = i % 2 === 0 ? size / 2 : size / 5;
            let sx = s.cos(angle) * r;
            let sy = s.sin(angle) * r;
            ctx.vertex(sx, sy);
          }
          ctx.endShape(s.CLOSE);
        }
      };

      s.setup = () => {
        w = s.windowWidth;
        h = s.windowHeight;
        const canvas = s.createCanvas(w, h);
        canvas.parent(sketchParentRef.current);
        s.ellipseMode(s.CENTER);
        s.rectMode(s.CENTER);

        for (let i = 0; i < numShapes; i++) {
          shapes.push(createShape());
        }
      };

      s.windowResized = () => {
        w = s.windowWidth;
        h = s.windowHeight;
        s.resizeCanvas(w, h);
      };

      s.draw = () => {
        // Clear with slight alpha to preserve performance, blending with cream bg
        s.background(251, 250, 247);

        // Subtle background grid
        s.stroke(24, 33, 37, 18);
        s.strokeWeight(1);
        const gridSpacing = 40;
        for (let x = 0; x < w; x += gridSpacing) {
          s.line(x, 0, x, h);
        }
        for (let y = 0; y < h; y += gridSpacing) {
          s.line(0, y, w, y);
        }

        // Draw connections if mouse is active or elements are close
        s.stroke(24, 33, 37, 25);
        s.strokeWeight(2);
        for (let i = 0; i < shapes.length; i++) {
          for (let j = i + 1; j < shapes.length; j++) {
            let d = s.dist(shapes[i].x, shapes[i].y, shapes[j].x, shapes[j].y);
            if (d < 180) {
              s.line(shapes[i].x, shapes[i].y, shapes[j].x, shapes[j].y);
            }
          }
        }

        // Update and draw shapes
        shapes.forEach((p) => {
          // Add velocity drift
          p.vx += p.driftX;
          p.vy += p.driftY;

          // Limit speed
          p.vx = s.constrain(p.vx, -3, 3);
          p.vy = s.constrain(p.vy, -3, 3);

          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.vr;

          // Apply gentle friction
          p.vx *= 0.95;
          p.vy *= 0.95;

          // Boundaries bounce
          const margin = p.size / 2;
          if (p.x < margin) {
            p.x = margin;
            p.vx *= -1;
          }
          if (p.x > w - margin) {
            p.x = w - margin;
            p.vx *= -1;
          }
          if (p.y < margin) {
            p.y = margin;
            p.vy *= -1;
          }
          if (p.y > h - margin) {
            p.y = h - margin;
            p.vy *= -1;
          }

          // Mouse repulsion physics
          let dx = s.mouseX - p.x;
          let dy = s.mouseY - p.y;
          let d = s.dist(s.mouseX, s.mouseY, p.x, p.y);
          if (d < 160 && d > 1) {
            let force = (160 - d) / 160;
            p.vx -= (dx / d) * force * 1.8;
            p.vy -= (dy / d) * force * 1.8;
            p.vr += s.random(-0.02, 0.02);
          }

          // Shadow rendering (Classic Brutalist flat offset)
          s.push();
          s.translate(p.x, p.y);
          s.rotate(p.angle);

          // Draw dark border/shadow first
          s.push();
          s.translate(4, 4);
          s.fill(24, 33, 37);
          s.stroke(24, 33, 37);
          s.strokeWeight(2.5);
          drawShape(s, p.type, p.size);
          s.pop();

          // Draw main colored shape
          s.fill(p.color);
          s.stroke(24, 33, 37);
          s.strokeWeight(2.5);
          drawShape(s, p.type, p.size);

          s.pop();
        });
      };

      s.mousePressed = () => {
        // Spawn additional interactive shape at mouse coordinates
        if (shapes.length < 35 && s.mouseX > 0 && s.mouseX < w && s.mouseY > 0 && s.mouseY < h) {
          shapes.push(createShape(s.mouseX, s.mouseY));
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
      className="relative min-h-screen w-full overflow-hidden bg-brand-bg text-brand-dark flex flex-col justify-center items-center px-6 pt-20"
    >
      {/* Interactive Canvas Background */}
      <div
        ref={sketchParentRef}
        className="absolute inset-0 z-0 opacity-80"
        aria-hidden
      />

      {/* Hero Content Box */}
      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center">
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 border-2 border-brand-dark bg-brand-rose font-display font-extrabold text-sm uppercase tracking-widest rotate-[-1deg] shadow-[2px_2px_0px_0px_#182125]"
        >
          <Sparkles size={16} />
          {greeting}
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-none uppercase tracking-tight text-brand-dark"
        >
          I am{" "}
          <span className="bg-brand-red text-brand-bg px-4 py-1 inline-block rotate-[1.5deg] border-4 border-brand-dark shadow-[6px_6px_0px_0px_rgba(24,33,37,1)] select-all">
            {name}
          </span>
        </motion.h1>

        {/* Tagline Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl px-6 py-4 bg-[#FBFAF7] border-3 border-brand-dark neo-shadow font-sans font-bold text-base md:text-lg text-brand-dark"
        >
          {tagline}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/Ganesh_M.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-brand-red text-brand-bg font-display font-extrabold text-lg border-3 border-brand-dark neo-shadow uppercase tracking-wider transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Get My Resume
          </a>
          
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-muddy text-brand-bg font-display font-extrabold text-lg border-3 border-brand-dark neo-shadow uppercase tracking-wider transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Let's Talk!
          </a>
        </motion.div>
      </div>

      {/* Floating Canvas Tip */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-dark/60 pointer-events-none select-none uppercase tracking-widest bg-brand-bg px-2.5 py-1 border border-brand-dark/20 z-10">
        💡 Click empty space to spawn shapes!
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        className="absolute bottom-6 flex justify-center w-full z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="p-2 border-2 border-brand-dark bg-[#FBFAF7] hover:bg-brand-rose transition-colors">
          <ChevronDown size={24} strokeWidth={2.5} className="text-brand-dark" />
        </a>
      </motion.div>
    </section>
  );
}
