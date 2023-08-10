import React, { useEffect, useState } from "react";
import { useDarkMode } from "./darkmode";
import "../App.css";
import { SetMeal } from "@mui/icons-material";
import Features from "./Features";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
function Frontend() {
  const [color, setcolor] = useState("rgba(0,0,0,.5)");
  const [ismobile, setismobile] = useState(false);
  const navigate = useNavigate();
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
        height: "100%",
        backgroundColor: isDarkMode ? "black" : "#f9f9ff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        padding:"30px",
        paddingTop:"150px"
      }}
    >
       <p
          style={{
            color: isDarkMode ? "white" : "black",
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
         Dopex Frontends
        </p>
         <p style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)",fontSize:"20px" }}>
         Users can choose a frontend from the different frontend operators for Dopex below.
      </p>
      <p style={{ color: isDarkMode ? "#8aacf4" : "rgba(0,0,0,.5)" }}>
        Disclaimer: Dopex has not entered into any form of cooperation with
        Frontend Operators. The list of Frontend Operators is provided for
        informational purposes only. Neither is the list conclusive, nor has
        Dopex conducted any due diligence on these operators. Accordingly, Dopex
        does not make any statement regarding technical functionality and/or the
        trustworthiness of the Frontend Operators listed.
      </p>
      <p
          style={{
            color: isDarkMode ? "white" : "black",
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "bolder",
            marginTop:"100px"
          }}
        >
       Frontend List
        </p>
        <Table striped bordered hover style={{color:isDarkMode?"white":"black"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
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
  );
}

export default Frontend;
