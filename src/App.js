import Hero from "./components/Hero";

import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Hero />
      <main className="container">
        <h2 className="section-title">Books to Explore</h2>
        <p style={{ color: "var(--muted)" }}>
          Your book grid will go here. We’ll wire it up after the Hero is set.
        </p>
      </main>
    </>
  );
}
