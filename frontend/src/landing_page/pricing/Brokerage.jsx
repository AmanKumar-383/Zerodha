import React from "react";

export default function Brokerage() {
  return (
    <div className="container ">
      <div className="row text-center">
        <div
          style={{ display: "flex", gap: "4rem", paddingLeft: "110px" }}
          className="border-bottom  text-muted"
        >
          <h4>Equity</h4>
          <h4>Currency</h4>
          <h4>Commodity</h4>
        </div>

        <div style={{ padding: "20px" }} className="p-5">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #ddd",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <th
                  style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
                ></th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  Equity delivery
                </th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  Equity intraday
                </th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  F&amp;O - Futures
                </th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  F&amp;O - Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#fff" }}>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  Brokerage
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  Zero Brokerage
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  Flat Rs. 20 per executed order
                </td>
              </tr>

              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  STT/CTT
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  0.1% on buy &amp; sell
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  0.025% on the sell side
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  0.02% on the sell side
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    <li>0.125% of the intrinsic value on exercised options</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>

              <tr style={{ backgroundColor: "#fff" }}>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  Transaction charges
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  NSE: 0.00173% <br /> BSE: 0
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>

              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  GST
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  18% on (brokerage + SEBI + transaction charges)
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  18% on (brokerage + SEBI + transaction charges)
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  18% on (brokerage + SEBI + transaction charges)
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  18% on (brokerage + SEBI + transaction charges)
                </td>
              </tr>

              <tr style={{ backgroundColor: "#fff" }}>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  SEBI charges
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  ₹10 / crore
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  ₹10 / crore
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  ₹10 / crore
                </td>
                <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                  ₹10 / crore
                </td>
              </tr>

              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={{ padding: "14px" }}>Stamp charges</td>
                <td style={{ padding: "14px" }}>
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td style={{ padding: "14px" }}>
                  0.003% or ₹300 / crore on buy side
                </td>
                <td style={{ padding: "14px" }}>
                  0.002% or ₹200 / crore on buy side
                </td>
                <td style={{ padding: "14px" }}>
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted mt-3 fs-5">
          <a href="#">Calculate your costs upfront</a> using our brokerage
          calculator
        </p>
      </div>

      <div style={{ marginTop: "40px", padding: "48px" }}>
        <h4 style={{ opacity: 0.9, marginBottom: "24px" }}>
          Charges for account opening
        </h4>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#fff",
              borderBottom: "1px solid #ddd",
            }}
          >
            <tr>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Type of account
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Charges
              </th>
            </tr>
          </thead>

          <tbody style={{ fontSize: "15px", color: "#333" }}>
            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>Online account</td>
              <td style={{ padding: "16px 20px" }}>
                <span
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={{ padding: "16px 20px" }}>Offline account</td>
              <td style={{ padding: "16px 20px" }}>
                <span
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>
                NRI account (offline only)
              </td>
              <td style={{ padding: "16px 20px" }}>₹ 500</td>
            </tr>

            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={{ padding: "16px 20px" }}>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td style={{ padding: "16px 20px" }}>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "40px", padding: "48px" }}>
        <h4 style={{ opacity: 0.9, marginBottom: "24px" }}>
          Demat AMC (Annual Maintenance Charge)
        </h4>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#fff",
              borderBottom: "1px solid #ddd",
            }}
          >
            <tr>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Value of holdings
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                AMC
              </th>
            </tr>
          </thead>

          <tbody style={{ fontSize: "15px", color: "#333" }}>
            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>Up to ₹4 lakh</td>
              <td style={{ padding: "16px 20px" }}>
                <span
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  FREE*
                </span>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={{ padding: "16px 20px" }}>₹4 lakh - ₹10 lakh</td>
              <td style={{ padding: "16px 20px" }}>
                ₹ 100 per year, charged quarterly*
              </td>
            </tr>

            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>Above ₹10 lakh</td>
              <td style={{ padding: "16px 20px" }}>
                ₹ 300 per year, charged quarterly
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4" style={{ fontSize: "14px" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="#">click here</a>.
        </p>
      </div>

      <div style={{ marginTop: "40px", padding: "48px" }}>
        <h4 style={{ opacity: 0.9, marginBottom: "24px" }}>
          Charges for optional value added services
        </h4>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#fff",
              borderBottom: "1px solid #ddd",
            }}
          >
            <tr>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Service
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Billing Frquency
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "16px 20px",
                }}
              >
                Charges
              </th>
            </tr>
          </thead>

          <tbody style={{ fontSize: "15px", color: "#333" }}>
            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>Tickertape</td>
              <td style={{ padding: "16px 20px" }}>Monthly / Annual</td>
              <td style={{ padding: "16px 20px" }}>Free: 0 | Pro: 249/2399</td>
            </tr>

            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={{ padding: "16px 20px" }}>Smallcase</td>
              <td style={{ padding: "16px 20px" }}>Per transaction</td>
              <td style={{ padding: "16px 20px" }}>
                Buy & Invest More: 100 | SIP: 10
              </td>
            </tr>

            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "16px 20px" }}>Kite Connect</td>
              <td style={{ padding: "16px 20px" }}>Monthly</td>
              <td style={{ padding: "16px 20px" }}>
                Connect: 500 | Personal: Free
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container p-5">
        <h6 className="text-muted mb-3"> Disclaimer</h6>

        <p style={{fontSize: "14px", opacity: ".9"}}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}
