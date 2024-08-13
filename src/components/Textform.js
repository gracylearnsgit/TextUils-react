import React, {useState, useRef} from 'react'

export default function Textform(props) {

    const checkk = useRef(1) ;
    const firstboxOC = () => {

        if( (checkk.current) === 1 ){
            let newTextt = " ";
            setText(newTextt) ; 
            checkk.current++;
        }
        console.log(checkk.current) ;
    }
    
    const functohandleonchange = (event) => {
        console.log("On change handled") ;
        setText(event.target.value);  
    }

    const buttonUOC = () => {
        console.log("Upper case clicked" + text )
        let second = text.toUpperCase();
        setText(second);
        props.propshowAlert("Converted to upperCase!", "success")
    }

    const buttonLOC = () => {
        console.log("Upper case clicked" + text )
        let second = text.toLowerCase();
        setText(second);
    }

    const buttonCopyrev = () => {
        // js has navigator.clipboard methods. one of it is 
        //write text which takes in the string u want to copy
        navigator.clipboard.writeText(text)
    }

    const buttonRESrev = () =>{
        let newTeextt =  text.split(/\s+/)
        setText(newTeextt.join(" "))
    }

    const buttonFLCrev = () => {
        let array = text.split(" ")
        for ( let i=0; i<array.length; i++){
            array[i] = array[i].charAt(0).toUpperCase()+ array[i].slice(1)
        }
        setText(array.join(" "))
    }

    const buttonEErev = () => {
        // Regular expression to match email addresses
        let emailPattern =  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g ;
        // Extract email addresses using the pattern
            let mailids = text.match(emailPattern) + " " || ["no emails found"] ;      
            setEmaill(mailids)
            setEEbuttonclicked(true); //set it to true taki fir vo div show ho when we 
            //use && operator checking ShowEmailDiv later  
    }
    

    const [EEbuttonclicked, setEEbuttonclicked] = useState(false);

    const[text,setText] = useState("Enter text here"); 
    //const[variable, functionsetvariable] = useState("value");

    const[emaill,setEmaill] = useState(" "); 
    //const[variable, functionsetvariable] = useState("value");

    return (
        <>
        <div className="container mb-3 mx-5" 
        style ={{color: props.modeprop === 'dark' ? 'white' : 'black'}} >
          <div className="form-group ">
          <h1>{props.heading}</h1>
          </div>
          <div >
          <textarea className="form-control" id="myBox" rows="8"  
          onClick={firstboxOC} value={text} onChange={functohandleonchange}
          style={{
            backgroundColor : props.modeprop === 'dark' ? '#21232f' : 'white',
          color: props.modeprop === 'dark' ? 'white' : 'black'
          }}/></div>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonUOC}
          >Convert to upper case</button>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonLOC}
          >Convert to lower case</button>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonCopyrev}
          >Copy text</button>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonRESrev}
          >Remove Extra Space</button>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonFLCrev}
          >First Letter Capital</button>
          <button type="button" className="btn btn-primary mx-2 mt-3 " onClick={buttonEErev}
          >Extract Email</button>
          {EEbuttonclicked && ( //&& se hoga ye ki agar left ya pehle va;e ki
                             //value true hogi, tabhi vo right ya neeche va;a display/render 
                             //krega, vrna nahi krega. 
            <div calssName ="mt-3">
                <p>The email id(/s) is/are: {emaill}</p>
            </div> 

          )}
        </div>

        <div className="container my-5 mx-5"
        style={{
            backgroundColor : props.modeprop === 'dark' ? '#25272A' : 'white',
            color: props.modeprop === 'dark' ? 'white' : 'black' 
               }}>
            <h1> Your summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            {/*text.split(" ") means text ko split krdo " " i.e. spcae se
            and that will give us an array of words. and the length of
            that array will be = number of words.*/}
            <p> {0.008 * text.split(" ").length} minutes read </p>
            <h2>Preview</h2>
            <p>{text === 'Enter text here' || text.length===0 ? 'Enter something in the box above to preview here' : text}</p>

        </div>
        
        </>
    )
}