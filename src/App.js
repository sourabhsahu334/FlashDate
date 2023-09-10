import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './screens/Headers';
import "./App.css"
import Frontend from './screens/Frontend';
import Policy from './screens/Policy';
import Home from './screens/Home';


function App() {
  const [mode,setDarkmode]=useState();


  return (

 
 <div style={{backgroundColor:mode?"black":"white",display:"flex"}}>
 <Router>
  <Headers/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/frontend" element={<Frontend/>}/>
    <Route path="policy" element={<Policy/>}/>
  </Routes>
</Router>
 </div>

  )
}

export default App