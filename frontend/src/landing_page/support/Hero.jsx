import React from "react";
import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");
  
  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundColor: "#F6F6F6",
          height: "240px",
          width: "100%",
          marginTop: "4.5rem",
        }}
      >
        <div
          style={{
            padding: "3rem 9rem", // add horizontal padding manually
            height: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              opacity: ".9",
              marginTop: "4.5rem",
              display: "inline",
              marginRight: "50rem",
            }}
          >
            Support Portal
          </h2>

          <button
            className="btn btn-primary"
            style={{
              marginBottom: "1.6rem",
              padding: "7px 20px",
              fontWeight: "500",
              backgroundColor: "#5b83dcff",
            }}
          >
            My Tickets
          </button>

          <div style={{ width: "100%", padding: "20px" }} className="row">
            <input
              type="text"
              placeholder="Eg: How do i open my, How do i activate F&O..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: "100%", // takes full width
                padding: "12px 16px", // comfortable input spacing
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
              }}
            />

            <p style={{ marginTop: "10px", opacity: "0.8" }}>
              You searched: {query}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
