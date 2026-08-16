"use client";

import { useState } from "react";

export default function TraitCard({
    title,
    shortText,
    description
}) {

    const [flipped, setFlipped] = useState(false);

    return (
        <button
            type="button"
            className={`trait-card ${
                flipped ? "flipped" : ""
            }`}
            onClick={() => setFlipped(!flipped)}
            aria-label={`Flip ${title} card`}
            aria-pressed={flipped}
        >

            <div className="trait-card-inner">

                {/* ================================
                    FRONT
                ================================= */}

                <div className="trait-card-front">

                    <div>

                        <p className="trait-title">
                            {title}
                        </p>

                        <p className="trait-short">
                            {shortText}
                        </p>

                    </div>

                    <span className="flip-label">
                        FLIP
                        <span className="flip-arrow"> ↻</span>
                    </span>

                </div>


                {/* ================================
                    BACK
                ================================= */}

                <div className="trait-card-back">

                    <p className="trait-description">
                        {description}
                    </p>

                    <span className="flip-label">
                        FLIP
                        <span className="flip-arrow"> ↻</span>
                    </span>

                </div>

            </div>

        </button>
    );
}