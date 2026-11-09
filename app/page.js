import Image from "next/image";
import Link from "next/link";

// Step 10 practice: change "Your Name" below, save, then Commit to main
// and Push origin in GitHub Desktop. Vercel updates the live site by itself.
export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-text">
          <p className="eyebrow">Practice launch</p>
          <h1>Hi, I’m Ana</h1>
          <p className="lead">
            This tiny Next.js app is about to go live on the internet with GitHub and Vercel.
          </p>
          <Link className="button" href="/about">
            About me
          </Link>
        </div>
        {/* The file is public/images/rocket.png, so the path starts at the root: /images/rocket.png */}
        <Image
          className="hero-image"
          src="/images/rocket.png"
          alt="A rocket lifting off with a blue flame"
          width={480}
          height={480}
          priority
        />
      </header>

      <main>
        <section className="band band-soft">
          <h2>How this app is built</h2>
          <ul className="facts">
            <li>
              <strong>app/page.js</strong> is this home page, at /.
            </li>
            <li>
              <strong>app/about/page.js</strong> is the About page, at /about.
            </li>
            <li>
              <strong>public/images/rocket.png</strong> is used as /images/rocket.png.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
