import "./index.css";
import Hero from "./components/Hero";
import BookCard from "./components/BookCard";
import CurrentBook from "./components/CurrentBook";
import UpcomingBook from "./components/UpcomingBook";
import Footer from "./components/Footer";
import FeedbackPage from "./components/FeedbackPage";

function App() {
  const books = [
    {
      title: "The Let Them Theory",
      author: "Mel Robbins",
      cover: "/images/books/melRobbins.png",
     
      link: "https://www.amazon.com/dp/1401971369?tag=lnk0001-20&geniuslink=true",
      description: "If you've ever felt stuck, overwhelmed, or frustrated with where you are, the problem isn't you. The problem is the power you give to other people. Two simple words—Let Them—will set you free.",
    },

    {
      title: "You Deserve to Be Rich: Master the Inner Game of Wealth and Claim Your Future",
      author: "Rashad Bilal and Troy Millings",
      cover: "/images/books/rashadTroy.png",
      
      link: "https://www.amazon.com/You-Deserve-Be-Rich-Master/dp/059372819X",
      description: "This book is full of tips, insights, and stories about real people, just like you, who have used the tools of wealth building to overcome barriers and build the life they want.",
    },
    {
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      cover: "/images/books/jamesClear.png",
     
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_1?adgrpid=1330409634350496&dib=eyJ2IjoiMSJ9.FB6abDmi04mz9MCXGc_sAmloU_whL4u8484PSvfs30s5WliN6Da3QsER3V5__F5yZipwcpxymCdNY3yp7LlzL76Iv4kkDaMKppLeFf-s_0e5oOKloNunVc1gff8Qm4dVi0fTrndIsBVns3pQ02mRN_2QzRDoaZSCLrKVYisruPzWW0_V5f4fwzlwh_fWsFENZGA_c04IOIg5449PahALWzQYh7omG-f33S0hfhVXIA0.cr2FVSMuKW_GAwQqmgKFkqCkFNf__uPvGkH0Qf69_hA&dib_tag=se&hvadid=83150991965817&hvbmt=bp&hvdev=c&hvlocphy=105475&hvnetw=o&hvqmt=p&hvtargid=kwd-83150948681363%3Aloc-190&hydadcr=22167_13576408&keywords=atomic+habits+kindle&mcid=7f78a16a18893b24b459afc31fee3fd4&msclkid=69dadeb180691406c759b65990efe6d8&qid=1760039103&sr=8-1",
      description: "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
    },
    // add more books...
  ];

    return (
    <Router>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section className="container">
                  <h2 className="section-title">Current Book</h2>
                  <div className="grid cards">
                    <CurrentBook />
                  </div>
                </section>

                <section className="container">
                  <h2 className="section-title">Books to Explore</h2>
                  <div className="grid cards">
                    {books.map((b, i) => (
                      <BookCard key={i} {...b} />
                    ))}
                  </div>
                </section>

                <section className="container">
                  <h2 className="section-title">Upcoming Book</h2>
                  <div className="grid cards">
                    <UpcomingBook />
                  </div>
                </section>

                <Footer />
              </>
            }
          />
          <Route path="/feedback/:title" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;