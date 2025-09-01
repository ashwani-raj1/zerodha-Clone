import React from "react";

function Team() {
  return (
    <div>
      <div className="row text-center mt-5 mb-5">
        <h4>People</h4>
      </div>
      <div className="row m-0">
        <div className="col-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Team"
            className="mb-5"
            style={{
              width: "65%",
              height: "75%",
              borderRadius: "50%",
              marginLeft: "70%",
            }}
          />
          <h4 style={{ marginLeft: "85%", width: "100%", marginTop: "-20px" }}>
            Nithin Kamath
          </h4>
          <p style={{ marginLeft: "90%", width: "100%" }}>Founder, CEO</p>
        </div>
        <div
          className="col-7"
          style={{
            textAlign: "left",
            paddingLeft: "15%",
            paddingRight: "10%",
            marginTop: "2.5%",
          }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
        <div className="row text-center mt-5">
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", height: "80%", width: "50%" }}
            />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
