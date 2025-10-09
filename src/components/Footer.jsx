export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1.25rem 0",
        borderTop: "1px solid rgba(0,0,0,.1)",
        background: "transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "var(--navy)" }}>
          © {new Date().getFullYear()} Christi’s Literary Circle
        </div>

        <nav style={{ display: "flex", gap: ".75rem" }}>
          {/* Email Button */}
          <a
            href="mailto:christiharlow@msn.com"
            className="btn btn-buy"
            style={{ background: "var(--sky)", color: "#fff" }}
          >
            Let's connect
          </a>

          {/* Join the Circle button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6wsGTC-Lv8zbRqG9-h1gjG2qug1XZsCMZoli4TYqcpNdQRQ/viewform?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              background: "var(--pumpkin)",
              color: "#fff",
            }}
          >
            Join the Circle
          </a>
        </nav>
      </div>
    </footer>
  );
}
