import "./BookCard.css";

export default function BookCard({
  title,
  author,
  cover,
  price,
  link,
  description,
}) {
  return (
    <div className="card">
      <img className="card-image" src={cover} alt={`${title} cover`} />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-author">by {author}</div>

        {description ? (
          <p className="card-desc">{description}</p>
        ) : null}
      </div>

      <div className="card-footer">
        {price ? <span className="price">{price}</span> : <span />}
        <a
          className="btn btn-buy"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

