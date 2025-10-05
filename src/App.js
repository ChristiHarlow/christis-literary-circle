import "./index.css";
import BookCard from "./components/BookCard";

function App() {
  const books = [
    {
      title: "Battle Cry",
      author: "Jason Wilson",
      cover: "/images/books/jasonWilson.png",
      price: "$18.99",
      link: "https://www.amazon.com/dp/1400226647",
      description: "Waging and winning the war within."
    },
    // add more books here...
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Christi’s Literary <span className="accent">Circle</span></h1>
          <p>
            Welcome to my little literary corner. I’ve handpicked stories that challenge,
            comfort, and encourage—come sit, grab a cup of tea, and join the conversation.
          </p>
        </div>
      </section>

      <main className="container">
        <h2 className="section-title">Books to Explore</h2>
        <div className="grid">
          {books.map((b, i) => <BookCard key={i} {...b} />)}
        </div>
      </main>
    </>
  );
}

export default App;

