import { DarkMode } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Darkmode from "./darkmode";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from 'react-router-dom';

import { useDarkMode } from "./darkmode";
function Headers() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [color, setcolor] = useState("black");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      marginTop: "-15px",
    },
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      setcolor("white");
    } else {
      setcolor("black");
    }
  }, [isDarkMode]);

  return (
    <div
    style={{
      position: "fixed",
      height: "80px",
      backgroundColor: isDarkMode ? "black" : "white",
      width: "100%", // Always full width
      top: 0,
      display: "flex",
      zIndex: 2,
      paddingBottom: "20px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      // Add media query for responsiveness
      "@media (max-width: 768px)": {
        flexDirection: "column",
        height: "auto",
        padding: "10px 0",
      },
    }}
  >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
    
          marginTop: "20px",
        }}
      >
  
        <p
          style={{
            color: color,
            fontSize: "20px",
            fontWeight: "bolder",
            paddingTop: "10px",
            marginLeft:"20px"
          }}
        >
       Flash Date
        </p>
   
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "60%",
          marginRight: "50px",
          paddingTop: "30px",
        }}
      >
        <p
          style={{
            color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        >
          Home
        </p>
        <p
          style={{
            color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        >
<Link to="/policy">Policy</Link>
        </p>
        <p
          style={{
            color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        >
          Community
        </p>
        <p
          style={{
            color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        >
          Developers
        </p>

        {!isDarkMode ? (
          <NightlightRoundIcon
            onClick={toggleDarkMode}
            style={{
              color: "blue",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "-15px",
            }}
          />
        ) : (
          <LightModeIcon
            onClick={toggleDarkMode}
            style={{
              color: "#8aacf4",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "-15px",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-15px",
          }}
        >
          <LanguageIcon style={{ color: isDarkMode ? "#8aacf4" : "black" }} />

          <p
            style={{
              color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",
              paddingTop: "15px",
            }}
          >
            EN
          </p>
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styles.usedopexstyles}
        >
          <p style={{ paddingTop: "20px" }}>Flash Date</p>
        </div>
      </div>
    </div>
  );
}

export default Headers;
