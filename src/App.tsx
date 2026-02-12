import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  Twitter,
  Code2,
  Rocket,
  Briefcase,
  Calendar,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";
import Lenis from 'lenis';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Eleweight",
      description:
        "Designed and built a full-stack fitness platform serving 100+ users in the testing phase, enabling personalized fitness goals with secure JWT-based authentication and profile management for 100% data privacy. Features personalized workout splits and AI-powered food image analysis.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AI/ML"],
    },
    {
      title: "Medium Clone",
      description:
        "The Medium blogging platform allows users to seamlessly create, update, and fetch blogs. Built with Hono and Cloudflare Workers for the backend, ensuring high performance and serverless deployment. Uses PostgreSQL with Prisma ORM.",
      technologies: ["React", "Hono", "Cloudflare Workers", "PostgreSQL", "Prisma", "TailwindCSS"],
    },
    {
      title: "Expense Tracker",
      description:
        "Full-featured expense tracker application built with the MERN stack, allows users to efficiently manage their finances. The app enables users to add, categorize, update, and delete expenses, providing a clear overview of spending habits.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      title: "Text to Speech Converter",
      description:
        "The Text-to-Speech application converts written text into natural-sounding speech, making content more accessible and engaging. This app allows users to input text and listen to it in multiple voices and languages.",
      technologies: ["React", "Web Speech API", "JavaScript"],
    },
  ];

  const experiences = [
    {
      company: "TrustTags",
      role: "Full Stack Developer",
      period: "June 2024 - Present",
      location: "Ahmedabad - Onsite",
    },
    {
      company: "InnoByte Services",
      role: "Web Developer Intern",
      period: "December 2024 - January 2025",
      location: "New Delhi - Remote",
    },
  ];

  const skills = [
    "React",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Hono",
    "AWS",
    "Docker",
    "Git",
    "Firebase",
    "Recoil",
    "TailwindCSS",
    "Zod",
    "TypeScript",
    "JavaScript",
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden text-slate-200 selection:bg-emerald-500/30">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Sticky Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer font-mono"
            onClick={() => scrollToSection('home')}
          >
            MV
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'experience', 'projects', 'skills'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: '#34d399' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-emerald-400 transition-colors capitalize font-medium text-sm tracking-wide"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
          >
            <div className="flex flex-col gap-2 p-6">
              {['about', 'experience', 'projects', 'skills'].map((item) => (
                <motion.button
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 p-3 rounded-lg transition-colors capitalize font-medium text-left flex items-center justify-between group"
                >
                  {item}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-full shadow-xl hover:border-emerald-500/50 group"
      >
        <ArrowUp size={24} className="text-emerald-400 group-hover:-translate-y-1 transition-transform" />
      </motion.button>

      {/* Global Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500/20 blur-sm"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-900"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-48 h-48 mx-auto mb-10 rounded-full p-1 bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-2xl shadow-emerald-500/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
              <img
                src="/me.gif"
                alt="Mayank Verma"
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Mayank Verma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-xl md:text-2xl text-slate-300 mb-10 font-light"
          >
            <Code2 className="text-emerald-500" />
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building <span className="text-emerald-400 font-medium">scalable web applications</span> with modern technologies.
            Passionate about creating seamless digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Mail, href: "mailto:maayannk123@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/maayannk/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mayankverma/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/maayannk12", label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-700/80 hover:border-emerald-500/30 group transition-all"
                aria-label={social.label}
              >
                <social.icon size={22} className="text-slate-300 group-hover:text-emerald-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="mt-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
            >
              <Rocket size={20} />
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                About <span className="text-emerald-400">Me</span>
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  I'm a Full Stack Developer with specialized expertise in the <strong className="text-white">MERN stack</strong>.
                  My journey in tech is driven by a passion for solving complex real-world problems through code.
                </p>
                <p>
                  I focus on architecting <strong className="text-white">efficient, scalable solutions</strong> that not only meet
                  technical requirements but also deliver exceptional user experiences.
                </p>
                <p>
                  With a strong foundation in modern web technologies, cloud platforms, and database management,
                  I bring creative ideas to life through clean, maintainable code and innovative thinking.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10 transform rotate-3"></div>
              <motion.div
                whileHover={{ rotate: -2 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Code2 size={120} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">What I do</h3>
                <ul className="space-y-4">
                  {[
                    "Full Stack Web Development",
                    "Database Architecture",
                    "API Design & Integration",
                    "Cloud Deployment (AWS/Vercel)",
                    "Performance Optimization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Work <span className="text-emerald-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-colors relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{exp.company}</h3>
                    <p className="text-cyan-400 font-medium text-lg">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-slate-400 text-sm">
                    <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1">
                      <Briefcase size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A collection of projects that showcase my technical skills and problem-solving abilities.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/40 transition-all shadow-lg hover:shadow-emerald-500/10 flex flex-col h-full"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-emerald-500/50 transition-colors">
                    <Code2 className="text-emerald-400" />
                  </div>
                  {/* Add external link icon if you have project links */}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Background Mesh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-radial from-slate-800/30 to-transparent rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Technical <span className="text-emerald-400">Skills</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                className="px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 rounded-xl cursor-default transition-colors shadow-sm hover:shadow-emerald-500/20"
              >
                <span className="text-slate-200 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex justify-center"
          >
            <div className="inline-flex divide-x divide-slate-700 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6">
              <div className="px-8 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{skills.length}+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Technologies</div>
              </div>
              <div className="px-8 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">1+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Years Exp.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-800 bg-slate-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Mayank Verma</h3>
              <p className="text-slate-400 leading-relaxed">
                Full Stack Developer focused on building clean, accessible, and performant web applications.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Github, href: "https://github.com/maayannk/" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mayankverma/" },
                  { icon: Twitter, href: "https://x.com/maayannk12" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, color: "#34d399" }}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors"
                  >
                    <item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors"></span>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              <p className="text-slate-400 mb-6">
                Currently open for new opportunities. Let's discuss your next project!
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:maayannk123@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all w-full md:w-auto justify-center"
              >
                <Mail size={18} />
                Say Hello
              </motion.a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Mayank Verma. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-emerald-400">React</span> & <span className="text-cyan-400">Framer Motion</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
