
import "./Styles/NavBarStyles.scss";
import  {useState} from 'react';



function NavBar  ()  {
const toggleBtnClass="";
const path = window.location.pathname;
const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
const imgClassNames=pathname+"img";
let isExpanded = false;
const[isNavExpanded, SetIsNavExpanded]= useState("main-navBod");
const[isNavExpandedMNI, SetIsNavExpandedMNI]= useState("main-navItem");
const[isNavExpandedMNIS, SetIsNavExpandedMNIS]= useState("main-navItems");

function ToggleHamburger(){

isExpanded =!isExpanded;
if(isExpanded==true)
{
  SetIsNavExpanded("mobile-nav ");
  SetIsNavExpandedMNI("mobile-navItem");
  isNavExpandedMNIS("mobile-navItems");
}
else if(isExpanded==false)
{
  SetIsNavExpanded("main-navBod");
}
}

function ToggleHamburgerOff(){
isExpanded =false;
  SetIsNavExpanded("main-navBod");
  SetIsNavExpandedMNI("main-navItem");
  isNavExpandedMNIS("main-navItems");
}
  return (
    <header className="main-header">
  <div><div className={imgClassNames} />
  <button id="toggle-button" className="toggle-button" onClick ={ ToggleHamburger}> <span className="toggle-buttonBar "/> <span className="toggle-buttonBar "/><span className="toggle-buttonBar "/><a href="/"></a> </ button>
  </div>
  <nav className={isNavExpanded}>
      <ul className={isNavExpandedMNIS} onClick ={ ToggleHamburgerOff}>
      <li className={isNavExpandedMNI}>
          <a href="/">Home</a>
      </li>
          <li className={isNavExpandedMNI}>
              <a href="Services">Services</a>
          </li>
          <li className={isNavExpandedMNI}>
              <a href="Upholstering">Upholstering</a>
          </li>
          <li className={isNavExpandedMNI}>
              <a href="Gallery">Gallery</a>
          </li>
          <li className={isNavExpandedMNI}>
              <a href="Contact">Contact</a>
          </li>
      </ul>
  </nav>
    </ header>
  );
}

export default NavBar;