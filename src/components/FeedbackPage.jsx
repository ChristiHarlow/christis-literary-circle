import { useParams, Link } from "react-router-dom";

export default function FeedbackPage() {
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title);

  return (
    <section
      className="container"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        textAlign: "center",
        background: "var(--cream)",
        color: "var(--text)",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "var(--deep-crimson)",
          fontSize: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        {decodedTitle}
      </h2>

      <p
        style={{
          color: "var(--navy)",
          fontSize: "1.1rem",
          maxWidth: "650px",
          margin: "0 auto 2rem",
          lineHeight: "1.6",
        }}
      >
        I’d love to hear your reflections, quotes that moved you, or how this
        book inspired you. Your thoughts may even be featured in a future
        discussion or blog post.
      </p>

      {/* Send Comments button */}
      <a
        href={`mailto:christiharlow@msn.com?subject=Feedback on ${encodeURIComponent(
          decodedTitle
        )}`}
        className="btn btn-buy"
        style={{
          background: "var(--sky)",
          color: "#fff",
          textDecoration: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          fontWeight: "700",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        Send Comments
      </a>

      {/* Back to Home button */}
      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "var(--pumpkin)",
            color: "#fff",
            padding: "0.7rem 1.3rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
