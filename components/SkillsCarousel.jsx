"use client";

import { useEffect, useRef } from "react";

export default function SkillsCarousel({ skills }) {
    const trackRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        let position = 0;
        let lastTime = performance.now();

        // Slow, constant movement
        const speed = 0.035;

        const animate = (currentTime) => {
            const delta = currentTime - lastTime;
            lastTime = currentTime;

            position += speed * delta;

            /*
             * The first half of the track is an exact
             * duplicate of the second half.
             *
             * Once we move past the first set of cards,
             * reset the position by exactly that amount.
             *
             * Because the content is duplicated, this reset
             * is invisible and creates a continuous loop.
             */
            const loopWidth = track.scrollWidth / 2;

            if (position >= loopWidth) {
                position -= loopWidth;
            }

            track.style.transform = `translateX(-${position}px)`;

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="skills-carousel-wrapper">

            <div className="skills-carousel">

                <div
                    ref={trackRef}
                    className="skills-track"
                >

                    {/* FIRST SET */}
                    {skills.map((skill) => (
                        <div
                            className="skill-item"
                            key={`first-${skill.name}`}
                        >
                            <div className="skill-logo">
                                <i className={skill.icon}></i>
                            </div>

                            <span>
                                {skill.name}
                            </span>
                        </div>
                    ))}

                    {/* DUPLICATE SET */}
                    {skills.map((skill) => (
                        <div
                            className="skill-item"
                            key={`second-${skill.name}`}
                        >
                            <div className="skill-logo">
                                <i className={skill.icon}></i>
                            </div>

                            <span>
                                {skill.name}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}