import React from 'react'

export default function Hero() {
  return (
    <div className='container mt-5 p-5 border-bottom'>
      <div className="row text-center mt-5 mb-5 ">
        <h3 className='mt-3' style={{opacity: ".9"}}>Zerodha Products</h3>
        <h5 style={{opacity: ".85", fontWeight: "400", lineHeight: "3rem"}}>Sleek, modern, and intuitive trading platforms</h5>
        <p className='mt-3'>Check out our <a href="" style={{textDecoration: "none"}}> investment offerings <i className="fa-solid fa-arrow-right-long"></i> </a></p>
      </div>
    </div>
  )
}
