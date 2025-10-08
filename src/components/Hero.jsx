import React from "react";
import heroImage from "../assets/Hero.png"; // <- your image

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "70vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.92)",
        }}
      />

      {/* Soft violet overlay so text stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(114,9,183,0.45), rgba(58,12,163,0.45))",
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem 1.5rem",
          maxWidth: 860,
        }}
      >
        <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", margin: 0 }}>
          Christi’s Literary <span style={{ color: "#4cc9f0" }}>Circle</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
            marginTop: "0.75rem",
            opacity: 0.92,
          }}
        >
          Welcome to my little literary corner. I’ve handpicked stories that
          challenge, comfort, and encourage—come sit, grab a cup of tea, and
          join the conversation.
        </p>
      </div>
    </section>
  );
}

