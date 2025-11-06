import React, { useState } from "react";

export default function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "Account Opening" },
    { title: "Your Zerodha Account" },
    { title: "Kite" },
    { title: "Funds" },
    { title: "Console" },
    { title: "Coin" },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left side */}
        <div className="col-md-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              <div
                className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border rounded shadow-sm"
                style={{
                  cursor: "pointer",
                  borderLeft: "6px solid #E7EEF7",
                }}
                onClick={() => toggleSection(index)}
              >
                <div className="d-flex align-items-center">
                  <i
                    className="fa-solid fa-plus text-primary me-3"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span className="fw-semibold fs-6 text-secondary">
                    {section.title}
                  </span>
                </div>
                <i
                  className={`fa-solid ${
                    openSection === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  } text-secondary`}
                ></i>
              </div>

              {openSection === index && (
                <div className="bg-light border-start border-3 border-primary p-3 small text-muted">
                  <p>
                    Content for <strong>{section.title}</strong> goes here. You
                    can include FAQs or help links related to this topic.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="col-md-4 mt-4 mt-md-0">
          {/* Notices */}
          <div
            className="p-3 mb-4 border-start border-warning bg-warning bg-opacity-10"
            style={{ borderLeftWidth: "5px" }}
          >
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-primary small"
                >
                  Electricity Futures contracts expiry – October 2025
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-primary small"
                >
                  Delay in commodity (MCX) market open [Resolved]
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white border rounded shadow-sm">
            <h6 className="fw-semibold border-bottom p-3 mb-0">
              Quick links
            </h6>
            <ul className="list-group list-group-flush small p-2">
              <li className="list-group-item">
                <a href="" style={{textDecoration: "none", fontSize: "1rem"}}>1. Track account opening </a>
              </li>
              <li className="list-group-item">
                <a href="" style={{textDecoration: "none", fontSize: "1rem"}}>2. Track segment activation</a>
              </li>
              <li className="list-group-item"><a href="" style={{textDecoration: "none", fontSize: "1rem"}}>3. Intraday margins </a></li>
              <li className="list-group-item"><a href="" style={{textDecoration: "none", fontSize: "1rem"}}>4. Kite user manual </a></li>
              <li className="list-group-item">
                <a href="" style={{textDecoration: "none", fontSize: "1rem"}}>5. Learn how to create a ticket </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
