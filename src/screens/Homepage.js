import React, { useEffect, useState } from "react";
import { useDarkMode } from "./darkmode";
import "../App.css";
import { SetMeal } from "@mui/icons-material";
import Features from "./Features";
import { Link, useNavigate } from "react-router-dom";
function Homepage() {
  const [color, setcolor] = useState("rgba(0,0,0,.5)");
  const [ismobile, setismobile] = useState(false);
  const navigate= useNavigate();
  useEffect(() => {
    if (window.innerWidth < 620) {
      setismobile(true);
      console.log(window.innerWidth);
    }
    if (window.innerWidth > 620) {
      setismobile(false);
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
    box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "40px",
    },
  };
  return (
    <div
      style={{
        width: "100%",

        backgroundColor: isDarkMode ? "black" : "#f9f9ff",
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        paddingTop: "120px",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          color: color,
          fontSize: ismobile ? "20px" : "45px",
        }}
      >
        <span style={{ color: "#20b6f0" }}>D</span>CENTRALIZED{" "}
        <span style={{ color: "#20b6f0" }}>OP</span>TIONS{" "}
        <span style={{ color: "#20b6f0" }}>EX</span>CHANGE
      </p>
      <p style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)" }}>
        Dopex is a maximum liquidity and minimal exposure options protocol
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ ...styles.usedopexstyles, marginRight: "20px" }}>
          <p style={{ paddingTop: "15px" }}>Flash Date</p>
        </div>
    <a href="https://docs.dopex.io/">
    <div className="documationbutton" >
          <p
            style={{
              color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
              opacity: 0.7,
              paddingTop: "15px",
            }}
          >
            Documentation
          </p>
        </div>
    </a>
      </div>

      <Features />
      <div
        style={{
          width: "87%",
          height: "100%",
          backgroundColor: isDarkMode ? "#0e1119" : "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: " 0 0 10px rgba(0,0,0,.5)",
          marginTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <p style={{ color: "#1fa9eb", marginTop: "20px" }}>BUILT DIFFERENT</p>
        <p
          style={{
            color: isDarkMode ? "white" : "black",
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          DEFI FIRST & POWERFUL OPTIONS
        </p>
        <p
          style={{
            color: isDarkMode ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)",
            marginTop: "20px",
          }}
        >
          We built a protocol with vast improvements over the existing options
          market.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div style={{ ...styles.box }}>
                <img
                  style={{ height: "50px", marginRight: "20px" }}
                  src={require("../assets/stacking.svg").default}
                  alt="Logo"
                />
                <div>
                  <p style={{ color: color }}>Stacking Yeild</p>
                  <p
                    style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)" }}
                  >
                    Your collateral never goes un-used and is put to work by
                    staking in other protocols to earn yields.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ ...styles.box }}>
                <img
                  style={{ height: "50px", marginRight: "20px" }}
                  src={require("../assets/collat.svg").default}
                  alt="Logo"
                />
                <div>
                  <p style={{ color: color }}>Collateral Borrowing</p>
                  <p
                    style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)" }}
                  >
                    Atlantic options offer buyers with unique products like
                    applying straddle strategies with a fraction of the cost and
                    insuring leveraged longs. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div style={{ ...styles.box }}>
                <img
                  style={{ height: "50px", marginRight: "20px" }}
                  src={require("../assets/risk.svg").default}
                  alt="Logo"
                />
                <div>
                  <p style={{ color: color }}>Minimizing Risk</p>
                  <p
                    style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)" }}
                  >
                    Offset risk and minimize losses as a liquidity provider with
                    rDPX rebates..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ ...styles.box }}>
                <img
                  style={{ height: "50px", marginRight: "20px" }}
                  src={require("../assets/pricing.svg").default}
                  alt="Logo"
                />
                <div>
                  <p style={{ color: color }}>Pricing Efficiency</p>
                  <p
                    style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)" }}
                  >
                    Our options collateral efficiency gives Dopex a distinct
                    advantage in pricing, allowing for immediate arbitrage
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "150px",
          width: "100%",
        }}
      >
        <p style={{ color: "#20b6f0", fontSize: "25px" }}>
          Investors & Parterns
        </p>

        <div className="row" style={{ width: "80%" }}>
          <div className="col-md-6">
            <img
              style={{ width: "250px", marginTop: "50px" }}
              src={require("../assets/orca_traders.png")}
              alt="Logo"
            />
          </div>
          <div className="col-md-6">
            <img
              style={{ width: "250px", marginTop: "50px", height: "80px" }}
              src={require("../assets/pattern.png")}
              alt="Logo"
            />
          </div>
        </div>

        <div className="row" style={{ width: "80%" }}>
          <div className="col-md-6">
            <img
              style={{
                width: "250px",
                marginTop: "50px",
                color: "white",
                backgroundColor: "white",
              }}
              src={require("../assets/debase.svg").default}
              alt="Logo"
            />
          </div>
          <div className="col-md-6">
            <img
              style={{ width: "250px", marginTop: "50px" }}
              src={require("../assets/hardwood_orcz.svg").default}
              alt="Logo"
            />
          </div>
          <div className="col-md-6">
            <img
              style={{ width: "250px", marginTop: "50px",backgroundColor:"white" }}
              src={require("../assets/dcv.png")}
              alt="Logo"
            />
          </div>
        </div>

        <div style={{ width: "85%", marginTop: "100px", marginLeft: "30px" }}>
          <div
            style={{ justifyContent: "center", alignItems: "center" }}
            className="row"
          >
            <div className="col-md-6">
              <p
                style={{
                  color: "#1fa9eb",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                SYNERGY
              </p>
              <p
                style={{
                  color: isDarkMode ? "white" : "black",
                  marginTop: "20px",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                DUAL TOKEN MODEL
              </p>
              <p
                style={{
                  color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
                  marginTop: "20px",
                  width: "380px",
                  fontSize: "19px",
                }}
              >
                Dopex utilizes two separate tokens to coordinate new ecosystem
                dynamics in a synergistic feedback loop.
              </p>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  height: "300px",
                  width: "270px",
                  backgroundColor: isDarkMode ? "#0e1119" : "white",
                  borderRadius: "10px",
                  boxShadow: " 0 0 10px rgba(0,0,0,.5)",
                  marginTop:"10px"
                }}
              >
                <img
                  style={{
                    margin: "20px",
                    height: "70px",
                    marginRight: "30px",
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "35px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  src={require("../assets/logo.svg").default}
                  alt="Logo"
                />
                <p
                  style={{
                    color: isDarkMode ? "white" : "black",
                    margin: "20px",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    marginTop: "-10px",
                  }}
                >
                  DPX
                </p>
                <p
                  style={{
                    margin: "20px",
                    fontSize: "19px",
                    color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
                  }}
                >
                  DPX is the limited supply governance token. It accrues fees
                  and revenue from pools, vaults and wrappers.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  height: "300px",
                  width: "270px",
                  backgroundColor: isDarkMode ? "#0e1119" : "white",
                  borderRadius: "10px",
                  boxShadow: " 0 0 10px rgba(0,0,0,.5)",
                  fontSize: "19px",
                  marginTop:"10px"
                }}
              >
                <img
                  style={{
                    margin: "20px",
                    height: "70px",
                    marginRight: "30px",
                    backgroundColor: "blue",
                    padding: "10px",
                    borderRadius: "35px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    color: "white",
                  }}
                  src={require("../assets/logo.svg").default}
                  alt="Logo"
                />
                <p
                  style={{
                    color: isDarkMode ? "white" : "black",
                    margin: "20px",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    marginTop: "-10px",
                  }}
                >
                  rDPX
                </p>
                <p
                  style={{
                    color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
                    margin: "20px",
                    fontSize: "19px",
                  }}
                >
                  rDPX is the rebate token for option writers. A ton of other
                  utility will be introduced for rDPX
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{marginTop:"100px"}}
    
        >
          <div className="col-6">
            <img
              style={{ height: "40px", marginRight: "20px" }}
              src={require("../assets/logo.svg").default}
              alt="Logo"
            />
            <p
              style={{
                width: "150px",
                margin: "5px",
                fontSize: "20px",
                color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
              }}
            >
              © 2023 Dopex
            </p>
          </div>
          <div className="col-6">
            <p style={{ color: color,fontSize:"19px" }}>Product</p>
            <p
              style={{
                width: "150px",
                margin: "5px",
                fontSize: "20px",
                color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
                cursor:"pointer"
              }}
              onClick={()=>navigate('frontend')}
            >
            Use Dopex
            </p>
          </div>
          {/* <div className="col-2">
            <p style={{ color: color }}>Learn</p>
            <p
              style={{
                width: "150px",
                margin: "5px",
                fontSize: "20px",
                color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
              }}
            >
              Documentation Blog Knowledge Base
            </p>
          </div>
          <div className="col-2">
            <p style={{ color: color }}>Community</p>
            <p
              style={{
                width: "150px",
                margin: "5px",
                fontSize: "20px",
                color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
              }}
            >
              Discord Twitter
            </p>
          </div>

          <div className="col-2">
            <p style={{ color: color }}>Developers</p>
            <p
              style={{
                width: "150px",
                margin: "5px",
                fontSize: "20px",
                color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,0.5)",
              }}
            >
              GitHub Bug Bounty
            </p>
          </div> */}
   
        </div>
      </div>
    </div>
  );
}

export default Homepage;
