"use client";

import {
    useEffect,
    useRef,
    useState
} from "react";


const assessments = [
    {
        name: "Arithmetic Reasoning",
        abbreviation: "AR",
        score: 93
    },
    {
        name: "Verbal Ability",
        abbreviation: "VA",
        score: 99
    },
    {
        name: "Spatial Ability",
        abbreviation: "SA",
        score: 98
    },
    {
        name: "Computation",
        abbreviation: "CM",
        score: 52
    },
    {
        name: "Clerical Perception",
        abbreviation: "CP",
        score: 76
    },
    {
        name: "Form Perception",
        abbreviation: "FP",
        score: 87
    }
];


export default function AssessmentBars() {

    const sectionRef = useRef(null);

    const [animated, setAnimated] =
        useState(false);


    useEffect(() => {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    if (
                        entries[0].isIntersecting
                    ) {

                        setAnimated(true);

                        observer.disconnect();
                    }

                },
                {
                    threshold: 0.25
                }
            );


        if (sectionRef.current) {
            observer.observe(
                sectionRef.current
            );
        }


        return () => {
            observer.disconnect();
        };

    }, []);


    return (
        <div
            ref={sectionRef}
            className="assessment-bars"
        >

            {assessments.map(
                (assessment) => (

                    <div
                        className="assessment-row"
                        key={
                            assessment.abbreviation
                        }
                    >

                        <div className="assessment-header">

                            <div className="assessment-name">

                                <strong>
                                    {assessment.abbreviation}
                                </strong>

                                <span>
                                    {assessment.name}
                                </span>

                            </div>


                            <strong>
                                {assessment.score}th Percentile
                            </strong>

                        </div>


                        <div className="assessment-bar">

                            <div
                                className={`assessment-fill ${
                                    animated
                                        ? "animate"
                                        : ""
                                }`}
                                style={{
                                    "--score":
                                        `${assessment.score}%`
                                }}
                            />

                        </div>

                    </div>

                )
            )}

        </div>
    );
}