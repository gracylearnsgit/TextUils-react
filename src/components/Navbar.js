// react function based component template shortcut : rfc
//these functions will be imported and used in App.js
import React from 'react'
import PropTypes from 'prop-types' //Shortcut : impt
//import {Link} from 'react-router-dom'


export default function Navbar(props) {
    
  return (

    <nav className={`navbar navbar-expand-lg  navbar-${props.modeprop} bg-${props.modeprop}`} >
  { /*in Navbar.js never change props. (that is in function. once set, they r read only) 
        (u can change the state though)*/}  
  <div className="container-fluid">

    <a className="navbar-brand" href="#">{props.title}</a>  
    {/* this props. title will be mentioned where the function navbar
    would have been imported and used, i.e. in app.js 
    in some other website u can use same code, changing the prop only*/}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=
    "#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">className 6th</a></li>
            <li><a className="dropdown-item" href="#">className 7th</a></li>
            <li><a className="dropdown-item" href="#">className 8th</a></li>
            <li><a className="dropdown-item" href="#">className 9th</a></li>
            <li><a className="dropdown-item" href="#">className 10th</a></li>
            <li><a className="dropdown-item" href="#">className 11th</a></li>
            <li><a className="dropdown-item" href="#">className 12th</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NCERT Solutions
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">className 6th</a></li>
            <li><a className="dropdown-item" href="#">className 7th</a></li>
            <li><a className="dropdown-item" href="#">className 8th</a></li>
            <li><a className="dropdown-item" href="#">className 9th</a></li>
            <li><a className="dropdown-item" href="#">className 10th</a></li>
            <li><a className="dropdown-item" href="#">className 11th</a></li>
            <li><a className="dropdown-item" href="#">className 12th</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            KEYWORDS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">className 6th</a></li>
            <li><a className="dropdown-item" href="#">className 7th</a></li>
            <li><a className="dropdown-item" href="#">className 8th</a></li>
            <li><a className="dropdown-item" href="#">className 9th</a></li>
            <li><a className="dropdown-item" href="#">className 10th</a></li>
            <li><a className="dropdown-item" href="#">className 11th</a></li>
            <li><a className="dropdown-item" href="#">className 12th</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            IMP QUES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">className 6th</a></li>
            <li><a className="dropdown-item" href="#">className 7th</a></li>
            <li><a className="dropdown-item" href="#">className 8th</a></li>
            <li><a className="dropdown-item" href="#">className 9th</a></li>
            <li><a className="dropdown-item" href="#">className 10th</a></li>
            <li><a className="dropdown-item" href="#">className 11th</a></li>
            <li><a className="dropdown-item" href="#">className 12th</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ONLINE QUIZ
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">className 6th</a></li>
            <li><a className="dropdown-item" href="#">className 7th</a></li>
            <li><a className="dropdown-item" href="#">className 8th</a></li>
            <li><a className="dropdown-item" href="#">className 9th</a></li>
            <li><a className="dropdown-item" href="#">className 10th</a></li>
            <li><a className="dropdown-item" href="#">className 11th</a></li>
            <li><a className="dropdown-item" href="#">className 12th</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">lorem ipsum</a></li>
          </ul>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
        </li> */}

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className={` form-check form-switch text-${props.modeprop==='light'  ?  'dark' : 'light'} `}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
        onClick={(props.toggle)}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.propable}</label>
      </div>

    </div>
  </div>
  </nav>
  ) 
}

Navbar.propTypes = {title: PropTypes.string.isRequired,  //will give error if not defined in app.js
                    aboutText: PropTypes.string} //shortform: pts
                                     // when u put this in a {}, use kehte h ise
                                     //ek object me daalna to ab ye ek object h

//Navbar.defaultProps = {
  //  title : 'Set title here',
    //aboutText : 'about wht here' 

                                 