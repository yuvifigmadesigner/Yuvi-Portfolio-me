import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from './LightRays';

const KIND_WORDS = [
    "Designing Experiences...",
    "Crafting Vibe...",
    "Pixel Perfecting...",
    "Igniting Creativity...",
    "Almost There...",
];

const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        // 1. Percentage timer
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 50);

        // 2. Word rotator timer
        const wordInterval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % KIND_WORDS.length);
        }, 800);

        // 3. Completion check
        const completionTimer = setTimeout(() => {
            setLoading(false);
            if (onComplete) setTimeout(onComplete, 1000); // Wait for exit animation
        }, 3500); // Slightly longer than 100% to let users see the effect

        return () => {
            clearInterval(interval);
            clearInterval(wordInterval);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f0a06] text-white overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Background Light Rays */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#D69452"
                            raysSpeed={2}
                            lightSpread={0.6}
                            rayLength={1.5}
                            pulsating={true}
                            mouseInfluence={0} // No mouse interaction for loader
                        />
                    </div>

                    {/* Noise Overlay */}
                    <div className="absolute inset-0 bg-noise opacity-[0.45] mix-blend-overlay pointer-events-none z-[1]"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center p-8 w-full max-w-lg">

                        {/* Main Title Replaced by Rotator */}
                        <div className="h-24 flex items-center justify-center w-full mb-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={wordIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="text-3xl md:text-5xl font-medium tracking-tight text-white text-center"
                                >
                                    {KIND_WORDS[wordIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full relative py-4">
                            {/* Percentage Number */}
                            <div className="absolute right-0 -top-8 text-4xl font-mono font-bold text-white/90">
                                {percent}%
                            </div>

                            {/* Bar Track */}
                            <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                                {/* Bar Fill */}
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-[#D69452] shadow-[0_0_15px_#D69452]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
