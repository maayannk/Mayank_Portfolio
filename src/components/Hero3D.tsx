import { motion } from 'framer-motion';

export default function Hero3D() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
    );
}
