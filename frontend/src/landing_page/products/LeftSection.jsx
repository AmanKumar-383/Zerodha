import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-4">
      <div className="row ">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}  style={{ textDecoration: "none" }}>
            Try Demo <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <a href={learnMore} style={{ textDecoration: "none", marginLeft: "40px" }}>
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" alt="" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
