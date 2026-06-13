import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  Frameworks: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTMX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/htmx/htmx-original.svg" },
  ],
  DatabasesAndTools: [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Raspberry Pi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "CI/CD", logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
    { name: "REST API", logo: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png" },
    { name: "AI/ML", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
    { name: "Computer Vision", logo: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png" },
    { name: "Networking", logo: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { name: "Game Dev", logo: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png" },
  ]
};

// Colors for skill cards in rotation
const cardColors = ["#FBFAF7", "#E0A0A1", "#908571"];

function InfiniteRow({ items, reverse = false }) {
  // Triple the items array to ensure a continuous overflow flow
  const tripledItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full py-4 relative">
      {/* Visual Fade Gradients at Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {tripledItems.map((skill, i) => {
          const cardBg = cardColors[i % cardColors.length];
          return (
            <div
              key={i}
              className="min-w-[140px] md:min-w-[160px] border-3 border-brand-dark rounded-none p-4 flex flex-col items-center justify-center neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 cursor-grab active:cursor-grabbing"
              style={{ backgroundColor: cardBg }}
            >
              <div className="w-12 h-12 flex items-center justify-center p-1 bg-white border-2 border-brand-dark neo-shadow-sm rotate-[1.5deg] hover:rotate-0 transition-transform duration-100 mb-3">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-display font-black text-brand-dark text-center select-none uppercase tracking-wide">
                {skill.name}
              </h3>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function SkillsCarousel() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 overflow-hidden bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern flex flex-col justify-center"
    >
      <div className="z-10 w-full">
        {/* Section Title Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-muddy text-brand-bg px-8 py-3 border-3 border-brand-dark neo-shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Technical Skills
            </h2>
          </motion.div>
        </div>

        {/* Rows of Skills */}
        <div className="flex flex-col gap-6 w-full">
          <div>
            <div className="max-w-6xl mx-auto px-6 mb-2">
              <span className="font-display font-black text-sm uppercase tracking-widest bg-brand-rose text-brand-dark px-3 py-1 border-2 border-brand-dark inline-block rotate-[-0.5deg]">
                Languages
              </span>
            </div>
            <InfiniteRow items={skills.Languages} />
          </div>

          <div>
            <div className="max-w-6xl mx-auto px-6 mb-2">
              <span className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-brand-bg px-3 py-1 border-2 border-brand-dark inline-block rotate-[1deg]">
                Frameworks & Libraries
              </span>
            </div>
            <InfiniteRow items={skills.Frameworks} reverse />
          </div>

          <div>
            <div className="max-w-6xl mx-auto px-6 mb-2">
              <span className="font-display font-black text-sm uppercase tracking-widest bg-brand-dark text-brand-bg px-3 py-1 border-2 border-brand-dark inline-block rotate-[-1deg]">
                Databases, Tools & Concepts
              </span>
            </div>
            <InfiniteRow items={skills.DatabasesAndTools} />
          </div>
        </div>
      </div>
    </section>
  );
}
