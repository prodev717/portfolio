import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Github } from "lucide-react";

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
      className="relative w-full min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: "rgb(30, 40, 60)" }}
    >

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <p className="text-lg leading-relaxed text-gray-200">
                  Hello , I'm{" "}
                  <span className="font-semibold bg-gradient-to-r from-sky-200 to-teal-200 bg-clip-text text-transparent">
                    Ganesh M
                  </span>{" "}
                  — a<span className="text-sky-300"> Full‑Stack Developer</span>{" "}
                  and CSE undergrad at
                  <span className="text-sky-300"> VIT‑AP University</span>. I
                  love crafting scalable web & mobile apps, exploring{" "}
                  <span className="text-white font-medium">
                    AI/ML algorithms
                  </span>
                  , and dabbling in
                  <span className="text-white font-medium">
                    {" "}
                    creative/graphic coding
                  </span>{" "}
                  and embedded systems.
                </p>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-400/20 rounded-xl">
                    <GraduationCap size={24} className="text-sky-300" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-200 to-white bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  <span className="font-semibold text-white">
                    B.Tech in Computer Science & Engineering
                  </span>
                  <br />
                  <span className="text-sky-200">VIT‑AP University</span>
                  <br />
                  <span className="text-gray-300 text-base">
                    CGPA: 8.5 / 10 • Expected Graduation: May 2027 • Amaravati,
                    AP
                  </span>
                </p>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-teal-400/20 rounded-xl">
                    <BookOpen size={24} className="text-teal-300" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent">
                    Relevant Coursework
                  </h3>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">
                      Intro to Problem Solving (Python), Intro to Programming
                      (C/C++)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">
                      Object-Oriented Programming (Java), Data Structures &
                      Algorithms (Java)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">
                      Software Engineering, DBMS
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">
                      Operating Systems (OS), Computer Networks (CN)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">
                      Artificial Intelligence, Intro to Machine Learning
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
                onClick={() => { window.open("https://github.com/prodev717", "_blank"); }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-400/20 rounded-xl">
                    <Github size={24} className="text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                    GitHub Overview
                  </h3>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    loading="lazy"
                    className="w-full"
                    alt={`GitHub stats card for ${githubUsername}`}
                    src={`${statCardBase}/user-stats/${githubUsername}?cardType=github&theme=dark&fontFamily=Mandali&preferLogin=false&Border=000000`}
                  />
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300"
                onClick={() => { window.open("https://leetcode.com/u/prodev717", "_blank"); }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-400/20 rounded-xl">
                    <img
                      src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                      alt="LeetCode logo"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                    LeetCode Stats
                  </h3>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    loading="lazy"
                    className="w-full"
                    alt={`LeetCode stats card for ${leetcodeUsername}`}
                    src={`${leetCodeBase}/${leetcodeUsername}?ext=heatmap`}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
