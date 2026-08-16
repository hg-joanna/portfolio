"use client";

import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import TraitCard from "@/components/TraitCard";
import AssessmentBars from "@/components/AssessmentBars";
import AssessmentKey from "@/components/AssessmentKey";
import SkillsCarousel from "@/components/SkillsCarousel";
import CertificateCarousel from "@/components/CertificateCarousel";
import Footer from "@/components/Footer";

/*
==================================================
TRAIT DATA
==================================================
*/

const traits = [
    {
        title: "DETAIL-ORIENTED",

        shortText:
            "I notice the small things.",

        description:
            "I naturally notice inconsistencies and small details that can affect the overall result."
    },

    {
        title: "ORGANIZED",

        shortText:
            "I like making things easier to manage.",

        description:
            "I like keeping information, tasks, and workflows structured so things are easier to manage."
    },

    {
        title: "ADAPTIVE",

        shortText:
            "I adjust when things change.",

        description:
            "When requirements change or problems arise, I adjust my approach and find a way forward."
    },

    {
        title: "COLLABORATIVE",

        shortText:
            "Good software is rarely built alone.",

        description:
            "I enjoy working with others and bringing different contributions together toward a common goal."
    },

    {
        title: "CREATIVE",

        shortText:
            "I like finding different ways to solve problems.",

        description:
    "I enjoy bringing creativity into design and problem-solving, especially when looking for better ways to approach something."
    }
];


/*
==================================================
SKILLS
==================================================
*/
const skills = [
    {
        name: "C",
        icon: "devicon-c-plain colored"
    },

    {
        name: "JavaScript",
        icon: "devicon-javascript-plain colored"
    },

    {
        name: "HTML",
        icon: "devicon-html5-plain colored"
    },

    {
        name: "CSS",
        icon: "devicon-css3-plain colored"
    },

    {
        name: "React",
        icon: "devicon-react-original colored"
    },

    {
        name: "Next.js",
        icon: "devicon-nextjs-plain colored"
    },

    {
        name: "Java",
        icon: "devicon-java-plain colored"
    },

    {
        name: "C++",
        icon: "devicon-cplusplus-plain colored"
    },

    {
        name: "Python",
        icon: "devicon-python-plain colored"
    },

    {
        name: "SQL",
        icon: "devicon-azuresqldatabase-plain colored"
    },

    {
        name: "Node.js",
        icon: "devicon-nodejs-plain colored"
    },

    {
        name: "Handlebars",
        icon: "devicon-handlebars-plain colored"
    },

    {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark colored"
    },

    {
        name: "MySQL",
        icon: "devicon-mysql-plain colored"
    },

    {
        name: "Supabase",
        icon: "devicon-supabase-plain colored"
    },

    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored"
    },

    {
        name: "Git",
        icon: "devicon-git-plain colored"
    },

    {
        name: "GitHub",
        icon: "devicon-github-original colored"
    },

    {
        name: "GitLab",
        icon: "devicon-gitlab-plain colored"
    },

    {
        name: "VS Code",
        icon: "devicon-vscode-plain colored"
    },

    {
        name: "IntelliJ IDEA",
        icon: "devicon-intellij-plain colored"
    },

    {
        name: "Docker",
        icon: "devicon-docker-plain colored"
    },

    {
        name: "Jupyter Notebook",
        icon: "devicon-jupyter-plain colored"
    },

    {
        name: "Figma",
        icon: "devicon-figma-plain colored"
    },

    {
        name: "Canva",
        icon: "devicon-canva-original colored"
    },

    {
        name: "JUnit",
        icon: "devicon-junit-plain colored"
    },

    {
        name: "Cypress",
        icon: "devicon-cypressio-plain colored"
    },

    {
        name: "Pandas",
        icon: "devicon-pandas-plain colored"
    },

    {
        name: "Scikit-learn",
        icon: "devicon-scikitlearn-plain colored"
    },

    {
        name: "OpenCV",
        icon: "devicon-opencv-plain colored"
    },

    {
        name: "PyTorch",
        icon: "devicon-pytorch-plain colored"
    }
];

/*
==================================================
CERTIFICATES
==================================================

EDIT THESE WITH ACTUAL CERTIFICATES.

logo:
Put certificate logos inside /public/certificates/

viewLink:
Use "" if there is no link.
==================================================
*/

const certificates = [
    {
        title: "AWS Certified Cloud Practitioner",
        year: "2026",
        logo: "/certificates/aws.png",
        viewLink: "https://www.credly.com/badges/bbe6c6eb-7d7b-495d-9821-4180f8c313b5/linked_in_profile"
    },
    {
        title: "DATACOM Software Development Job Simulation",
        year: "2026",
        logo: "/certificates/datacom.png",
        viewLink: "https://drive.google.com/file/d/1Wja9olTikDf-xBWK1keydOxRADGAJr9c/view"
    },
    {
        title: "Google Project Management - Coursera",
        year: "2025",
        logo: "/certificates/coursera.png",
        viewLink: ""
    },
    {
        title: "Electronic Arts Software Engineering Job Simulation - Forage",
        year: "2025",
        logo: "/certificates/EA.png",
        viewLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_mv64eWw4xGj5AKPYJ_1746087194827_completion_certificate.pdf"
    },
    {
        title: "Lean Six Sigma White Belt - Management & Strategy Institute",
        year: "2025",
        logo: "/certificates/mgt.png",
        viewLink: ""
    },
];



/*
==================================================
MAIN PAGE
==================================================
*/

export default function Home() {


    return (
        <>
            <Navbar />


            <main>


                {/* =================================
                    HERO
                ================================= */}

                <section id="home" className="hero">

                    {/* ==========================================
                        LEFT 40% - IMAGE
                    ========================================== */}
                    <div className="hero-image-container">

                        <img
                            src="/background.png"
                            alt=""
                            className="hero-background"
                        />

                        <img
                            src="/me.png"
                            alt="Joanna"
                            className="hero-person"
                        />

                    </div>


                    {/* ==========================================
                        RIGHT 60%
                        90% INTRO + 10% ROLES
                    ========================================== */}
                    <div className="hero-content">

                        <div className="hero-introduction">

                            <h1>
                                Hi! I'm Joanna.
                            </h1>

                            <p className="hero-description">
                                I'm a Computer Science student who enjoys
                                building software, improving the details,
                                and making things work better for the
                                people who use them.
                            </p>

                        </div>


                        {/* ==========================================
                            BOTTOM 10% - OMBRE ROLES BAR
                        ========================================== */}
                        <div className="hero-roles">

                            <span>Software Development</span>
                            <span>•</span>
                            <span>Quality Assurance</span>
                            <span>•</span>
                            <span>Project Coordination</span>

                        </div>

                    </div>

                </section>


                {/* =================================
                    ABOUT ME
                ================================= */}

                <section
                    id="about"
                    className="about"
                >

                    <p className="section-label">
                        About Me
                    </p>

                    <div className="about-text">

                        <p>
                            I tend to be the person who keeps track of the details, prepares ahead, and asks what could be improved along the way. 
                            I also enjoy working with others and learning from different perspectives, especially when they lead to a better approach or result.
                        </p>

                        <p>
                            Through my academic, project, and organizational experiences, 
                            I've developed a foundation in software development, testing, design, and project coordination. 
                            These experiences have also taught me the importance of consistency, communication, 
                            and being willing to adapt when things don't go as planned.
                        </p>

                    </div>

                </section>


                {/* =================================
                    KEY PROJECTS
                ================================= */}

                <ProjectsSection />


                <section
                    id="work"
                    className="work-section"
                >

                    {/* =================================
                        HOW I WORK HEADER
                    ================================= */}

                    <div className="work-hero">

                        <div className="work-hero-content">

                            <h2>
                                How I Work
                            </h2>

                            <p>
                                What my PCK assessment says about me
                            </p>

                        </div>

                        <div className="work-hero-image" />

                    </div>


                    {/* =================================
                        INTRODUCTION
                    ================================= */}

                    <div className="work-introduction">

                        <p>
                            My PCK assessment offered some interesting
                            insights into how I approach work. I tend to
                            notice small inconsistencies, organize
                            information and tasks, and look for ways to
                            improve how something works for the people
                            using it.
                        </p>

                    </div>


                    {/* =================================
                        TRAITS
                    ================================= */}

                    <div className="traits-section">

                        <h3>
                            Traits I most identify with are:
                        </h3>

                        <div className="traits-grid">

                            {traits.map((trait) => (

                                <TraitCard
                                    key={trait.title}
                                    title={trait.title}
                                    shortText={trait.shortText}
                                    description={trait.description}
                                />

                            ))}

                        </div>

                    </div>


                    {/* =================================
                        SEPARATOR BEFORE ASSESSMENT
                    ================================= */}

                    <div className="assessment-separator" />


                    {/* =================================
                        ASSESSMENT
                    ================================= */}

                    <div id="assessment" className="assessment-section">

                        <div className="assessment-heading">

                            <p className="section-label">
                                Assessment Highlights
                            </p>

                        </div>


                        <AssessmentBars />

                        <AssessmentKey />

                    </div>

                </section>


                {/* =================================
                    MY TAKEAWAY
                ================================= */}

                <section
                    className="takeaway-section"
                >

                    <p className="section-label">
                        My Takeaway
                    </p>

                    <p className="takeaway-text">
                        My results gave me some insights that I could relate to my experiences. 
                        I was particularly surprised by my spatial recognition score, although it makes sense given how easily I visualize ideas. 
                        My results in clerical accuracy, form perception, and verbal ability also reflect areas I often rely on in organizational work. 
                        Since taking the assessment, I've continued developing these strengths while working on areas that challenge me. I see the results less 
                        as a definition of my abilities and more as a snapshot of where I can continue to grow.
                    </p>

                </section>


                {/* =================================
                    SKILLS
                ================================= */}

                <section
                    id="skills"
                    className="skills-section"
                >

                    <div className="skills-heading">

                        <p className="section-label">
                            Skills & Tools
                        </p>

                        <h2>
                            Technologies I’ve explored and applied.
                        </h2>

                    </div>


                    <SkillsCarousel
                        skills={skills}
                    />

                </section>


                {/* =================================
                    CERTIFICATES
                ================================= */}

                <section
                    id="certificates"
                    className="certificates-section"
                >

                    <div className="certificates-left">

                        <div className="certificates-heading-top">
                            <h2>
                                Certificates
                            </h2>
                        </div>

                        <div className="certificates-heading-image">
                        </div>

                    </div>


                    <CertificateCarousel
                        certificates={certificates}
                    />

                </section>


            </main>


            {/* =================================
                FOOTER
            ================================= */}

            <Footer />

        </>
    );
}