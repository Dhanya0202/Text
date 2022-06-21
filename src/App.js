import React from 'react';
import './App.css';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
const [mode,setMode] = useState('light');
 
const [alert,setAlert]= useState(" ");

const showAlert=(message,type)=>{

  setAlert({
    msg: message,
    type:type
  }) 

}
 
const [color,setColor]= useState("#EDEDED")

/*{const green=()=>
{
 setColor('#abf705');
 document.body.style.backgroundColor='#2dcf69';
 showAlert ("green Mode Enabled","success");

}
const red=()=>
{
 setColor('#dea9ac');
 document.body.style.backgroundColor='#ba2207';
 showAlert ("red Mode Enabled","danger");

}
const yellow=()=>
{
 setColor('#dee051');
 document.body.style.backgroundColor='#c2c208';
 showAlert ("Yellow Mode Enabled","warning");

}
const blue=()=>
{
 setColor('#07b7f7');
 document.body.style.backgroundColor='#085899';
 showAlert ("blue Mode Enabled","info");

}*/
 const toggleMode=()=>{
  if(mode ==='light'){
  setMode  ('dark')
  document.body.style.backgroundColor='#1b2e4d';
  showAlert ("Dark Mode Enabled","primary");
  setColor('#07b7f7')
  }
  else{
    setMode ('light')
  document.body.style.backgroundColor='#EDEDED';
  showAlert ("Light mode Enabled","success");
  setColor('White')
  }
}
  return (
    <>
<Router>
<Navbarr title="Textutils" mode={mode} toggleMode={toggleMode} /* green={green} red={red} blue={blue} yellow={yellow}*/></Navbarr>
<Alert alert={alert}></Alert>
<div className="container my-3">
<Routes>

         <Route path="/about" element={<About color= {color}/>}/>          
          
          <Route path="/" element={<TextForm heading="Enter the text" showAlert={showAlert} mode={mode} color={color}/>}/>
          
        </Routes>
        </div>
      </Router>
    </>
  );
  }  

export default App;
