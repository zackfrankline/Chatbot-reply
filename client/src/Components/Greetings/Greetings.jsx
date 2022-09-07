import React, { useRef, useEffect } from "react";
import './Greetings.css';
// import greetImg from '../../Assets/Anjali_Menon-removebg-preview.png';
import greetImg from '../../Assets/sophia-removebg-preview (1).png'

const Greetings = () => {

    const ref = useRef()

    useEffect(() => {
      if (ref && ref.current && ref.current.clientHeight) {
        console.log('called')
      }
      console.log('useEffect',  ref.current.clientHeight)
    }, [])

    return(
        <div className="greetings" ref={ref}>
            <div className="greetImg">
                <img src={greetImg} alt="greet img"/>
            </div>
            <div className="greetHere">
                <div className="greetHeadHere">
                    <h3 style={{ fonFamily: 'Open Sans, sans-serif', fontWeight: 600,  fontSize: 'smaller', margin: '0px'}}>Hi! there! I am Keya Chatbot</h3>
                    <p style={{ fonFamily: 'Open Sans, sans-serif', fontWeight: 400,  fontSize: 'small', margin: '0px'}}>I can help you with queries regarding</p>
                </div>
                <div className="greetLinksHere">
                    <div className="leftLinks">
                        <ul>
                            <li>Credit/Debit Card</li>
                            <li>Bank Account</li>
                            <li>Loans</li>
                        </ul>
                    </div>
                    <div className="rightLinks">
                        <ul>
                            <li>Fund Transfer</li>
                            <li>Fixed Deposit</li>
                            <li>Bill Payment</li>
                        </ul>
                    </div>
                </div>
                <div style={{width: '95%', textAlign: 'center'}}>
                    <hr />
                </div>
                <p style={{ fonFamily: 'Open Sans, sans-serif', fontWeight: 400,  fontSize: 'x-small', margin: '0px'}}>Get started by selection a query from below or type your own query.</p>
            </div>
        </div>
    )
}

export default Greetings;