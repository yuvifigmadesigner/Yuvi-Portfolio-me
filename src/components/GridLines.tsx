import React from 'react';

const GridLines: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none select-none flex justify-center">
            {/* Main Container Frame - Matches the layout max-width */}
            <div className="w-full max-w-screen-2xl 2xl:max-w-[1800px] border-x border-white/5 h-full relative">

                {/* Horizontal Lines Pattern */}
                {/* Creates a line every 8rem (approx paragraph/section spacing) */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '100% 8rem' // Adjust spacing as needed
                    }}
                ></div>

                {/* Optional: Vertical Divider in the middle? 
                The reference image implies a grid. Let's add one subtle center line or maybe column lines.
                For now, focusing on the "margin side" (border-x above) and "paragraph spacing" (horizontal lines).
            */}
            </div>
        </div>
    );
};

export default GridLines;
