import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface HobbyCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    onClick?: () => void;
    actionLabel?: string;
    index: number;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, icon: Icon, onClick, actionLabel, index }) => {
    const [hovering, setHovering] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`relative group flex flex-col p-6 2xl:p-8 rounded-3xl overflow-hidden border border-white/10 bg-[#121212] transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-white/20' : ''}`}
        >
            {/* Background Gradient Blob */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 ${hovering ? 'opacity-100' : 'opacity-40'}`} />

            {/* Icon Row */}
            <div className="flex justify-between items-start mb-6 2xl:mb-8 relative z-10">
                <div className={`w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${hovering ? 'bg-white text-black scale-110 rotate-3' : 'bg-white/5 text-white'}`}>
                    <Icon size={26} strokeWidth={1.5} />
                </div>

                {onClick && (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 ${hovering ? 'bg-white text-black rotate-45' : 'bg-transparent text-white/40'}`}>
                        <ArrowUpRight size={18} />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto">
                <h3 className="text-xl 2xl:text-2xl font-semibold text-white mb-3 group-hover:text-[#D69452] transition-colors">{title}</h3>
                <p className="text-white/50 text-sm 2xl:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                    {description}
                </p>
            </div>

            {/* Hover Line */}
            <div className={`absolute bottom-0 left-0 h-1 bg-[#D69452] transition-all duration-300 ${hovering ? 'w-full' : 'w-0'}`} />
        </motion.div>
    );
};

export default HobbyCard;
