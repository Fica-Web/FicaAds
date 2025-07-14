// src/Components/services/ScrollBox.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Helper: Detect “lg” breakpoint (≥ 1024 px) ------------------------ */
/* ------------------------------------------------------------------ */
const useIsLgUp = () => {
    const query = '(min-width: 1024px)';

    // Evaluate once on first render (avoids SSR issues)
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;

        const mql = window.matchMedia(query);

        const handler = (e) => setMatches(e.matches);
        mql.addEventListener('change', handler);

        return () => mql.removeEventListener('change', handler);
    }, []);

    return matches; // boolean
};

/* ------------------------------------------------------------------ */
/* Component --------------------------------------------------------- */
/* ------------------------------------------------------------------ */
const ScrollBox = ({ section }) => {
    if (!section || !section.subSections) return null;

    const isLgUp = useIsLgUp();              // ← true when ≥ lg
    const containerRef = useRef(null);

    // Subscribe to scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['center end', 'end start'],
    });

    // Map 0 → 1 scroll progress to 0% → -100% translateY
    const yTransform = useTransform(scrollYProgress, [0.2, 1], ['0%', '-100%']);

    return (
        <div className="w-full my-24">
            {/* Heading ----------------------------------------------------- */}
            <h2 className="lg:w-1/2 text-2xl md:text-4xl lg:text-5xl font-Switzer-Regular mb-6 text-black leading-tight lg:text-start text-center">
                {section.heading}
            </h2>

            {/* Scroll-tracked container ------------------------------------ */}
            <div ref={containerRef}>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-24 items-start justify-between ">
                    {/* Left column --------------------------------------------- */}
                    <div className="lg:w-1/2 lg:text-start text-center ">
                        {section.description && (
                            <p className="lg:text-lg text-neutral-700 leading-relaxed max-w-xl">
                                {section.description}
                            </p>
                        )}
                    </div>

                    {/* Right column (scrolling list) --------------------------- */}
                    <div className="lg:w-1/2 lg:max-h-40 h-full overflow-auto no-scrollbar font-Switzer-Medium pt-5">
                        <motion.div
                            /* Freeze the Y position on screens below lg */
                            style={{ y: isLgUp ? yTransform : '0%' }}
                        >
                            {section.subSections.map((item, index) => (
                                <div key={index} className="flex relative">
                                    {/* Index --------------------------------------- */}
                                    <div className="lg:pr-10 pr-7 border-r border-gray1 text-xl font-semibold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Horizontal line ----------------------------- */}
                                    {index !== section.subSections.length - 1 && (
                                        <div className="absolute w-full h-1 bottom-4 border-t" />
                                    )}

                                    {/* Content ------------------------------------- */}
                                    <div
                                        className={`h-full w-full pl-5 ${index === section.subSections.length - 1 ? '' : 'pb-8 lg:pb-10'
                                        }`}
                                    >
                                        <h3 className="lg:text-xl text-lg font-semibold tracking-wide mb-2">
                                            {item.subHeading}
                                        </h3>

                                        {item.subDescription.map((desc, i) => (
                                            <p
                                                key={i}
                                                className="lg:text-lg leading-relaxed font-Switzer-Light text-neutral-700 lg:max-w-sm"
                                            >
                                                {desc.content}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollBox;
