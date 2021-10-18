import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Header = () => {
const [ showLinks, setShowLinks ] = useState(false)

    const goTop=()=>{
        animateScroll.scrollToTop()
        setShowLinks(!showLinks)
    }
  return (
    <header className="header">
      <div className="nav">
        <div className="left">
            <Link onClick={ goTop } className="logo">
                <img src={Logo}  alt="stetis logo" className="logo--img" />
            </Link>
        </div>
        <div className="right">
        <ul className={`menu ${showLinks ? "show" : ""}`} onClick={()=> setShowLinks(!showLinks)}>
          <li >
            <Link onClick={ goTop } className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={()=> setShowLinks(!showLinks)} smooth={true} duration={500} spy={true} exact="true" offset={-50} className="link">
              About us
            </Link>
          </li>
          <li>
            <Link to="solutions" onClick={()=> setShowLinks(!showLinks)} className="link"  smooth={true} duration={500} spy={true} exact="true" offset={-50} >
              Solutions
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} onClick={()=> setShowLinks(!showLinks)} duration={500} spy={true} exact="true" offset={-50} className="link">
              Contact us
            </Link>
          </li>

        </ul>

        <button className="btn" onClick={()=> setShowLinks(!showLinks)}>
           { showLinks ? <span>&times;</span>:<span>&#9776;</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

