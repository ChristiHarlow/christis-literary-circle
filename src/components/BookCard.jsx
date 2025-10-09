export default function BookCard({ title, author, cover, price, link, description }) {
  return (
    <div className="card">
      <img src={cover} alt={`${title} cover`} />
      <div className="card-body">
        <h3>{title}</h3>
        <div className="author">by {author}</div>
        {description && <p style={{ marginTop: ".5rem" }}>{description}</p>}
      </div>

      <div className="card-footer">
        <span className="price">{price}</span>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <a
            className="btn btn-buy"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get The Book
          </a>
          <a
            className="btn"
            href={`/feedback/${encodeURIComponent(title)}`}
            style={{ background: "var(--pumpkin)", color: "#fff" }}
          >
            Share Your Thoughts
          </a>
        </div>
      </div>
    </div>
  );
}

