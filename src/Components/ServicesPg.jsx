
export const ServicesPage = () =>{

    return(
        <div className="servicesPg-container">
        <div className=" servicesPg-Header">
        <h1>Services</h1>
        </div>

<h3>At MPS we offer a wide range of services</h3>
    <ul className="homePg homePg-whatWeDo">

    <img src={icon6} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li >
       Refurbishing commercial and industrial grade construction and mining equipment vehicles, and trailers.
    </li>

    <img  src={icon4} alt="ICON image" style={{height:"100px", width:"100px"}} />
    <li>
       Restoration, modification and re-purposing of cars, trailers, campers, tracktors and lots more!
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
        </div>
    )
}