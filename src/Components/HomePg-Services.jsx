 
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

<h3>We offer a wide range of skills and services</h3>

<hr></hr>




<li className="mainHomeBlock">


<p className="mainHomeTxt">{content.homePgAboutTxt}</p>

</li>


<li className="skillsHomeBlock paintHomeBlock">
<h6 className="paintHomeTxt"><h4>We Specialize in:</h4><br></br>
Truck, Plant, Construction and Agricultural Equipment.<br></br>
Repainting, Sand Blasting, Welding, Refurbishment<br></br>
Axles Engines, Gearboxes, Pneumatics, Suspension</h6>


</li>


<li className="upholsteryHomeBlock">

<h6 className="upholsteryHomeTxt"><h4>We Specialize in:</h4><br></br>
Trimming of seats, steering wheels, floor mats.<br></br> 
For more information please see our services page</h6>
</li>
<br></br>
<h3 className="servicesLink"><a href="services">Have a look at our services page to learn more</a> </h3>

</ul>
        </div>

    )

 }