import BookCard from "./BookCard";

export default function CurrentBook() {
  // Replace with your real current pick
  const current = {
    title: "Battle Cry",
    author: "Jason Wilson",
    cover: "/images/books/jasonWilson.png",
    price: "$18.99",
    link: "https://www.amazon.com/dp/1400226647",
    description: "Our current discussion pick — courage, healing, and disciplined growth."
  };

  // Display it a bit larger than grid cards
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <BookCard {...current} />
    </div>
  );
}
