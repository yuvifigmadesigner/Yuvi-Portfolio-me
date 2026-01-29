
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Coffee, Camera, Mountain, MonitorOff, Heart } from 'lucide-react';

import PhotoGallery from '../../components/PhotoGallery';
import { PROFILE_IMAGE_URL } from '../../constants';
import HobbyCard from '../../components/HobbyCard';
import ContactCard from '../../components/ContactCard';

const About: React.FC = () => {
    const [showGallery, setShowGallery] = useState(false);
    const showGalleryHandler = () => setShowGallery(true);

    return (
        <>
            <main className="flex-1 flex flex-col justify-start px-6 md:px-12 relative z-10 text-white w-full max-w-screen-2xl 2xl:max-w-[1800px] mx-auto pt-12 md:pt-24 pb-20 2xl:pt-32 animate-fade-in">
                {/* Page Header */}
                <div className="mb-16 md:mb-20 2xl:mb-32">
                    <h1 className="text-5xl md:text-7xl 2xl:text-9xl font-medium tracking-tight mb-6">About.</h1>
                    <div className="w-16 h-1 2xl:w-24 2xl:h-1.5 bg-white/20"></div>
                </div>

                {/* PART 1: INFORMATION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 2xl:gap-32 mb-24 md:mb-32 2xl:mb-48">

                    {/* Left Column: Bio */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

                            {/* Profile Picture Section */}
                            {/* Profile Picture - "The Engineer's Orbit" */}
                            <motion.div
                                className="relative shrink-0 group mx-auto md:mx-0 flex items-center justify-center py-4 md:py-8"
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Center Image Container */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40 2xl:w-48 2xl:h-48 z-20">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black border-2 border-white/10 relative z-20 group-hover:border-[#D69452]/50 transition-colors duration-500">
                                        <img
                                            src={PROFILE_IMAGE_URL}
                                            alt="Profile"
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Tech Orbit 1 (Dashed Ring) */}
                                    <motion.div
                                        className="absolute -inset-4 md:-inset-6 border border-dashed border-white/20 rounded-full z-10"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        variants={{
                                            hover: { scale: 1.1, borderColor: "rgba(214, 148, 82, 0.4)" }
                                        }}
                                    />

                                    {/* Tech Orbit 2 (Counter Arc) */}
                                    <motion.div
                                        className="absolute -inset-2 md:-inset-3 rounded-full z-10 border-t border-r border-transparent border-l-white/30 border-b-white/30"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        variants={{
                                            hover: { scale: 1.05, borderLeftColor: "#D69452", borderBottomColor: "#D69452" }
                                        }}
                                        style={{ borderWidth: '2px' }}
                                    />

                                    {/* Status Satellite (Orbiting Dot) */}
                                    <motion.div
                                        className="absolute -inset-4 md:-inset-6 z-30"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#1a1512] border border-white/20 absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center shadow-lg">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-[#D69452]/5 rounded-full blur-[60px] scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </motion.div>

                            {/* Bio Text */}
                            <div className="space-y-6 2xl:space-y-8 text-lg md:text-xl 2xl:text-2xl text-white/70 leading-relaxed font-light">
                                <h2 className="text-xs 2xl:text-sm font-mono uppercase tracking-widest text-white/50 mb-2">/ Who I Am</h2>
                                <p>
                                    I’m a designer with an <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">engineering foundation (B.Tech, NIT Goa)</span> who believes that the best <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">interfaces are the ones that disappear</span>. I specialize in the "hard stuff"—translating <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">complex SaaS requirements</span> into <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">elegant, ship-ready user experiences</span>.
                                </p>
                                <p>
                                    I work at the intersection of <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">Figma precision</span> and <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">AI-driven speed</span>. My unique advantage? I speak the <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">language of code</span> as fluently as the <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">language of design</span>. This means fewer <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">"lost in translation"</span> moments during handoff and a final product that is as <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">technically sound</span> as it is <span className="font-semibold text-white hover:text-[#D69452] transition-colors duration-300 cursor-cell border-b border-white/10 hover:border-[#D69452] border-dashed">visually compelling</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Certificates & Capabilities */}
                    <div className="lg:col-span-5 space-y-12 2xl:space-y-16">
                        {/* Certificates */}
                        <div>
                            <h2 className="text-xs 2xl:text-sm font-mono uppercase tracking-widest text-white/50 mb-8 2xl:mb-12">/ Certificates</h2>
                            <div className="space-y-1 2xl:space-y-2">
                                {[
                                    { title: "Design Thinking in the Age of AI", link: "https://www.linkedin.com/learning/certificates/2bdc79d6f994cb42fe991937ff456c50a209d2b6d97fe4cef9744ab7cad6d2e9?trk=share_certificate" },
                                    { title: "Design to Code: Using AI to Build Faster", link: "https://www.linkedin.com/learning/certificates/e3283fa67771467c00e390b9153c7b85230f92948ed036411924d167728e0975" },
                                    { title: "Prompt Engineering: How to Talk to the AIs", link: "https://www.linkedin.com/learning/certificates/db03fe46fb752cb86b01b869767f4bed02c7f126a41e1b14af6aad81d150646a" },
                                    { title: "UX Foundations: Analyzing User Data", link: "https://www.linkedin.com/learning/certificates/907cd6db4e2fbe61843bdcfe44cc133ff3a7e1200dbf79b9a8d1a06d2e94ac37" },
                                    { title: "UX Research: Lean Experimentation", link: "https://www.linkedin.com/learning/certificates/602a8fef7d16c9e20bb1739b461b81250a9cca5e5064ec4c2b907dfdb63dc603" },
                                    { title: "Figma UI UX Design Advanced", link: "https://www.udemy.com/certificate/UC-72054d57-e3d5-4d83-a149-9a0e280fecb2/" },
                                    { title: "Figma UI UX Design Essentials", link: "https://www.udemy.com/certificate/UC-497b4213-0dc9-4aef-ac9c-d288f0765359/" },
                                ].map((cert, index) => (
                                    <a
                                        key={index}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-3 2xl:p-5 -mx-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                                    >
                                        <span className="text-white/70 group-hover:text-white transition-colors text-sm md:text-base 2xl:text-xl font-light truncate pr-4">
                                            {cert.title}
                                        </span>
                                        <ArrowUpRight size={16} className="text-white/30 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 2xl:w-6 2xl:h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Capabilities */}
                        <div>
                            <h2 className="text-xs 2xl:text-sm font-mono uppercase tracking-widest text-white/50 mb-8 2xl:mb-12">/ Capabilities</h2>
                            <div className="flex flex-wrap gap-2 2xl:gap-4">
                                {['Product Strategy', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research'].map((item) => (
                                    <span key={item} className="px-3 py-1.5 2xl:px-5 2xl:py-2.5 bg-white/5 border border-white/10 rounded-md text-sm 2xl:text-lg text-white/70 hover:bg-white/10 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* PART 2: HOBBIES */}
                <div className="mb-24 md:mb-32 2xl:mb-48">
                    <h2 className="text-xs 2xl:text-sm font-mono uppercase tracking-widest text-white/50 mb-8 2xl:mb-12">/ My Hobbies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8">
                        <HobbyCard
                            index={0}
                            title="Photography"
                            description="Capturing textures, light, and candid moments. I love documenting the world through my lens."
                            icon={Camera}
                            onClick={showGalleryHandler}
                            actionLabel="View"
                        />
                        <HobbyCard
                            index={1}
                            title="Volunteering"
                            description="My way of giving back. Whether it's mentoring or local events, empowering others is the best feeling."
                            icon={Heart}
                        />
                        <HobbyCard
                            index={2}
                            title="Traveling"
                            description="Stepping away from the screen to find inspiration in nature and new cultures."
                            icon={Mountain}
                        />
                    </div>
                </div>

                {/* FOOTER: CONTACT */}
                <div>
                    <h2 className="text-xs 2xl:text-sm font-mono uppercase tracking-widest text-white/50 mb-8 2xl:mb-12">/ Get in Touch</h2>
                    <div className="grid gap-4 2xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <ContactCard
                            index={0}
                            label="Email"
                            value="yuvrajkumar0221@gmail.com"
                            href="mailto:yuvrajkumar0221@gmail.com"
                            icon={Mail}
                            color="#EDEDED"
                        />
                        <ContactCard
                            index={1}
                            label="Phone"
                            value="+91 76988 93369"
                            href="tel:+917698893369"
                            icon={Phone}
                            color="#D69452"
                        />
                        <ContactCard
                            index={2}
                            label="Support"
                            value="Buy Me a Coffee"
                            href="https://buymeacoffee.com/yuvraj.gupta"
                            icon={Coffee}
                            color="#FFDD00"
                        />
                    </div>
                </div>
            </main>

            {/* Interactive Photo Gallery Overlay */}
            {showGallery && <PhotoGallery onClose={() => setShowGallery(false)} />}
        </>
    );
};

export default About;
