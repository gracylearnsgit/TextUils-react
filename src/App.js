import React , {useState} from 'react' ;
import'./App.css';
import About from './components/About.js';
import Navbar from './components/Navbar';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [heading, setHeading] = useState("Enter Text Here");
  const [mode,setMode] = useState('light') ;
  const [switchText, setSwitchText] = useState("Enable dark mode");
  const [modee,setModee] = useState({
    backgroundColor : 'white',
    color: 'black',
    border : '2px, solid, black'
  });
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'dark' ){
      setMode('light');
      setSwitchText("Enable dark mode");
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        setHeading("Enter text asap") ;
      }, 2000);
      setInterval(() => {
        setHeading("Look here here") ;
      }, 1500);
    }
    else{
      setSwitchText("Enable light mode");
      setMode('dark');
      document.body.style.backgroundColor = '#343a40' ;
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }

    if(modee.color === 'white'){
      setModee({
        backgroundColor : 'white',
        color: 'black',
        border : '2px, solid, black'
      });
    }
    else {
      setModee({
        backgroundColor : 'black',
        color: 'white',
        border : '2px, solid, white'
      });
    }
  }

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    }) ;
    setTimeout (() =>{
      setAlert(null);
    }, 1500 );
  };

  return (
    <>
      {/*<Router> */}
        <Navbar title="StudifySuccess"  aboutText="About Us" 
          modeprop={mode} toggle={toggleMode} propable={switchText} /> 
        <div className ="container my-3"></div> 
        <Alert propalert={alert}/>
        
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About propmodee={modee}/>}/>*/}
          {<Textform modeprop={mode} propshowAlert={showAlert} heading={heading}/>}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
