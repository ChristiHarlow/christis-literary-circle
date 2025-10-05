export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>
          Christi’s Literary <span className="accent">Circle</span>
        </h1>
        <p>
          Welcome to my little literary corner. I’ve handpicked stories that challenge,
          comfort, and encourage—and I’d be honored to share them with you.
          Come sit, grab a cup of tea, and join the conversation.
        </p>
        <div className="cta-row">
          <a
            className="btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6wsGTC-Lv8zbRqG9-h1gjG2qug1XZsCMZoli4TYqcpNdQRQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Circle
          </a>
        </div>
      </div>
    </section>
  );
}
