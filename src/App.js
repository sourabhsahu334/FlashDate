import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Headers from './screens/Headers';
import "./App.css"
import Frontend from './screens/Frontend';




function App() {
  const [mode,setDarkmode]=useState();

 
  return (

 
 <div style={{backgroundColor:mode?"black":"white",display:"flex"}}>
     <Router>
  <Headers/>
  <Routes>
 
    <Route path="/" element={<Homepage/>}/>
    <Route path="/frontend" element={<Frontend/>}/>
   

  </Routes>
</Router>
 </div>

  )
}

export default App