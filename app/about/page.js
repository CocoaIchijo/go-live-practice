import Link from "next/link";

export const metadata = {
  title: "About · Practice Launch",
};

export default function About() {
  return (
    <main>
      <section className="band band-light">
        <p className="eyebrow eyebrow-dark">About me</p>
        <h2>A little about me</h2>
        <p>
          Write two or three sentences about yourself here: what you study, what you like to build,
          and what you want to learn next.
        </p>
        <p className="back">
          <Link href="/">Back to home</Link>
        </p>
      </section>
    </main>
  );
}
