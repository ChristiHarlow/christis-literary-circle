import BookCard from "./BookCard";

export default function UpcomingBook() {
  // Swap with your chosen upcoming title
  const nextUp = {
    title: "The Creative Act",
    author: "Rick Rubin",
    cover: "/images/books/creativeAct.png", // put this file in public/images/books/
    price: "$21.99",
    link: "https://www.amazon.com/dp/0593652886",
    description: "A reflective guide to making, sharing, and living creatively."
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <BookCard {...nextUp} />
    </div>
  );
}
