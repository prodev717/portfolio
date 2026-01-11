import { motion } from "framer-motion";

const categories = {
  "Featured Projects": [
    {
      title: "Connekt",
      desc: "A social media platform designed exclusively for VIT-AP students. Features include asking/answering questions, finding teammates, reporting lost items, travel partners, and anonymous confessions. Built with React.js, Material UI, Node.js, Express.js, MongoDB, and Cloudinary.",
      github: "https://github.com/prodev717/connekt"
    },
    {
      title: "Siteingest",
      desc: "A full-stack SaaS platform for website hosting with subdomain support, ad injection for monetization, and built-in analytics. Uses React, Bootstrap, PocketBase, and Flask.",
      github: "https://github.com/prodev717/siteingest"
    },
    {
      title: "Git2Know",
      desc: "AI-powered GitHub profile summarizer with Q&A. Built using React frontend and Flask backend, integrating Gemini API and GitHub API to provide insights about repositories, skills, and README content.",
      github: "https://github.com/prodev717/git2know"
    },
  ],
  Experiments: [
    {
      title: "Web Embedded Python",
      desc: "A lightweight micro-framework that allows embedding Python directly in HTML using .wep files and <wep> tags. Built with Flask for dynamic web development.",
      github: "https://github.com/prodev717/web-embedded-python"
    },
    {
      title: "Neurogen",
      desc: "A simple deep neural network library in Python using NumPy. Includes demo for a self-driving car simulation.",
      github: "https://github.com/prodev717/neurogen"
    },
    {
      title: "AWFEX",
      desc: "Automation Workflow Engine Experiment - A lightweight, open-source alternative to n8n. Features visual workflow builder with React Flow, serverless-ready architecture, HTTP-based triggers, and unlimited custom function support. Built with Express.js and React.",
      github: "https://github.com/prodev717/awfex"
    },
  ],
  Hardware: [
    {
      title: "CV Controller",
      desc: "Gesture-based desktop and game control using OpenCV and Mediapipe. Tracks body movements and hand gestures, simulating keyboard/mouse input with pydirectinput.",
      github: "https://github.com/prodev717/cv-controller"
    },
    {
      title: "GCRS",
      desc: "Gesture-controlled robotic arm using a webcam, servo motors, Arduino, OpenCV, and pyFirmata. Allows directional and hand control for dual-axis arm.",
      github: "https://github.com/prodev717/gcrs"
    },
    {
      title: "GestureCall",
      desc: "Video call intercom system for deaf individuals. Uses Raspberry Pi, vibration motors, AI-powered sign language translation, FastAPI, OpenCV, Mediapipe, and socket programming.",
      github: "https://github.com/prodev717/gesturecall"
    },
  ],
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 px-6 bg-[rgb(30,40,60)] text-white"
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </motion.div>


      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {Object.entries(categories).map(([categoryName, projects], idx) => (
          <div key={idx}>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-teal-200 mb-6"
            >
              {categoryName}
            </motion.h3>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
                >
                  <h4 className="text-xl font-semibold text-teal-200 mb-2">
                    {project.title}
                  </h4>
                  {project.desc && (
                    <p className="text-gray-200 flex-grow mb-4">{project.desc}</p>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block text-sm font-medium text-sky-300 hover:text-sky-100 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}


        <div className="text-center mt-12">
          <a
            href="https://github.com/prodev717?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-teal-500 hover:bg-teal-400 rounded-full transition-colors duration-300 shadow-lg"
          >
            Explore More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
