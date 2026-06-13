import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  "DB & Tools": [
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
  ],
};

const tabColors = {
  Languages: { active: "bg-brand-rose text-brand-dark", indicator: "#E0A0A1" },
  Frameworks: { active: "bg-brand-red text-brand-bg", indicator: "#EB4E63" },
  "DB & Tools": { active: "bg-brand-dark text-brand-bg", indicator: "#182125" },
};

const cardColors = ["#FBFAF7", "#E0A0A1", "#908571"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
};

export default function SkillsCarousel() {
  const [activeTab, setActiveTab] = useState("Languages");
  const tabs = Object.keys(skills);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-24 overflow-hidden bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern flex flex-col justify-center"
    >
      <div className="z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-muddy text-brand-bg px-4 py-2.5 sm:px-8 sm:py-3 border-3 border-brand-dark neo-shadow sm:neo-shadow-lg"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Technical Skills
            </h2>
          </motion.div>
        </div>

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative px-4 sm:px-6 py-2 sm:py-3 font-display font-black text-sm sm:text-base uppercase tracking-wider
                  border-3 border-brand-dark transition-all duration-150 cursor-pointer
                  ${isActive
                    ? `${tabColors[tab].active} shadow-[4px_4px_0px_0px_rgba(24,33,37,1)] translate-x-[-2px] translate-y-[-2px]`
                    : "bg-brand-bg text-brand-dark hover:bg-brand-rose hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(24,33,37,1)]"
                  }
                `}
              >
                {tab}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-dark"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Tab count badge */}
        <motion.div
          key={activeTab + "-count"}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6 px-1"
        >
          <span
            className="font-display font-black text-xs uppercase tracking-widest px-3 py-1 border-2 border-brand-dark inline-block"
            style={{ backgroundColor: tabColors[activeTab].indicator, color: activeTab === "DB & Tools" ? "#FBFAF7" : "#182125" }}
          >
            {activeTab}
          </span>
          <span className="font-bold text-sm text-brand-dark/60">
            {skills[activeTab].length} skills
          </span>
          <div className="flex-1 h-[2px] bg-brand-dark/20" />
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4"
          >
            {skills[activeTab].map((skill, i) => {
              const cardBg = cardColors[i % cardColors.length];
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{
                    translateX: -3,
                    translateY: -3,
                    boxShadow: "5px 5px 0px 0px rgba(24,33,37,1)",
                  }}
                  className="border-3 border-brand-dark p-2 sm:p-3 flex flex-col items-center justify-center neo-shadow cursor-pointer group overflow-hidden"
                  style={{ backgroundColor: cardBg }}
                >
                  {/* Logo box */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-2 border-brand-dark neo-shadow-sm rotate-[1.5deg] group-hover:rotate-0 transition-transform duration-150 mb-2 shrink-0">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  {/* Name */}
                  <span className="text-[9px] sm:text-[11px] font-display font-black text-brand-dark text-center uppercase tracking-normal sm:tracking-wide leading-tight w-full break-words line-clamp-2">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 h-1 bg-brand-dark origin-left"
        />
      </div>
    </section>
  );
}
