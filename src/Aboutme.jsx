import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Github, User } from "lucide-react";

// Retro Window Component
function NeoWindow({ title, icon: Icon, children, headerBg = "bg-brand-dark", textCol = "text-brand-bg", onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="border-3 border-brand-dark bg-brand-bg neo-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,33,37,1)] cursor-pointer"
    >
      {/* Title Bar */}
      <div className={`flex items-center justify-between px-4 py-2 border-b-3 border-brand-dark ${headerBg} ${textCol}`}>
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} strokeWidth={2.5} />}
          <span className="font-display font-extrabold text-sm uppercase tracking-wider">{title}</span>
        </div>
        {/* Mock Window Controls */}
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full border-2 border-brand-dark bg-brand-red"></span>
          <span className="w-3 h-3 rounded-full border-2 border-brand-dark bg-brand-rose"></span>
          <span className="w-3 h-3 rounded-full border-2 border-brand-dark bg-brand-muddy"></span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutMe({
  githubUsername = "prodev717",
  leetcodeUsername = "prodev717",
  theme = "tokyonight",
}) {
  const statCardBase = `https://awesome-github-stats.azurewebsites.net`;
  const leetCodeBase = `https://leetcard.jacoblin.cool`;

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern flex items-center justify-center"
    >
      <div className="max-w-6xl w-full z-10">
        
        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-red text-brand-bg px-8 py-3 border-3 border-brand-dark neo-shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              About Me
            </h2>
          </motion.div>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Bio & Info */}
          <div className="space-y-8">
            
            {/* Bio Card */}
            <NeoWindow title="Developer Bio" icon={User} headerBg="bg-brand-muddy" textCol="text-brand-bg">
              <p className="text-base md:text-lg leading-relaxed font-bold text-brand-dark">
                Hello, I'm{" "}
                <span className="px-1.5 py-0.5 bg-brand-rose border-2 border-brand-dark inline-block rotate-[-1deg] text-brand-dark">
                  Ganesh M
                </span>{" "}
                — a <span className="underline decoration-brand-red decoration-3">Full-Stack Developer</span> and Computer Science undergrad at{" "}
                <span className="underline decoration-brand-muddy decoration-3 font-extrabold text-brand-dark">
                  VIT-AP University
                </span>. 
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-dark/80">
                I love crafting scalable web & mobile applications, exploring machine learning models, and building hardware interfaces (Arduino/Raspberry Pi) that connect computer vision to physical systems.
              </p>
            </NeoWindow>

            {/* Education Card */}
            <NeoWindow title="Education" icon={GraduationCap} headerBg="bg-brand-rose" textCol="text-brand-dark">
              <div className="font-bold text-brand-dark">
                <span className="text-xl font-display font-black uppercase block">
                  B.Tech in Computer Science & Eng.
                </span>
                <span className="text-brand-red text-lg block mt-1">
                  VIT-AP University
                </span>
                <div className="mt-3 p-3 bg-brand-bg border-2 border-brand-dark neo-shadow-sm flex flex-col gap-1 text-sm md:text-base">
                  <span>🎓 CGPA: 8.5 / 10</span>
                  <span>🗓️ Expected Graduation: May 2027</span>
                  <span>📍 Amaravati, Andhra Pradesh, India</span>
                </div>
              </div>
            </NeoWindow>

            {/* Coursework Card */}
            <NeoWindow title="Relevant Coursework" icon={BookOpen} headerBg="bg-brand-dark" textCol="text-brand-bg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming (Java)",
                  "Operating Systems (OS)",
                  "Database Management Systems",
                  "Computer Networks (CN)",
                  "Software Engineering",
                  "Artificial Intelligence",
                  "Intro to Machine Learning"
                ].map((course, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 p-2 bg-[#FBFAF7] border-2 border-brand-dark text-xs md:text-sm font-bold shadow-[2px_2px_0px_0px_rgba(24,33,37,1)] hover:bg-brand-rose transition-colors duration-100"
                  >
                    <span className="w-2.5 h-2.5 bg-brand-red border border-brand-dark shrink-0"></span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </NeoWindow>
          </div>

          {/* Right Column: Code/API Stats Platforms */}
          <div className="space-y-8">
            
            {/* GitHub Stats Panel */}
            <NeoWindow 
              title="GitHub Profile Stats" 
              icon={Github} 
              headerBg="bg-brand-dark" 
              textCol="text-brand-bg"
              onClick={() => window.open(`https://github.com/${githubUsername}`, "_blank")}
            >
              <div className="border-2 border-brand-dark p-2 bg-[#182125] neo-shadow-sm overflow-hidden hover:scale-[1.01] transition-transform duration-150">
                <img
                  loading="lazy"
                  className="w-full h-auto object-cover"
                  alt={`GitHub stats card for ${githubUsername}`}
                  src={`${statCardBase}/user-stats/${githubUsername}?cardType=github&theme=dark&fontFamily=Mandali&preferLogin=false&Border=000000`}
                />
              </div>
              <div className="mt-3 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-rose px-2.5 py-1 border border-brand-dark">
                  ⚡ Click to visit github
                </span>
              </div>
            </NeoWindow>

            {/* LeetCode Stats Panel */}
            <NeoWindow 
              title="LeetCode Performance" 
              icon={() => (
                <img
                  src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                  alt="LeetCode logo"
                  className="h-4 w-4 object-contain"
                />
              )}
              headerBg="bg-brand-muddy"
              textCol="text-brand-bg"
              onClick={() => window.open(`https://leetcode.com/u/${leetcodeUsername}`, "_blank")}
            >
              <div className="border-2 border-brand-dark p-2 bg-[#182125] neo-shadow-sm overflow-hidden hover:scale-[1.01] transition-transform duration-150">
                <img
                  loading="lazy"
                  className="w-full h-auto object-cover"
                  alt={`LeetCode stats card for ${leetcodeUsername}`}
                  src={`${leetCodeBase}/${leetcodeUsername}?ext=heatmap`}
                />
              </div>
              <div className="mt-3 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-rose px-2.5 py-1 border border-brand-dark">
                  ⚡ Click to visit leetcode
                </span>
              </div>
            </NeoWindow>

          </div>
        </div>
      </div>
    </section>
  );
}
