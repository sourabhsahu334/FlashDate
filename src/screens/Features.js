import React, { useEffect, useState } from "react";
import { useDarkMode } from "./darkmode";
import "../App.css";

function Features() {
  const [color, setcolor] = useState("rgba(0,0,0,.5)");
  const [ismobile,setismobile]=useState(true);
  useEffect(() => {
    if(window.innerWidth<620){
      setismobile(true)
      console.log(window.innerWidth)
    }
    if(window.innerWidth>620){
        setismobile(true);
    }

    if (isDarkMode) {
      setcolor("white");
    } else {
      setcolor("black");
    }
  });

  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const styles = {
    usedopexstyles: {
      width: "100px",
      height: "35px",
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  return (
    <div>  

  <div className="container">
      <div className="row">
        <div className="col-md-4">
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  }}
>

  <img
    style={{ marginRight: "20px" }}
    src={require("../assets/vanilla.svg").default}
    alt="Logo"
  />
  <p style={{ color: "#1fa9eb", fontWeight: "lighter" }}>OPTIONS</p>
  <p style={{ color: color }}>LIQUIDITY POOLS</p>
  <p
    style={{
      color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
      fontWeight: "lighter",
      width: "300px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    A platform for option buyers to easily exit & sell their tokenized
    positions at any time at a discounted rate.
  </p>
</div>
        </div>
        <div className="col-md-4">
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  }}
>

  <img
    style={{ marginRight: "20px" }}
    src={require("../assets/vanilla.svg").default}
    alt="Logo"
  />
  <p style={{ color: "#1fa9eb", fontWeight: "lighter" }}>OPTIONS</p>
  <p style={{ color: color }}>LIQUIDITY POOLS</p>
  <p
    style={{
      color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
      fontWeight: "lighter",
      width: "300px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    A platform for option buyers to easily exit & sell their tokenized
    positions at any time at a discounted rate.
  </p>
</div>
        </div>
        <div className="col-md-4">
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  }}
>

  <img
    style={{ marginRight: "20px" }}
    src={require("../assets/vanilla.svg").default}
    alt="Logo"
  />
  <p style={{ color: "#1fa9eb", fontWeight: "lighter" }}>OPTIONS</p>
  <p style={{ color: color }}>LIQUIDITY POOLS</p>
  <p
    style={{
      color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
      fontWeight: "lighter",
      width: "300px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    A platform for option buyers to easily exit & sell their tokenized
    positions at any time at a discounted rate.
  </p>
</div>
        </div>
      </div>
    </div></div>
  )
}

export default Features