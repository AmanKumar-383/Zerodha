import React from "react";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row  text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/images/zerodhaFundhouse.png" style={{height:"50px"}} className="mb-1" />
          <p className="text-muted  text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" style={{height:"30px"}} className="mb-4" />
          <p className="text-muted  text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-2">
          <img src="media/images/tijori.png" style={{height:"48px"}} className="mb-3" />
          <p className="text-muted  text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"  style={{height:"50px"}}/>
          <p className="text-muted  text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{height:"50px"}} />
          <p className="text-muted  text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{height:"35px"}} className="mb-3" />
          <p className="text-muted  text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>


        <button className='p-2 btn btn-primary mt-5 mb-5 fs-5' style={{width: "18%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}
