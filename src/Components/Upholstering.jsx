
import "./Styles/Upholstering.scss";
import UpholsterPgSlide from "./UpholsterSlider";
const Upholstering = () =>{
    return(
        <div className="upholsteringContainer">
        <div className="upholsteringHeader">

        <h1>CB UPHOLSTERING & Trimming</h1>
        </div>
        <div className="upholsteringGallery">
  <UpholsterPgSlide/>
</div>
        <div className="upholsteringIntro">
        <p>We upholster every kind of vehicle, seat, item and fabric in need of upholstering, replacement or restoration</p>
        <br></br>
        <p>For Quotes or Enquires please contact Charlotte</p>
        <br></br>
        <h4>084-588-2137</h4>
        <h4>Charlotte@MikeFourieTruckplant.co.za </h4>
</div>
<div className="upholstering-grids">


</div>

        </div>
    )
}

export default Upholstering;