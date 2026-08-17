"use client";

import { useState } from "react";

/*
=========================================================
KEY PROJECTS

These are the 4 projects that are always visible.

link:
    The actual URL for the project.

linkType:
    Determines what text is displayed for the link.

Examples:
    linkType: "github"
    → View GitHub →

    linkType: "website"
    → View Website →

    linkType: "repository"
    → View Repository →

If there is no public link:
    link: ""
    linkType: ""

The image and link text will not be clickable/shown.
=========================================================
*/
const featuredProjects = [
    {
        title: "KAISAKA Financial Management Website",
        tags: "JavaScript • Handlebars • CSS",
        image: "/projects/kaisaka.png",
        link: "https://kaisaka-cssweng.vercel.app/login",
        linkType: "website",
    },
    {
        title: "Laboratory Reservation System",
        tags: "Java • OOP • Testing",
        image: "/projects/lab.png",
        link: "https://github.com/hg-joanna/LaboratorySystem",
        linkType: "github",
    },
    {
        title: "Jungle King Game",
        tags: "Java • Swing • OOP • GUI",
        image: "/projects/junglek.png",
        link: "https://github.com/hg-joanna/JungleKGame",
        linkType: "github",
    },
    {
        title: "Portfolio Website",
        tags: "Next.js • React • CSS",
        image: "/projects/portfolio.png",
        link: "https://github.com/hg-joanna/portfolio",
        linkType: "github",
    },
];

/*
=========================================================
EXPLORE MORE PROJECTS

These projects appear when "Explore More Projects"
is opened.

link:
    The actual URL for the project.

linkType:
    Determines the text displayed for the link. (website or github or demo)

If there is no public link:
    link: ""
    linkType: ""

The image and link text will not be clickable/shown.
=========================================================
*/
const additionalProjects = [
    {
        title: "Vending Machine Database",
        tags: "Java • MySQL",
        image: "/projects/vending.png",
        link: "https://github.com/hg-joanna/vendingMachineDB",
        linkType: "github",
    },
    {
        title: "Sokobots Sokoban Puzzle",
        tags: "Java • OOP • Algorithms",
        image: "/projects/sokobot.png",
        link: "https://github.com/hg-joanna/sokobots",
        linkType: "github",
    },
    {
        title: "Customer Service Chatbot",
        tags: "Python • RAG • Gradio",
        image: "/projects/customer.png",
        link: "https://fantastic-melomakarona-ebf01f.netlify.app/",
        linkType: "website",
    },
    {
        title: "Adventure World",
        tags: "Python • Prolog",
        image: "/projects/adventure.png",
        link: "https://github.com/hg-joanna/AdventureWrld",
        linkType: "github",
    },
    {
        title: "Security Management",
        tags: "Java",
        image: "/projects/sec.png",
        link: "https://github.com/hg-joanna/Security-SVCS",
        linkType: "github",
    },
    {
        title: "Filipino household Income & Classification",
        tags: "Colab • Pandas • Python • Scikit-learn",
        image: "/projects/filo.png",
        link: "https://colab.research.google.com/drive/1OiOGbUBRuofuQs1UAE3RlVwUhHbf2jWF?usp=sharing",
        linkType: "website",
    },
    {
        title: "Dementia Dataset Analysis",
        tags: "Colab • Pandas • Python • Seaborn",
        image: "/projects/dementia.png",
        link: "https://colab.research.google.com/drive/1kknMbJgCDso7cS-G6AXA4eYirYGSIfAY?usp=sharing",
        linkType: "website",
    },
];


/*
=========================================================
LINK LABEL
=========================================================

Converts linkType into the text displayed on the card.

You can add/change types here later.

Examples:

github
→ View GitHub →

website
→ View Website →

demo
→ View Demo →
=========================================================
*/
function getLinkLabel(linkType) {
    switch (linkType) {
        case "github":
            return "View Repository →";

        case "website":
            return "View Website →";

        case "demo":
            return "View Demo →";
    }
}


/*
=========================================================
PROJECT CARD
=========================================================
*/
function ProjectCard({ project, small = false }) {

    const Card = "article";

    const cardClass = small
        ? "project-preview-card"
        : "featured-project-card";

    const imageClass = small
        ? "project-preview-image"
        : "featured-project-image";

    const infoClass = small
        ? "project-preview-info"
        : "featured-project-info";

    const numberClass = small
        ? "project-preview-number"
        : "featured-project-number";


    /*
    =====================================================
    CHECK IF PROJECT HAS A REAL LINK
    =====================================================
    */

    const hasLink =
        typeof project.link === "string" &&
        project.link.trim() !== "";


    /*
    =====================================================
    PROJECT IMAGE
    =====================================================

    If there is a link:
        Image is clickable.

    If there is no link:
        Image is just an image.
    =====================================================
    */

    const projectImage = (
        <div className={imageClass}>
            <img
                src={project.image}
                alt={project.title}
            />
        </div>
    );


    return (
        <Card className={cardClass}>

            {/* =================================================
                PROJECT IMAGE
            ================================================= */}

            {hasLink ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-link"
                    aria-label={`View ${project.title}`}
                >
                    {projectImage}
                </a>
            ) : (
                projectImage
            )}


            {/* =================================================
                PROJECT INFORMATION
            ================================================= */}

            <div className={infoClass}>

                <span className={numberClass}>
                    {project.number}
                </span>


                <h3>
                    {project.title}
                </h3>


                <p>
                    {project.tags}
                </p>


                {/* =================================================
                    PROJECT LINK

                    Only displayed if the project has
                    an actual URL.
                ================================================= */}

                {hasLink && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                    >
                        {getLinkLabel(project.linkType)}
                    </a>
                )}

            </div>

        </Card>
    );
}


/*
=========================================================
PROJECTS SECTION
=========================================================
*/
export default function ProjectsSection() {

    const [expanded, setExpanded] = useState(false);


    return (
        <section
            id="projects"
            className="projects-section"
        >

            <div className="projects-container">

                {/* =================================================
                    TITLE
                ================================================= */}

                <h2 className="projects-title">
                    Key Projects
                </h2>


                {/* =================================================
                    FEATURED PROJECTS
                ================================================= */}

                <div className="featured-projects">

                    {featuredProjects.map((project) => (
                        <ProjectCard
                            project={project}
                        />
                    ))}

                </div>


                {/* =================================================
                    EXPLORE MORE PROJECTS
                ================================================= */}

                <div
                    className={`more-projects ${
                        expanded ? "expanded" : ""
                    }`}
                >

                    <button
                        type="button"
                        className="explore-projects-button"
                        onClick={() =>
                            setExpanded((value) => !value)
                        }
                        aria-expanded={expanded}
                    >

                        <span>
                            {expanded
                                ? "Show Less"
                                : "Explore More Projects"}
                        </span>


                        <span
                            className={`explore-arrow ${
                                expanded ? "open" : ""
                            }`}
                        >
                            ↓
                        </span>

                    </button>


                    {/* =================================================
                        ADDITIONAL PROJECTS
                    ================================================= */}

                    <div className="additional-projects">

                        {additionalProjects.map((project) => (
                            <ProjectCard
                                key={project.number}
                                project={project}
                                small
                            />
                        ))}

                    </div>

                </div>

            </div>


            {/* =================================================
                PURPLE → PINK GRADIENT
            ================================================= */}

            <div className="projects-gradient" />

        </section>
    );
}