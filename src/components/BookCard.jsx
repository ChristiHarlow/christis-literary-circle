export default function BookCard({ title, author, cover, price, link, description }) {
  return (
    <div className="card">
      <img src={cover} alt={`${title} cover`} />
      <div className="card-body">
        <h3>{title}</h3>
        <div className="author">by {author}</div>
        {description ? <p style={{marginTop:'.5rem', color:'#d6d2e0'}}>{description}</p> : null}
      </div>
      <div className="card-footer">
        <span className="price">{price}</span>
        <a className="btn" href={link} target="_blank" rel="noopener noreferrer">Buy Now</a>
      </div>
    </div>
  );
}
