import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Ahsan from './ahsan.jsx'






// const Element2=(
// <a href="https://coolors.co/palettes/trending">Color</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(

// Element2
// )
// {/* <h1>Name</h1>
//     <Ahsan/>
//   <h6>OK</h6> */}\

const name="ahsan"
const newElement=React.createElement( 
    'h1',
    {
    
    },
          `THis is   ${name} `
    )
    const newElement2=React.createElement(
    "a",
    {
      href: "https://giphy.com/",target :"_blank"
    },
    " GIF"
    
    )
     
    // ReactDOM.createRoot(document.querySelector("#root")).render(
    //   newElement2
    // )
    ReactDOM.createRoot(document.querySelector("#root")).render(
     
      <>
        {newElement}  
         <Ahsan/>  
         
         {newElement2}
      </>
 )