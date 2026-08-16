"use client";

import { useState } from "react";

const navLinks = [
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "How I Work",
        href: "#work"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Certificates",
        href: "#certificates"
    }
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/joanna-hong-750a1b343/",
        icon: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
            >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.57V9H3.56v11.45z" />
            </svg>
        )
    },
    {
        name: "GitHub",
        href: "https://github.com/hg-joanna",
        icon: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
            >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
        )
    },
    {
        name: "Email",
        href: "mailto:hongjoannaz@gmail.com",
        icon: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                />
                <path d="m3 7 9 6 9-6" />
            </svg>
        )
    }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavigation = (href) => {
        closeMenu();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Remove the hash from the URL
            window.history.replaceState(
                null,
                "",
                window.location.pathname
            );
        }
    };

    const handleHome = (event) => {
        event.preventDefault();

        closeMenu();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Remove any existing hash from the URL
        window.history.replaceState(
            null,
            "",
            window.location.pathname
        );
    };

    return (
        <header className="navbar">

            {/* LOGO */}

            <a
                href="#home"
                className="navbar-logo"
                onClick={handleHome}
            >
                JH
            </a>


            {/* DESKTOP NAVIGATION */}

            <nav className="navbar-links">

                {navLinks.map((link) => (
                    <a
                        href={link.href}
                        key={link.name}
                        onClick={(event) => {
                            event.preventDefault();
                            handleNavigation(link.href);
                        }}
                    >
                        {link.name}
                    </a>
                ))}

            </nav>


            {/* SOCIAL ICONS */}

            <div className="navbar-socials">

                {socialLinks.map((social) => (
                    <a
                        href={social.href}
                        key={social.name}
                        className="social-icon"
                        aria-label={social.name}
                        target={
                            social.name === "Email"
                                ? undefined
                                : "_blank"
                        }
                        rel={
                            social.name === "Email"
                                ? undefined
                                : "noopener noreferrer"
                        }
                    >
                        {social.icon}
                    </a>
                ))}

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
                type="button"
                className={`navbar-menu ${
                    menuOpen ? "open" : ""
                }`}
                aria-label={
                    menuOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() =>
                    setMenuOpen((previous) => !previous)
                }
            >
                {menuOpen ? "×" : "☰"}
            </button>


            {/* MOBILE NAVIGATION */}

            <nav
                className={`mobile-menu ${
                    menuOpen ? "open" : ""
                }`}
                aria-hidden={!menuOpen}
            >

                {navLinks.map((link) => (
                    <a
                        href={link.href}
                        key={link.name}
                        onClick={(event) => {
                            event.preventDefault();
                            handleNavigation(link.href);
                        }}
                    >
                        {link.name}
                    </a>
                ))}

            </nav>

        </header>
    );
}