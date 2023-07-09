
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




const App = (props)=> {
const [progress,setProgress] = useState(0)
const pageSize = 10;




  

 
    return (

      <div>
        

  <BrowserRouter>
  <Navbar/>
  
    <LoadingBar
        color='#f11946'
        height = "3px"
        progress={progress}
        
      />
     
      
  <Routes>
        
        <Route  exact path="/general" element={<News setProgress = { setProgress} key="general"  pageSize = { pageSize} country = { props.country} category = "general"/>}></Route>
        <Route exact path="/business" element={<News setProgress = { setProgress} key="business" pageSize = { pageSize} country = { props.country}category = "business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress = { setProgress} key="entertainment" pageSize = { pageSize} country = { props.country}category = "entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress = { setProgress} key="health" pageSize = { pageSize} country = { props.country}category = "health"/>}></Route>
        <Route exact path="/science" element={<News setProgress = { setProgress} key="science" pageSize = { pageSize} country = { props.country}category = "science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress = { setProgress} key="sports"pageSize = { pageSize} country = { props.country}category = "sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress = { setProgress} key="technology" pageSize = { pageSize} country = { props.country}category = "technology"/>}></Route>
        
        
        </Routes>
   </BrowserRouter>

        
        

        
      </div>
    )
  
}
export default App
