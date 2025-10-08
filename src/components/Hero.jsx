import React from "react";
import heroImage from "../assets/Hero.png"; // ✅ Correct relative path

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div className="hero-content" style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "2rem", borderRadius: "10px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Christi’s Literary <span style={{ color: "#FFD700" }}>Circle</span>
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
          Welcome to my little literary circle. I’ve handpicked stories that challenge, comfort, and encourage—
          come sit, grab a cup of tea, and join the conversation.
        </p>
      </div>
    </section>
  );
}

export default Hero;

