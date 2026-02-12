import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    githubLink,
    liveLink,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {githubLink && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors"
                        >
                            <Github size={16} />
                            <span className="text-sm">Code</span>
                        </motion.a>
                    )}
                    {liveLink && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span className="text-sm">Live Demo</span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
