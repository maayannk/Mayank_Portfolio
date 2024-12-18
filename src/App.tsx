import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  ChevronRight,
  Twitter,
  Download,
} from "lucide-react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-neutral-100 rounded-xl overflow-hidden shadow-lg"
    >
      <motion.button
        className="w-full text-left flex items-center justify-between py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-mono text-neutral-600 font-semibold">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-neutral-600" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white backdrop-blur-sm">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-neutral-700 text-neutral-100 rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-gradient-to-r from-green-50 via-white to-gray-50 border-t-4  font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" id="content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src="/me.gif"
                alt="Biswarup Sen"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 text-neutral-600">
              Mayank Verma
            </h1>
            <p className="text-2xl text-neutral-600">
              Full Stack Developer
            </p>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed">
              I'm a Full stack Developer with expertise in  the MERN stack. 
              I am passionate about building tech.
              I focus on creating efficient, scalable solutions that make an impact.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  InnoByte Services
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Web Developer Intern | Current Role since December 2024
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Medium{" "}
                </h3>
                <p className="mb-4 text-neutral-600">
                The Medium blogging platform allows users to seamlessly create, update,
                and fetch blogs. Built with modern technologies, 
                the project uses Hono and Cloudflare Workers for the backend, ensuring high performance and serverless
                deployment. TypeScript provides type safety, while JWT secures
                authentication and Zod handles validation. The frontend leverages React for a dynamic user interface,
                styled with TailwindCSS. For data storage, PostgreSQL is paired with Prisma ORM and Prisma Accelerate 
                for efficient connection pooling. This stack ensures scalability, security, and a smooth user experience.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Expense Tracker
                </h3>
                <p className="mb-4 text-neutral-600">
                The Expense tracker application built with the MERN stack,
                allows users to efficiently manage their finances. The app enables users to add, categorize, update, and delete expenses,
                 providing a clear overview of spending habits. This offering flexibility for managing financial records. 
                 This application provides a streamlined and user-friendly solution for personal finance management.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Text to Speech Converter
                </h3>
                <p className="mb-4 text-neutral-600">
                Your Text-to-Speech (TTS) application converts written text into natural-sounding speech,
                making content more accessible and engaging
                This app allows users to input text and listen to it in multiple voices and languages.
                This application is designed to help users with accessibility and language learning, in an interactive and easy-to-use format.
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap -m-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="Express.js" />
              <SkillBadge skill="MongoDB" />
              <SkillBadge skill="PostgreSQL" />
              <SkillBadge skill="Prisma" />
              <SkillBadge skill="Hono" />
              <SkillBadge skill="AWS" />
              <SkillBadge skill="Docker" />
              <SkillBadge skill="Git" />
              <SkillBadge skill="Firebase" />
              <SkillBadge skill="Recoil" />
              <SkillBadge skill="Tailwind" />
              <SkillBadge skill="Zod" />
            </div>
          </Section>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:maayannk123@gmail.com"
              className="text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/maayannk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/mayankverma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://x.com/maayannk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Twitter size={28} />
            </motion.a>
          </div>
        </motion.div>
        <div className="hidden  justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("/biswarupsen-resume.pdf");
            }}
            className="flex  px-6 py-3 bg-neutral-100 text-black rounded-full shadow-lg items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>

      <footer className="py-8 text-center text-neutral-400">
        <p>© {new Date().getFullYear()} Mayank Verma</p>
      </footer>
    </div>
  );
};

export default App;
