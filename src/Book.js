import React from 'react'
import gold3 from '../src/img/gold3.webp';
import gold4 from '../src/img/gold4.webp';
import gold5 from '../src/img/gold5.webp';
import gold6 from '../src/img/gold6.jpeg';
import gold7 from '../src/img/gold7.jpeg';
import gold8 from '../src/img/gold8.jpeg';
import gold9 from '../src/img/gold9.jpeg';
import gold10 from '../src/img/gold10.jpeg';
import gold11 from '../src/img/gold11.jpeg';
import gold12 from '../src/img/gold12.jpeg';
import Header from './Header'
import { Link } from 'react-router-dom';
import './Head.css'
const Book = () => {
  return (
    <div>
        <Header/>
        <br/>
        <br/>
        <h3 style={{backgroundColor:"lightgreen",height:"80px",padding:"50px",textAlign:"center"}}>GOLD JEWELLERY THAT FITS YOU</h3>
        <div className="golds">
            <div className="golds-1">
<img src={gold6}/>
<p style={{color:"green"}}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
<br/>
                  <span>₹1,03,724 </span>
                  <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px",color:"green" }}>₹1,09,595</span>
                  
                  <p style={{color:"green"}}>Weight:8.22 Gm</p>
          <Link to='/Cart'>
            <button style={{ color: "red" }}>Add To Cart</button>
          </Link>

</div>
              <div className="golds-1">
                  <img src={gold4} />
                  <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
                  <br />
                  <span>₹1,08,724 </span>
                  <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,14,595</span>

                  <p style={{ color: "green" }}>Weight:8.28 Gm</p>
                  <button style={{ color: "red" }}>Add To Cart</button>
              </div>
              <div className="golds-1">
                  <img src={gold5} />
                  <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
                  <br />
                  <span>₹1,30,724 </span>
                  <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,44,595</span>

                  <p style={{ color: "green" }}>Weight:9.98 Gm</p>
                  <button style={{ color: "red" }}>Add To Cart</button>
              </div>

                  

          
        </div>
      <br />
      <br />
      <br />
      <div className="golds">
        <div className="golds-1">
          <img src={gold9} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,03,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,09,595</span>

          <p style={{ color: "green" }}>Weight:8.22 Gm</p>

          <button style={{ color: "red" }}>Add To Cart</button>
        </div>
        <div className="golds-1">
          <img src={gold7} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,08,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,14,595</span>

          <p style={{ color: "green" }}>Weight:8.28 Gm</p>
          <button style={{ color: "red" }}>Add To Cart</button>
        </div>
        <div className="golds-1">
          <img src={gold8} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,30,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,44,595</span>

          <p style={{ color: "green" }}>Weight:9.98 Gm</p>
          <button style={{ color: "red" }}>Add To Cart</button>
        </div>




      </div>
      <br />
      <br />
      <br />
      <div className="golds">
        <div className="golds-1">
          <img src={gold10} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,03,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,09,595</span>

          <p style={{ color: "green" }}>Weight:8.22 Gm</p>

          <button style={{ color: "red" }}>Add To Cart</button>
        </div>
        <div className="golds-1">
          <img src={gold11} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,08,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,14,595</span>

          <p style={{ color: "green" }}>Weight:8.28 Gm</p>
          <button style={{ color: "red" }}>Add To Cart</button>
        </div>
        <div className="golds-1">
          <img src={gold12} />
          <p style={{ color: "green" }}> 22KT GOLD HALF VARIKAI JEWELLERY</p>
          <br />
          <span>₹1,30,724 </span>
          <span style={{ textDecoration: "line-through", color: "gray", marginLeft: "8px", color: "green" }}>₹1,44,595</span>

          <p style={{ color: "green" }}>Weight:9.98 Gm</p>
          <button style={{ color: "red" }}>Add To Cart</button>
        </div>




      </div>
    </div>
  )
}

export default Book