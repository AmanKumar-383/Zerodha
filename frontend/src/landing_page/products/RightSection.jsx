import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 px-5">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>
          <a
            href={learnMore}
            className="btn btn-outline-primary"
            style={{
              textDecoration: "none",
              borderRadius: "25px",
              padding: "8px 20px",
            }}
          >
            Learn more <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: "550px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
