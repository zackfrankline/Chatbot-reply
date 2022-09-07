import React, { useEffect, useState } from "react";
import './InputContain.css';

const Input = () => {
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState({});

    const Handler = (e) => {
        setMessage(e.target.value)
    }
    const HandlerClick = () => {
        console.log(message);
        setMessages(message)
        setMessage('')
    }

    useEffect(() => {
        console.log('input changed')
    }, [messages])

    return (
      <div
           className="inputContainer"
      >
        <input
          placeholder="How May I help you?"
          onChange={Handler}
          value={message}
        />
        <div className="sendBtn"><p onClick={HandlerClick}>Send</p></div>
      </div>
    );
}

export default Input;