import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactCardProps {
    label: string;
    value: string;
    href: string;
    icon: LucideIcon;
    color?: string; // Optional accent color
    index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ label, value, href, icon: Icon, color = '#D69452', index }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex items-center gap-5 p-4 pr-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
        >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />

            {/* Icon Circle */}
            <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-black transition-transform duration-500 group-hover:scale-110 relative z-10"
                style={{ backgroundColor: color }} // Dynamic background color
            >
                <Icon size={24} strokeWidth={1.5} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 relative z-10">
                <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">{label}</p>
                <p className="text-base 2xl:text-lg font-medium text-white truncate group-hover:text-[#D69452] transition-colors">{value}</p>
            </div>

            {/* Arrow */}
            <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <ArrowUpRight
                    size={20}
                    className="text-white/40 group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </div>
        </motion.a>
    );
};

export default ContactCard;
