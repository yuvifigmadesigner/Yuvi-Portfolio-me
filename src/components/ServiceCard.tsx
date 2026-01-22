import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    onClick: () => void;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, onClick, index }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="relative flex flex-col justify-between min-h-[340px] p-8 md:p-10 rounded-[2rem] overflow-hidden cursor-pointer bg-[#0F0F0F] group border border-white/5 shadow-xl"
        >
            {/* 1. Animated Border Spotlight (pseudo-border effect) */}
            <div
                className="pointer-events-none absolute -inset-[1px] rounded-[2rem] opacity-0 transition-opacity duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(214, 148, 82, 0.6), transparent 40%)`,
                }}
            />
            {/* Masking darker background to create 'border' */}
            <div className="absolute inset-[1px] rounded-[2rem] bg-[#0F0F0F] z-0" />

            {/* 2. Inner Glow Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(214, 148, 82, 0.08), transparent 40%)`,
                }}
            />

            {/* 3. Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                    <div className="relative">
                        {/* Icon Background Blob */}
                        <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#D69452] group-hover:border-[#D69452] group-hover:text-black text-white/90 transition-all duration-300 group-hover:scale-110 ease-out">
                            <Icon size={36} strokeWidth={1.25} />
                        </div>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-[#D69452] group-hover:border-[#D69452]/50 group-hover:bg-[#D69452]/10 transition-all duration-300">
                        <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                </div>

                {/* Bottom Row */}
                <div>
                    <h3 className="text-3xl font-semibold mb-3 text-white group-hover:text-[#D69452] transition-colors duration-300 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-white/50 text-lg leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>

            {/* Subtle Grain Overlay (Optional, if global grain isn't enough) */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
        </motion.div>
    );
};

export default ServiceCard;
