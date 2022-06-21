import React from 'react'

export default function About(props) {
    /*const [myStyle,setMyStyle] =useState(
    {
        color: 'white',
        backgroundColor:'black'
    })
   
   // const [btntext,setbtnText] =useState("Enable Light Mode")

    const toggleStyle = ()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color: 'black',
                backgroundColor:'white',
                border :'0.5px solid black'
            })

            //setbtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
         //   setbtnText("Enable Light Mode")
        }
    }*/
  return (
    <div className="container" style={{backgroundColor: props.color,border:'0.5px solid black'}}>
    <h2>About US</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item my-1">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style={{backgroundColor: props.color,border:'0.5px solid black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyse your Text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.color,border:'0.5px solid black'}}>TextUtils gives you a way to analyze your text quickly and efficiently.</div>
    </div>
  </div>
  <div className="accordion-item my-1">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed"style={{backgroundColor: props.color,border:'0.5px solid black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.color,border:'0.5px solid black'}}>TextUtils is a free character counter tool that  provides instant charaacter count and word count sattistics for a given text . Textutils reports the number of words and characters.Also different operations can be performed on text using textUtils. </div>
    </div>
  </div>
  <div className="accordion-item my-1">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor: props.color,border:'0.5px solid black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <strong> Browser Compatibile</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor: props.color,border:'0.5px solid black'}}>This word counter software works in any web browsers like chrome,Firefox and etc.It suits to count character in facebook, blog, books etc. </div>
    </div>
  </div>
</div>
 {/*<div className="container my-5">
 <button onClick={toggleStyle} className="btn btn-primary ">{btntext}</button>
 </div>*/}
    </div>
  )
}
 