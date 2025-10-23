import React from 'react'
import './Head.css'
import Header from './Header'
import dar28 from '../src/img/dar28.png'
import dar29 from '../src/img/dar29.jpg'
import dar30 from '../src/img/dar30.jpg'
import gold1 from '../src/img/gold1.png'
import Footer from './Footer'
const Goldplan = () => {

  return (
    <div>
        <Header/>
          <br />
          <br />
          
          
      <div className="gold">
        <img src={dar28} />
      </div>
      <h1>Smart Gold Purchase Plan</h1>
      <div
        className="gold1"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "30px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* COLUMN 1 - Book My Gold */}
        <div
          className="gold2"
          style={{
            flex: "1",
            maxWidth: "30%",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Book My Gold</p>
          <img src={gold1} alt="Book My Gold" style={{ width: "100%", maxWidth: "200px" }} />
          <p style={{ lineHeight: "1.6" }}>
            Book my Gold is the ultimate gold savings piggy bank where you can save gold daily.
            <br />
            <br />
            Start from just Rs. 10 and accumulate your gold investment!
            <br />
            <br />
            Redeem ANY TIME OF THE YEAR - Immediately if you want to as well!
            <br />
            <br />
            Get 50% off All Gold Jewellery!
          </p>
          <button
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "4px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            VIEW DETAILS
          </button>
        </div>

        {/* COLUMN 2 - NAIRA */}
        <div
          className="gold2"
          style={{
            flex: "1",
            maxWidth: "30%",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "green" }}>NAIRA</h3>
          <img src={dar29} alt="Naira Plan" style={{ width: "100%", maxWidth: "200px" }} />
          <p style={{ lineHeight: "1.6", marginTop: "20px" }}>
            • The minimum installment amount is Rs 1000.
            <br />
            • Duration of the plan is 11 months.
            <br />
            • Customer will be eligible for a 100% discount on the
            "Value Addition" of the product for the accumulated
            amount after completing 11 months of installments.
            <br />
            • GST applicable.
          </p>
          <button
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "4px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            VIEW DETAILS
          </button>
        </div>

        {/* COLUMN 3 - RANI */}
        <div
          className="gold2"
          style={{
            flex: "1",
            maxWidth: "30%",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "green" }}>RANI</h3>
          <img src={dar30} alt="Rani Plan" style={{ width: "100%", maxWidth: "200px" }} />
          <p style={{ lineHeight: "1.6", marginTop: "20px" }}>
            • The minimum installment amount is Rs 3000.
            <br />
            • Duration of the plan is 11 months.
            <br />
            • Customer will be eligible for a 100% discount on the
            "Value Addition" of the product for the accumulated
            weight after completing 11 months of installments.
            <br />
            • GST applicable.
          </p>
          <button
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "4px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
<Footer/>
    
    </div>
  )
}

export default Goldplan