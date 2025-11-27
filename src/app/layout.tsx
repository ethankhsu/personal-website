import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan Hsu | AI Engineer & Creator",
  description:
    "Personal website of Ethan Hsu - Princeton University student, AI/ML Engineer, and creative technologist. Explore my projects, experience, and journey.",
  keywords: [
    "Ethan Hsu",
    "AI Engineer",
    "Machine Learning",
    "Princeton University",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ethan Hsu" }],
  openGraph: {
    title: "Ethan Hsu | AI Engineer & Creator",
    description:
      "Princeton University student, AI/ML Engineer, and creative technologist.",
    siteName: "Ethan Hsu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Hsu | AI Engineer & Creator",
    description:
      "Princeton University student, AI/ML Engineer, and creative technologist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-dark-bg text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
