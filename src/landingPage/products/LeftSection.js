import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt="prodImage" />
        </div>
        <div className="col-6">
          <h3
            className="pt-4 text-muted"
            style={{ marginTop: "10%", marginLeft: "30%" }}
          >
            {productName}
          </h3>
          <div className="row">
            <div
              className="col-8 pt-3 fs-medium"
              style={{
                marginLeft: "29%",
                lineHeight: "2",
                wordSpacing: "1.5px",
                paddingRight: "15%",
              }}
            >
              <p>{productDescription}</p>
            </div>
          </div>
          <a
            href={tryDemo}
            className="p-4 fw-medium"
            style={{ marginLeft: "26%", textDecoration: "none" }}
          >
            Try Demo &rarr;
          </a>
          <a
            href={learnMore}
            className="fw-medium"
            style={{ textDecoration: "none" }}
          >
            Learn More &rarr;
          </a>
          <br></br>
          <a href={googlePlay} style={{ marginLeft: "30%" }}>
            <img
              className="mt-5"
              src="media/images/googlePlayBadge.svg"
              alt="playstoreImage"
            />
          </a>
          <a href={appStore} style={{ marginLeft: "5%" }}>
            <img
              className="mt-5"
              src="media/images/appstoreBadge.svg"
              alt="appstoreImage"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
