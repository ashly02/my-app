import React, { useState } from 'react'

export default function About() {
   const [myStyle,setMyStyle]=useState(
    {
        color:'black',
        backgroundColor: 'white'
   
    })
    const [buttontext,setButtonText]=useState("Enable dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color==='white')
        {
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setButtonText("Enable dark mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: 'black'
            })
            setButtonText("Enable light mode")
        }
    }

  return (
    <div className="container" style={myStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} >
        Heading
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
</div>
<button type="button" onClick={toggleStyle} className="btn btn-primary">{buttontext}</button>
</div>
   
  )
}

