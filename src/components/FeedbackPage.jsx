import { useParams } from "react-router-dom";

export default function FeedbackPage() {
  const { title } = useParams();

  return (
    <section className="container" style={{ paddingTop: "3rem", textAlign: "center" }}>
      <h2 style={{ color: "var(--deep-crimson)" }}>{decodeURIComponent(title)}</h2>
      <p style={{ color: "var(--navy)", marginTop: "1rem" }}>
        Share your thoughts about this book. I’d love to hear your reflections, quotes you loved, or how it inspired you.
      </p>
      <a
        href={`mailto:christiharlow@outlook.com?subject=Feedback on ${encodeURIComponent(title)}`}
        className="btn btn-buy"
        style={{ marginTop: "1.5rem", display: "inline-block" }}
      >
        Send Comments
      </a>
    </section>
  );
}
