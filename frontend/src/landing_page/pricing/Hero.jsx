import React from 'react'

export default function Hero() {
  return (
    <div className='container mt-5 p-5'>
      <div className="row text-center mt-5">
        <h2 className='mt-3' style={{opacity: ".9"}}>Charges</h2>
        <p className='text-muted fs-5' style={{fontWeight: "500", opacity: ".8", lineHeight: "2rem", marginBottom: "10rem"}}>List of all charges and taxes</p>

        <div className="col p-5">
          <img src="media/images/pricing0.svg" style={{width : "15rem", marginBottom: "2rem"}} />
          <h3 className='mb-4'>Free equity delivery</h3>
          <p className='text-muted '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col p-5">
          <img src="media/images/intradayTrades.svg" style={{width : "15rem", marginBottom: "2rem"}} />
          <h3 className='mb-4 '>Intraday and F&O trades</h3>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col p-5">
          <img src="media/images/pricing0.svg" style={{width : "15rem", marginBottom: "2rem"}}  />
          <h3 className='mb-4'>Free direct MF</h3>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      
    </div>
  )
}
