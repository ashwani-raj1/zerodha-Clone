import React from "react";

function Footer() {
  return (
    <div>
      <div className="border-top" style={{paddingLeft:"10%",paddingRight:"10%", backgroundColor:"#f8f9fa", paddingTop:"40px",marginTop:"50px"}}>
        <div className="row">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ height: "5%" }}
            />
            <p className="mt-4" style={{ fontSize: "13px" }}>
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div>
              <i
                class="fa-brands fa-x-twitter"
                style={{ marginRight: "30px", fontSize: "20px" }}
              ></i>
              <i
                class="fa-brands fa-square-facebook"
                style={{ marginRight: "30px", fontSize: "20px" }}
              ></i>
              <i
                class="fa-brands fa-instagram"
                style={{ marginRight: "30px", fontSize: "20px" }}
              ></i>
              <i
                class="fa-brands fa-linkedin"
                style={{ marginRight: "30px", fontSize: "20px" }}
              ></i>
            </div>
            <hr />
            <i class="fa-brands fa-youtube" style={{ marginRight: "20px", fontSize: "20px" }}></i>
            <i
              class="fa-brands fa-whatsapp"
              style={{ marginRight: "20px", fontSize: "20px" }}
            ></i>
            <i
              class="fa-brands fa-telegram"
              style={{ marginRight: "20px", fontSize: "20px" }}
            ></i>
          </div>
          <div className="col" style={{fontSize:"15px"}}>
            <h5 className="mb-4">Account</h5>
            <p>Open demat account</p>
            <p>Minor demat account</p>
            <p>NRI demat account</p>
            <p>Commodity</p>
            <p>Dematerialisation</p>
            <p>Fund transfer</p>
            <p>MTF</p>
            <p>Referral program</p>
          </div>
          <div className="col" style={{fontSize:"15px"}}>
            <h5 className="mb-4">Support</h5>
            <p>Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
            <p>Bulletin</p>
            <p>Circular</p>
            <p>Z-Connect blog</p>
            <p>Downloads</p>
          </div>
          <div className="col" style={{fontSize:"15px"}}>
            <h5 className="mb-4">Company</h5>
            <p>About</p>
            <p>Philosophy</p>
            <p>Press & media</p>
            <p>Careers</p>
            <p>Zerodha Cares (CSR)</p>
            <p>Zerodha.tech</p>
            <p>Open source</p>
          </div>
          <div className="col" style={{fontSize:"15px"}}>
            <h5 className="mb-4">Quick links</h5>
            <p>Upcoming IPOs</p>
            <p>Brokerage charges</p>
            <p>Market holidays</p>
            <p>Economic calendar</p>
            <p>Calculators</p>
            <p>Markets</p>
            <p>Sectors</p>
          </div>
        </div>
        <p className="mt-4" style={{fontSize:"12px"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p className="mt-4" style={{fontSize:"12px"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p className="mt-4" style={{fontSize:"12px"}}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </p>
        <p className="mt-4" style={{fontSize:"12px"}}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p className="mt-4" style={{fontSize:"12px"}}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p className="mt-4" style={{fontSize:"12px"}}>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
        <p className="mt-4" style={{fontSize:"12px"}}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
        <div style={{display:"flex", justifyContent:"center", marginTop:"40px", fontSize:"15px"}}>
            <p style={{marginRight:"2%"}}>NSE</p>
            <p style={{marginRight:"2%"}}>BSE</p>
            <p style={{marginRight:"2%"}}>MCX</p>
            <p style={{marginRight:"2%"}}>Terms & Conditions</p>
            <p style={{marginRight:"2%"}}>Policies & Procedures</p>
            <p style={{marginRight:"2%"}}>Privacy Policy</p>
            <p style={{marginRight:"2%"}}>Disclosure</p>
            <p style={{marginRight:"2%"}}>For investor's attention</p>
            <p style={{marginRight:"2%"}}>Investor charter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
