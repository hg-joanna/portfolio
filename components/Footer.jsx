const footerLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/joanna-hong-750a1b343/",
        icon: "linkedin"
    },
    {
        name: "GitHub",
        href: "https://github.com/hg-joanna",
        icon: "github"
    },
    {
        name: "Email",
        href: "mailto:hongjoannaz@gmail.com",
        icon: "email"
    }
];

export default function Footer() {

    const footerIcons = {
        linkedin: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45Z"
                />
            </svg>
        ),

        github: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M12 .5A12 12 0 0 0 8.2 23.88c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6-.02c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
                />
            </svg>
        ),

        email: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                />
            </svg>
        )
    };

    return (
        <footer className="footer">

            <div className="footer-content">

                <h2 className="footer-title">
                    Contact
                </h2>

                <p className="footer-description">
                    Feel free to reach out!
                </p>

                <div className="footer-socials">

                    {footerLinks.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            target={
                                link.name === "Email"
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                link.name === "Email"
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            aria-label={link.name}
                        >

                            <span className="footer-icon">
                                {footerIcons[link.icon]}
                            </span>

                            {link.name === "Email" && (
                                <span className="footer-email">
                                    hongjoannaz@gmail.com
                                </span>
                            )}

                        </a>

                    ))}

                </div>

            </div>

            <div className="footer-bottom">

                <span>
                    © 2026 Joanna
                </span>

                <a href="#home">
                    Back to top ↑
                </a>

            </div>

        </footer>
    );
}