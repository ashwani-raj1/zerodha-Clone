import React from "react";

function Universe() {
  return (
    <div
      className="container mt-5 mb-5 text-center"
      style={{ paddingLeft: "8%", paddingRight: "8%" }}
    >
      <p className="text-muted fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <h3 className="mt-5 text-muted">The Zerodha Universe</h3>
      <p className="mt-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col-4" style={{ padding: "5%", marginLeft: "" }}>
          <img
            className="mb-4"
            style={{ height: "30%", width: "80%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4" style={{ padding: "5%" }}>
          <img
            className="mb-4"
            style={{ height: "25%", width: "80%" }}
            src="media/images/sensibullLogo.svg"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4" style={{ padding: "5%" }}>
          <img
            className="mb-4"
            style={{ height: "25%", width: "80%" }}
            src="media/images/tijori.svg"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4" style={{ padding: "5%", marginLeft: "" }}>
          <img
            className="mb-4"
            style={{ height: "30%", width: "80%" }}
            src="media/images/streakLogo.png"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4" style={{ padding: "5%" }}>
          <img
            className="mb-4"
            style={{ height: "25%", width: "80%" }}
            src="media/images/smallcaseLogo.png"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4" style={{ padding: "5%" }}>
          <img
            className="mb-4"
            style={{ height: "30%", width: "80%" }}
            src="media/images/dittoLogo.png"
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button
        className="btn btn-primary text-center p-2 fs-5 mt-5"
        style={{ height: "35%", width: "20%" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
