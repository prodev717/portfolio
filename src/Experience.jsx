import { motion } from "framer-motion";
import { Briefcase, Award, ExternalLink } from "lucide-react";

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
    links: [],
    skills: "Java, Python, React (Basic), REST API (Intermediate)",
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#E0A0A1] text-brand-dark px-8 py-3 border-3 border-brand-dark neo-shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Experience & Credentials
            </h2>
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8 mb-16">
          
          {/* Subheading Tab */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark text-brand-bg px-4 py-1.5 font-display font-black text-base md:text-lg uppercase tracking-wider border-2 border-brand-dark flex items-center gap-2">
              <Briefcase size={18} strokeWidth={2.5} />
              <span>Work Experience</span>
            </div>
            <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FBFAF7] border-3 border-brand-dark p-6 neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,33,37,1)] transition-all duration-150"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-2xl font-display font-black uppercase tracking-wide text-brand-dark">
                      {exp.role}
                    </h3>
                    
                    {/* Company Badge */}
                    <span className="inline-block mt-2 bg-brand-rose text-brand-dark border-2 border-brand-dark px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                      🏢 {exp.company}
                    </span>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="bg-brand-muddy text-brand-bg border-2 border-brand-dark px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider shrink-0 self-start md:self-auto">
                    📅 {exp.duration}
                  </div>
                </div>

                {/* Location Badge */}
                <div className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
                  📍 {exp.location}
                </div>

                {/* Description Box */}
                <p className="text-brand-dark/90 text-sm md:text-base leading-relaxed font-medium bg-[#FBFAF7] border-2 border-brand-dark/25 p-4 neo-shadow-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          
          {/* Subheading Tab */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark text-brand-bg px-4 py-1.5 font-display font-black text-base md:text-lg uppercase tracking-wider border-2 border-brand-dark flex items-center gap-2">
              <Award size={18} strokeWidth={2.5} />
              <span>Certifications & Badges</span>
            </div>
            <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FBFAF7] border-3 border-brand-dark p-6 neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Cert Title */}
                  <h3 className="text-xl font-display font-black uppercase tracking-wide text-brand-dark leading-tight mb-3">
                    {cert.title}
                  </h3>
                  
                  {/* Skills tags list */}
                  <div className="mt-3 p-3 bg-brand-bg border-2 border-brand-dark/30 text-xs font-semibold text-brand-dark/80 leading-relaxed rounded-none mb-6">
                    <span className="font-bold text-brand-dark uppercase block mb-1">Topics Covered:</span>
                    {cert.skills}
                  </div>
                </div>

                {/* Link button (if exists) */}
                {cert.links.length > 0 ? (
                  <a
                    href={cert.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 bg-brand-red text-brand-bg border-2 border-brand-dark font-display font-extrabold text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-dark hover:text-brand-bg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                ) : (
                  <div className="w-full text-center py-2 bg-brand-gray/20 text-brand-dark/60 border-2 border-dashed border-brand-dark/40 font-display font-extrabold text-xs md:text-sm uppercase tracking-wider">
                    Internal/Self-Study Verified
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
