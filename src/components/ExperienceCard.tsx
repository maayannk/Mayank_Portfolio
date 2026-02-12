import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceCardProps {
    company: string;
    role: string;
    period: string;
    location: string;
    description?: string[];
    index: number;
}

export default function ExperienceCard({
    company,
    role,
    period,
    location,
    description,
    index,
}: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-12 border-l-2 border-emerald-500/30 last:pb-0"
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900"
            />

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{company}</h3>
                        <p className="text-emerald-400 font-medium">{role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar size={14} />
                            <span>{period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Briefcase size={14} />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>

                {description && description.length > 0 && (
                    <ul className="space-y-2">
                        {description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">▹</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}
