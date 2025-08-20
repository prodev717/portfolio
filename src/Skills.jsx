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
  Databases: [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  Tools: [
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
  ],
};

function InfiniteRow({ items, reverse = false }) {
  return (
    <div className="overflow-hidden w-full py-6">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((skill, i) => (
          <div
            key={i}
            className="min-w-[160px] bg-white/10 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-2" />
            <h3 className="text-sm font-semibold text-teal-200">{skill.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsCarousel() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: "rgb(30, 40, 60)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 px-6">
        <InfiniteRow items={skills.Languages} />
        <InfiniteRow items={skills.Frameworks} reverse />
        <InfiniteRow items={[...skills.Databases, ...skills.Tools]} />
      </div>
    </section>
  );
}
