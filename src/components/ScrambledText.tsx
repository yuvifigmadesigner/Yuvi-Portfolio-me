import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

// Register plugins immediately
if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
}

export interface ScrambledTextProps {
    radius?: number;
    duration?: number;
    speed?: number;
    scrambleChars?: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
    radius = 100,
    duration = 1.2,
    speed = 0.5,
    scrambleChars = '.:',
    className = '',
    style = {},
    children
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        // Use SplitText to break the text into characters
        // Using a query selector since we render a <p> below
        const target = rootRef.current.querySelector('p');
        if (!target) return;

        let split: SplitText;

        try {
            split = new SplitText(target, {
                type: 'chars',
                charsClass: 'inline-block will-change-transform'
            });
        } catch (err) {
            console.warn('GSAP SplitText failed to initialize (likely missing license or module issues). Fallback text displayed.', err);
            return;
        }

        // Store the original content in a data attribute
        split.chars.forEach((el: Element) => {
            const c = el as HTMLElement;
            gsap.set(c, { attr: { 'data-content': c.innerHTML } });
        });

        const handleMove = (e: PointerEvent) => {
            split.chars.forEach((el: Element) => {
                const c = el as HTMLElement;
                const { left, top, width, height } = c.getBoundingClientRect();

                // Calculate distance from cursor to character center
                const dx = e.clientX - (left + width / 2);
                const dy = e.clientY - (top + height / 2);
                const dist = Math.hypot(dx, dy);

                if (dist < radius) {
                    gsap.to(c, {
                        overwrite: true,
                        duration: duration,
                        scale: 1,
                        startAt: { scale: 0.7 },
                        scrambleText: {
                            text: c.dataset.content || '',
                            chars: scrambleChars,
                            speed: speed
                        },
                        ease: 'power1.out'
                    });
                }
            });
        };

        const el = rootRef.current;
        el.addEventListener('pointermove', handleMove);

        return () => {
            el.removeEventListener('pointermove', handleMove);
            if (split) split.revert();
        };
    }, [radius, duration, speed, scrambleChars]);

    return (
        <div
            ref={rootRef}
            className={`relative inline-block ${className}`}
            style={style}
        >
            <p className="inline-block m-0">{children}</p>
        </div>
    );
};

export default ScrambledText;
