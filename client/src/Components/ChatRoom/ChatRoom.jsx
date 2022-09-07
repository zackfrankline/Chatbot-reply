import React, { useRef, useEffect, useState } from "react";
import "./ChatRoom.css";
import { useDataLayerValue } from "../../DataLayer";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import axios from "axios";

const ChatRoom = () => {
  const [{ bitCoins, stocks }, dispatch] = useDataLayerValue();

  const btns = ["stocks", "bit coins"];

  const [focus, setFocus] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello how may i help you <3", type: "received" },
  ]);

  const Handler = (e) => {
    const text = e.target.value;
    setMessage(text);
  };

  const HandlerClick = async (e) => {


    e.preventDefault();
    // if (message.length > 0) {
    //   setMessages((pervMessages) => [
    //     ...pervMessages,
    //     { text: message, type: "sent" },
    //   ]);

      const response = await axios.post("http://localhost:3500/textQuery", {
        message,
      });
      
      setMessages((pervMessages) => [
        ...pervMessages,
        { text: message, type: "sent" },
      ]);

      
      const botText=response.data.fulfillmentText
      console.log(botText);

      setMessages((pervMessages) => [
        ...pervMessages,
        { text: botText, type: "received" },
      ]);

      

      setMessage("");
    }
  // };

  const messagesEndRef = useRef(null);

  const HandlerBtn = (event, value) => {
    if (value === "stocks") {
      dispatch({
        type: "SET_STOCKS",
        stocks: true,
      });
    }
    if (value === "bit coins") {
      dispatch({
        type: "SET_BITCOINS",
        bitCoins: true,
      });
    }
  };
  const le = "left";
  const ri = "right";

  const today = new Date();

  const hrs = today.getHours();
  const mins = today.getMinutes();

  const time = hrs + ":" + mins;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log(window.innerHeight, "height here");
  console.log(window.innerHeight / 13.79451359, "height here");

  console.log(window.innerHeight / 39, "height for greeetings here");

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div
        className="chatRoom"
        style={{ height: window.innerHeight / 12.79451359 + `vh` }}
      >
        <p className="timehere" style={{ margin: "1px 0px 5px" }}>
          {time}
        </p>
        {btns.length > 0 ? (
          <div className="btnsHere">
            {btns.map((item, i) => {
              return (
                <div
                  key={i}
                  className="btn"
                  onClick={(event) => HandlerBtn(event, item)}
                >
                  <p vignwesh="holaa">{item}</p>
                </div>
              );
            })}
          </div>
        ) : null}
        {messages.length > 0 ? (
          <div>
            {messages.map((item, i) => {
              return (
                <div
                  className={item.type}
                  style={{ textAlign: `${item.type === "sent" ? ri : le}` }}
                  key={i}
                >
                  <div>
                    <p style={{ margin: "0px", fontSize: "small" }}>
                      {item.text}
                    </p>
                  </div>
                  <p style={{ fontWeight: "light" }}>{time}</p>
                  <div ref={messagesEndRef} />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <form className="inputContainer" onSubmit={HandlerClick}>
        <input
          placeholder="How May I help you?"
          onChange={Handler}
          value={message}
          type="text"
          required
          autoFocus
        />
        <div className="sendBtn">
          <input type="submit" onClick={HandlerClick} value="Send" />
        </div>
      </form>
    </>
  );
};

export default ChatRoom;
