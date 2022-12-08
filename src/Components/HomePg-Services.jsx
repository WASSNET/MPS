 
 import icon1 from "./images/icon1.png";
 import icon2 from "./images/icon2.png";
 
 import icon3 from "./images/icon3.png";
 import icon4 from "./images/icon4.png";
 
 import icon5 from "./images/icon5.png";
 import icon6 from "./images/icon6.png";

 import { content } from "./Contents/Contents";

 import "./Styles/HomePgServicesStyle.scss";
 
 export const HomePgServices = () =>{

    return(
        <div className="homeServicesPg">
        <img className="homePg-icon1" src={icon1} alt="ICON image" />

<ul className="homePg homePg-whatWeDo">

<h3>Here at MPS we offer a wide range of skills and services</h3>

<hr></hr>

<img className="homePg-icon" src={icon6} alt="ICON image" style={{height:"100px", width:"100px"}} />


<li >
{content.homePgAboutTxt}
</li>

<img className="homePg-icon" src={icon4} alt="ICON image" style={{height:"100px", width:"100px"}} />
<li>
{content.homePgServicesTxt}
</li>

<img className="homePg-icon" src={icon2} alt="ICON image" style={{height:"100px", width:"100px"}} />
<li>

{content.homeCbUpholstery}
</li>
<br></br>
<h3 className="servicesLink"><a href="services">Have a look at our services page to learn more</a> </h3>

</ul>
        </div>

    )

 }