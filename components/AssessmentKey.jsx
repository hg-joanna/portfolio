"use client";

import { useState } from "react";


const assessmentKey = [
    {
        abbreviation: "AR",
        name: "Arithmetic Reasoning",
        description:
            "Mathematical reasoning and numerical problem-solving."
    },

    {
        abbreviation: "VA",
        name: "Verbal Ability",
        description:
            "Written information analysis and verbal reasoning."
    },

    {
        abbreviation: "SA",
        name: "Spatial Ability",
        description:
            "Spatial recognition and visual manipulation."
    },

    {
        abbreviation: "CM",
        name: "Computation",
        description:
            "Numerical analysis without mechanical aids."
    },

    {
        abbreviation: "CP",
        name: "Clerical Perception",
        description:
            "Clerical accuracy, proofreading, and error detection."
    },

    {
        abbreviation: "FP",
        name: "Form Perception",
        description:
            "Detail recognition, comparison, and visual discrimination."
    }
];


export default function AssessmentKey() {

    const [open, setOpen] =
        useState(false);


    return (
        <div className="assessment-key-container">


            <button
                type="button"
                className="assessment-key-button"
                onClick={() =>
                    setOpen(!open)
                }
                aria-expanded={open}
            >

                <span>
                    Assessment Key
                </span>


                <span
                    className={
                        open
                            ? "assessment-key-arrow open"
                            : "assessment-key-arrow"
                    }
                >
                    ↓
                </span>

            </button>


            <div
                className={`assessment-key-content ${
                    open
                        ? "open"
                        : ""
                }`}
            >

                <div className="assessment-key-grid">

                    {assessmentKey.map(
                        (item) => (

                            <div
                                className="key-item"
                                key={
                                    item.abbreviation
                                }
                            >

                                <strong>
                                    {item.abbreviation}
                                </strong>

                                <div>

                                    <p className="key-item-name">
                                        {item.name}
                                    </p>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </div>
    );
}