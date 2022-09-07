import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderDivide">
                <div className="dividedLeft">
                    <h3 style={{margin: '0px', fontFamily: 'Open Sans, sans-serif', fontWeight: 600,  fontSize: 'medium'}}>Keya</h3>
                    <p style={{margin: '0%',fontFamily: 'Roboto, sans-serif', fontSize: 'smaller'}}>Your Personal Kotak Assistant</p>
                </div>
                <div className="dividedRight">
                    <p style={{paddingRight: "10px", fontWeight: 700, fontSize: "30px", margin: '1px'}}>-</p>
                    <p style={{ fontWeight: 700, fontSize: "21px", margin: '1px'}}>&times;</p>
                </div>
            </div>
        </div>
    )
}

export default Header;