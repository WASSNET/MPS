import "./Styles/HomePage.scss";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";

import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";

import HomePgSlide from "./HomePg-Slide";

export const Home=()=>{

    return(  <div className="homePg homePg-Container">
    <div className="homePg homePg-Header">
    
    </div>
    <div className="homePg homePg-ImgSlide">
       <HomePgSlide />
    </div>

    
    <img src={icon1} alt="ICON image" style={{height:"150px", width:"150px"}} />

    <h3>Here at MPS we offer a wide range of services</h3>
    <ul className="homePg homePg-whatWeDo">

    <img src={icon6} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li >
       Refurbishing commercial and industrial grade construction and mining equipment vehicles, and trailers.
    </li>

    <img src={icon4} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li>
       Restorations to cars, trailers, campers, tracktors and lots more!
    </li>

    <img src={icon2} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li>
       Sand Blasting
    </li>

    <img src={icon3} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li>
       Painting
    </li>

    <img src={icon5} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li>
      Check out our <a>Services</a> page for more info. OR <a>CONTACT US</a>!!!
    </li>
    
     </ul>
    

    </div>)
  
}