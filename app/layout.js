import "./globals.css";

export const metadata = {
  title: "Your Name · Practice Launch",
  description: "A tiny Next.js site for practising the Go Live lab.",
};

// The layout wraps every page, so the footer below shows on / and on /about.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="band band-blue">
          <p>Launched with GitHub and Vercel</p>
        </footer>
      </body>
    </html>
  );
}
