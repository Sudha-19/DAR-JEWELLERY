import React from 'react';
import './Head.css';
import { Link } from 'react-router-dom'; 
import dar1 from '../src/img/dar1.webp';
import dar2 from '../src/img/dar2.webp';
const Header = () => {
    return (
        <div>
            {/* Top Metal Rate Bar */}
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3 style={{ margin: "10px", whiteSpace: "nowrap", color: "green" }}>
                    TODAY'S METAL RATE{" "}
                    <svg
                        style={{ color: "red" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chart-spline"
                    >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                        <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
                    </svg>
                </h3>

                <marquee style={{ color: "green", whiteSpace: "nowrap" }}>
                    75 (18 KT): ₹9,982&nbsp;&nbsp; SILVER: ₹203&nbsp;&nbsp; 91.6 (22 KT): ₹12,200
                </marquee>

                <h3 style={{ marginRight: "80px", whiteSpace: "nowrap", color: "green" }}>
                    Plan your Investment{" "}
                    <svg
                        style={{ color: "green" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lightbulb"
                    >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                    </svg>
                </h3>
            </span>

            {/* Logo + Search + Icons */}
            <div
                className="header-search"
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                    gap: "200px",
                }}
            >
                {/* Logo */}
                <div className="dar">
                    <img
                        src={dar1}
                        alt="Logo"
                        style={{
                            width: "260px",
                            height: "200px",
                            objectFit: "contain",
                        }}
                    />
                </div>

                {/* Search Box */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "2px solid black",
                        borderRadius: "8px",
                        padding: "5px 10px",
                        width: "400px",
                        backgroundColor: "white",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-scan-barcode"
                        style={{ marginRight: "8px", color: "black" }}
                    >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <path d="M8 7v10" />
                        <path d="M12 7v10" />
                        <path d="M17 7v10" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        style={{
                            flex: 1,
                            border: "none",
                            outline: "none",
                            fontSize: "14px",
                            color: "green",
                        }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search"
                        style={{ marginLeft: "8px", color: "black" }}
                    >
                        <path d="m21 21-4.34-4.34" />
                        <circle cx="11" cy="11" r="8" />
                    </svg>
                </div>

               
                <div style={{ display: "flex", gap: "25px", color: "green" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                    >
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock"
                    >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />




                        
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
            </div>

          
            <div
                style={{
                    color: "green",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                    fontWeight: "bold",
                    fontSize: "16px",
                }}
            >
                <Link to="/" style={{ color: "green", textDecoration: "none" }}>Home</Link>
                <Link to="/aboutus" style={{ color: "green", textDecoration: "none" }}>About Us</Link>
                <Link to="/contactus" style={{ color: "green", textDecoration: "none" }}>Contact Us</Link>
                <Link to="/goldplan" style={{ color: "green", textDecoration: "none" }}>Gold Plan</Link>
                <Link to="/book" style={{ color: "green", textDecoration: "none" }}>Book My Gold</Link>
                <Link to="/cart" style={{ color: "green", textDecoration: "none" }}>Click & Collect</Link>
                <Link to="/product" style={{ color: "green", textDecoration: "none" }}>Product</Link>
            </div>
        </div>
    );
};

export default Header;
