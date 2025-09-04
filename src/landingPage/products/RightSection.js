import React from "react";

function RightSection({ productName, productDescription, learnMore, image }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className="col-6"
          style={{
            marginTop: "8%",
            paddingRight: "15%",
            paddingLeft: "10%",
            lineHeight: "2",
            wordSpacing: "1.5px",
          }}
        >
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <a
            href={learnMore}
            className="fw-medium"
            style={{ textDecoration: "none" }}
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="col-6">
          <img src={image} alt="prodImage" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
