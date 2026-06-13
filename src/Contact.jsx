import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={32} strokeWidth={2.5} />,
    link: "https://linkedin.com/in/ganesh717",
    bg: "bg-[#E0A0A1]",
    hoverText: "Let's Network!"
  },
  {
    name: "GitHub",
    icon: <Github size={32} strokeWidth={2.5} />,
    link: "https://github.com/prodev717",
    bg: "bg-brand-bg",
    hoverText: "View My Code!"
  },
  {
    name: "Email",
    icon: <Mail size={32} strokeWidth={2.5} />,
    link: "mailto:717m.ganesh@gmail.com",
    bg: "bg-brand-red",
    textCol: "text-brand-bg",
    hoverText: "Send an Email!"
  },
  {
    name: "Instagram",
    icon: <Instagram size={32} strokeWidth={2.5} />,
    link: "https://www.instagram.com/ganesh_m.exe",
    bg: "bg-brand-muddy",
    hoverText: "Follow Me!"
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-4xl mx-auto z-10 relative">

        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#FBFAF7] text-brand-dark px-8 py-3 border-3 border-brand-dark neo-shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Contact Me
            </h2>
          </motion.div>
        </div>

        {/* Contact Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {contacts.map((contact, idx) => {
            const isDarkBg = contact.textCol === "text-brand-bg";
            return (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center justify-between border-3 border-brand-dark p-6 neo-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 group h-[220px] w-[220px] ${contact.bg} ${contact.textCol || "text-brand-dark"}`}
              >
                {/* Arrow indicator at top right */}
                <div className="w-full flex justify-end">
                  <div className={`p-1 border-2 border-brand-dark ${isDarkBg ? "bg-[#FBFAF7] text-brand-dark" : "bg-brand-dark text-brand-bg"} rotate-[15deg] group-hover:rotate-0 transition-transform duration-150`}>
                    <ArrowUpRight size={16} strokeWidth={3} />
                  </div>
                </div>

                {/* Main Icon */}
                <div className={`p-4 border-2 border-brand-dark ${isDarkBg ? "bg-[#FBFAF7] text-brand-dark" : "bg-brand-dark text-brand-bg"} neo-shadow-sm rotate-[-3deg] group-hover:rotate-[3deg] transition-transform duration-150`}>
                  {contact.icon}
                </div>

                {/* Contact Name & Detail */}
                <div className="text-center w-full mt-4">
                  <span className="block font-display font-black text uppercase tracking-wider">
                    {contact.name}
                  </span>
                  <span className="block text-xxs font-bold uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {contact.hoverText}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Dynamic bottom message box */}
        <div className="mt-16 bg-brand-rose border-3 border-brand-dark p-6 text-center neo-shadow max-w-2xl mx-auto rotate-[-1deg] hover:rotate-0 transition-transform duration-200">
          <p className="font-display font-extrabold text-lg md:text-xl text-brand-dark uppercase tracking-wide">
            Open for internships, collaborative projects, or a tech chat!
          </p>
        </div>
      </div>
    </section>
  );
}
