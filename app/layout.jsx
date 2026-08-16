import "./globals.css";

export const metadata = {
    title: "Joanna | Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>

            <body>{children}</body>
        </html>
    );
}