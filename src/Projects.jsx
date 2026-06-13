import { motion } from "framer-motion";

const categories = {
  "Featured Projects": [
    {
      title: "Connekt",
      desc: "A social media platform designed exclusively for VIT-AP students. Features include asking/answering questions, finding teammates, reporting lost items, travel partners, and anonymous confessions. Built with React.js, Material UI, Node.js, Express.js, MongoDB, and Cloudinary.",
      github: "https://github.com/prodev717/connekt",
      tags: ["React.js", "Material UI", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Siteingest",
      desc: "A full-stack SaaS platform for website hosting with subdomain support, ad injection for monetization, and built-in analytics. Uses React, Bootstrap, PocketBase, and Flask.",
      github: "https://github.com/prodev717/siteingest",
      tags: ["React", "Bootstrap", "PocketBase", "Flask", "SaaS"]
    },
    {
      title: "Git2Know",
      desc: "AI-powered GitHub profile summarizer with Q&A. Built using React frontend and Flask backend, integrating Gemini API and GitHub API to provide insights about repositories, skills, and README content.",
      github: "https://github.com/prodev717/git2know",
      tags: ["React", "Flask", "Gemini API", "GitHub API"]
    },
  ],
  Experiments: [
    {
      title: "Web Embedded Python",
      desc: "A lightweight micro-framework that allows embedding Python directly in HTML using .wep files and <wep> tags. Built with Flask for dynamic web development.",
      github: "https://github.com/prodev717/web-embedded-python",
      tags: ["Python", "Flask", "Parser", "Framework"]
    },
    {
      title: "Neurogen",
      desc: "A simple deep neural network library in Python using NumPy. Includes demo for a self-driving car simulation.",
      github: "https://github.com/prodev717/neurogen",
      tags: ["Python", "NumPy", "Neural Networks", "Simulation"]
    },
    {
      title: "AWFEX",
      desc: "Automation Workflow Engine Experiment - A lightweight, open-source alternative to n8n. Features visual workflow builder with React Flow, serverless-ready architecture, HTTP-based triggers, and unlimited custom function support. Built with Express.js and React.",
      github: "https://github.com/prodev717/awfex",
      tags: ["React Flow", "Express.js", "React", "Serverless"]
    },
  ],
  Hardware: [
    {
      title: "CV Controller",
      desc: "Gesture-based desktop and game control using OpenCV and Mediapipe. Tracks body movements and hand gestures, simulating keyboard/mouse input with pydirectinput.",
      github: "https://github.com/prodev717/cv-controller",
      tags: ["OpenCV", "Mediapipe", "Python", "Computer Vision"]
    },
    {
      title: "GCRS",
      desc: "Gesture-controlled robotic arm using a webcam, servo motors, Arduino, OpenCV, and pyFirmata. Allows directional and hand control for dual-axis arm.",
      github: "https://github.com/prodev717/gcrs",
      tags: ["Arduino", "OpenCV", "pyFirmata", "Robotics"]
    },
    {
      title: "GestureCall",
      desc: "Video call intercom system for deaf individuals. Uses Raspberry Pi, vibration motors, AI-powered sign language translation, FastAPI, OpenCV, Mediapipe, and socket programming.",
      github: "https://github.com/prodev717/gesturecall",
      tags: ["Raspberry Pi", "FastAPI", "OpenCV", "Mediapipe", "Sockets"]
    },
  ],
};

const cardColors = ["#FBFAF7", "#E0A0A1", "#908571"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 sm:px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-rose text-brand-dark px-8 py-3 border-3 border-brand-dark neo-shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Projects
            </h2>
          </motion.div>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-16">
          {Object.entries(categories).map(([categoryName, projects], catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Tab Header */}
              <div className="flex items-center">
                <div className="bg-brand-dark text-brand-bg px-5 py-2 font-display font-black text-lg md:text-xl uppercase tracking-wider border-2 border-brand-dark rotate-[-0.5deg]">
                  {categoryName}
                </div>
                <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => {
                  const cardBg = cardColors[(i + catIdx) % cardColors.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-3 border-brand-dark p-6 flex flex-col justify-between neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] transition-all duration-150"
                      style={{ backgroundColor: cardBg }}
                    >
                      <div>
                        {/* Project Title */}
                        <h4 className="text-2xl font-display font-black text-brand-dark uppercase tracking-wide mb-3">
                          {project.title}
                        </h4>
                        
                        {/* Description */}
                        {project.desc && (
                          <p className="text-brand-dark/95 font-medium text-sm md:text-base leading-relaxed mb-4">
                            {project.desc}
                          </p>
                        )}
                      </div>

                      <div>
                        {/* Tags Badges */}
                        {project.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xxs md:text-xs font-bold uppercase tracking-wider bg-brand-bg text-brand-dark border border-brand-dark px-1.5 py-0.5 rounded-none"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* GitHub Button */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center py-2.5 font-display font-extrabold text-sm uppercase bg-brand-dark text-brand-bg border-2 border-brand-dark hover:bg-brand-red hover:text-brand-bg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none inline-block"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom CTA */}
        <div className="text-center mt-20">
          <motion.a
            href="https://github.com/prodev717?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-brand-muddy text-brand-bg font-display font-black text-lg border-3 border-brand-dark neo-shadow uppercase tracking-wider transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Explore More Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
