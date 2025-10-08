import "./index.css";
import Hero from "./components/Hero";
import BookCard from "./components/BookCard";
import CurrentBook from "./components/CurrentBook";
import UpcomingBook from "./components/UpcomingBook";
import Footer from "./components/Footer";

function App() {
  const books = [
    {
      title: "Battle Cry",
      author: "Jason Wilson",
      cover: "/images/books/jasonWilson.png",
      price: "$18.99",
      link: "https://www.amazon.com/dp/1400226647",
      description: "Waging and winning the war within.",
    },
    // add more books...
  ];

  return (
    <div className="page"> {/* makes sticky footer layout possible */}
      {/* Hero at the very top */}
      <Hero />

      {/* Main content area grows to fill space */}
      <main>
        {/* 1) Current Book */}
        <section className="container" style={{ paddingTop: "2rem" }}>
          <h2 className="section-title">Current Book</h2>
          <CurrentBook />
        </section>

        {/* 2) Books to Explore */}
        <section className="container">
          <h2 className="section-title">Books to Explore</h2>
          <div className="grid">
            {books.map((b, i) => (
              <BookCard key={i} {...b} />
            ))}
          </div>
        </section>

        {/* 3) Upcoming Book */}
        <section
          className="container"
          style={{ paddingTop: "1.25rem", paddingBottom: "3rem" }}
        >
          <h2 className="section-title">Upcoming Book</h2>
          <UpcomingBook />
        </section>
      </main>

      {/* 4) Footer - always at the very bottom */}
      <Footer />
    </div>
  );
}

export default App;


