import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Feedine Foodworks",
    duration: "Jan 2025 - Jun 2025 · 6 months",
    location: "Chennai, Tamil Nadu, India · Remote",
    description:
      "Tested both web and mobile applications to ensure smooth functionality and optimal user experience. Handled complete deployment and configuration of a website built with PHP, Laravel, Vue.js, and MySQL. Worked with a Flutter-based mobile application to identify and fix issues, enhancing performance and usability. Assisted in server setup, environment configuration, and database management to ensure seamless integration across the tech stack.",
  },
];

const certifications = [
  {
    title: "GEN AI Using IBM - Watsonx",
    links: [
      "https://courses.vit.skillsnetwork.site/certificates/ce8780eef5a047b7a142f162b410686b",
    ],
    skills:
      "Generative AI · Retrieval-Augmented Generation (RAG) · Chatbot Development · NLP · Transformers · Machine Learning · AI",
  },
  {
    title: "IGNITE 3.4",
    links: [
      "https://web.certificate.wfglobal.org/en/certificate?certificateId=67fde8a2eeacc2785e226e60",
    ],
    skills: "Ideation · Prototyping · Business Modeling · Financial Planning",
  },
  {
    title: "HackerRank Certifications",
    links: [
      "https://www.hackerrank.com/certificates/1d448582eb07",
      "https://www.hackerrank.com/certificates/71b294de4b98",
      "https://www.hackerrank.com/certificates/0e7b82a1b342",
      "https://www.hackerrank.com/certificates/8f369c854ab1",
    ],
    skills: "Java, Python, React (Basic), REST API (Intermediate)",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience & Certifications
          </span>
        </h2>
      </motion.div>


      <div className="max-w-5xl mx-auto flex flex-col gap-10 mb-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-semibold text-teal-200">
                {exp.role}
              </h3>
              <span className="text-gray-300">{exp.duration}</span>
            </div>
            <div className="text-gray-400 mb-2">{exp.company}</div>
            <div className="text-gray-400 mb-2">{exp.location}</div>
            <p className="text-gray-200 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-white/10 border border-white/10 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-200 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-200 mb-4">{cert.skills}</p>
            <div className="flex flex-col gap-2">
              {cert.links.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 font-medium text-sm hover:text-sky-100 transition-colors"
                >
                  View Certificate {cert.links.length > 1 ? i + 1 : ""}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
