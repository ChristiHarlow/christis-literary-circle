import BookCard from "./BookCard";

export default function CurrentBook() {
  // Replace with your real current pick
  const current = {
    title: "The Man the Moment Demands",
    author: "Jason Wilson",
    cover: "/images/books/jasonWilson.png",
    link: "https://www.amazon.com/Man-Moment-Demands-Characteristics-Comprehensive/dp/1400249058/ref=tmm_pap_swatch_0",
    description: "Transform your life when you discover the essence of true masculinity and become the right kind of man for every challenge that lies ahead."
  };

  // Display it a bit larger than grid cards
  return (
    
      <BookCard {...current} />
    
  );
}
