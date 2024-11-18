import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import './index.css'
import { Map } from './Map.jsx'
import { Fetch } from './Fetch.jsx'
import { Useeffect } from './Useeffect.jsx'
import { Useeffectone } from './Useeffectone.jsx'
import { BootStrapProduct } from './BootStrapProduct.jsx'
import { Usememo } from './Usememo.jsx'


const anas = ReactDOM.createRoot(document.getElementById('root1'))


// var x = "anas"
// let person = {
//    fname : "anas",
//    lname : "mohamad" 
// }
// let message;
// function date(){
//   const obj = new Date();
//     const h = obj.getHours()
  
//     let m = obj.getMinutes();
//     const s = obj.getSeconds();
 
//     if (h <= 12) { 
//       message = "Good morning";
//      }
//      else { 
//       message = "Good afternoon";
//      }
//      return `${h}:${m}:${s}`;
  
//   } 



//   let uid = "anas"
//   let res ;
//   if(uid=="anas")
//   {
//     res="authorized user"
//   }
//   else{
//     res= "unauthorized user"
//   }
 

  
//   if('${h}'<= 12)
//    {
//       message = "good morning"

//    } 
//    else{
//     message="good afternoon"
//    }
//    setInterval(() => { document.getElementById('time').innerHTML = date();
//     // document.getElementById('message').innerHTML =message;
//    }, 1000);

anas.render(
 <>
  {/* <App/>
  {x}
  <h3>{40+50}</h3>
  <h3>{person.fname}{" "}{person.lname}</h3>
  <h3 id="time"></h3> 
  <h2>{res}</h2> */}
 
  
  {/* <h3 id='message' message="good morning" ? style={{color:"red"}}: style={{color:"yellow"}} ></h3> */}
  
   <App/>
     <Map/>
     <Useeffect/>
      <Fetch/>
      {/* <BootStrapProduct/> */}
      {/* <Useeffectone/> */}
      <Usememo/>
 </>

)