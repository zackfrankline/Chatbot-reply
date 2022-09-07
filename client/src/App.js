import React from "react";
import Header from "./Components/Header/Header";
import Greetings from "./Components/Greetings/Greetings";
import Input from "./Components/Input/Input";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import { useDataLayerValue } from "./DataLayer";
import Stocks from "./Components/Stocks/Stocks";
import BitCoins from "./Components/BitCoins/BitCoins";

function App() {

  const [{bitCoins, stocks}, dispatch] = useDataLayerValue();

  console.log(bitCoins, "BIT COINS")

  return (
    <div className="bot">
      <div style={{ height: "100vh", backgroundImage: 'url("https://cdn.wallpapersafari.com/54/0/HluF7g.jpg")', objectFit: 'cover' }}>
        { 
          stocks ? <Stocks /> : bitCoins ? <BitCoins /> : <><Header /><Greetings /><ChatRoom /></>
        }
      </div>
      {/* <Input /> */}
    </div>
  );
}

export default App;
