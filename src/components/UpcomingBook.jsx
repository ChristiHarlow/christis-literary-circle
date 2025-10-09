import BookCard from "./BookCard";

export default function UpcomingBook() {
  // Swap with your chosen upcoming title
  const nextUp = {
    title: "107 Days",
    author: "Kamala Harris",
    cover: "/images/books/kamalaHarris.png", // put this file in public/images/books/
    price: "$20.98",
    link: "https://www.amazon.com/107-Days-Kamala-Harris-ebook/dp/B0F6Z1MSG5?ref_=ast_author_mpb",
    description: "For the first time, and with surprising and revealing insights, former Vice President Kamala Harris tells the story of one of the wildest and most consequential presidential campaigns in American history.."
  };

  return (
    
      <BookCard {...nextUp} />
    
  );
}
