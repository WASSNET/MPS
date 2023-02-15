
import "./Styles/ContactStyles.scss";
const Contact =() =>{
return(
<div className="ContactContainer">

<div className="contactHeader">
<h1>Contact</h1>
</div>

<div className="contactInfo">
<h3>CALL</h3>
<p>Quinton: (065) 887-7741</p>
<p>Riaan: (084) 404-6367</p>
<p>Ryan: (062) 244-8080</p>
<br></br>
<p>UPHOLSTERY</p>
<p>Charlotte: (084) 588-2137</p>
<br></br>
<h3>Email</h3>
<p>Quinton: Admin@MPSZA.co.za</p>
<p>Riaan: Sales@MPSZA.co.za</p>
<p>Ryan: Technical@MPSZA.co.za</p>
<br></br>
<p>UPHOLSTERY</p>
<p>Charlotte: Charlotte@MPSZA.co.za</p>
</div>

<div className="contactAddress">

</div>
<div className="contactHeaders">
<h3>Or Visit us</h3>
<h4>83 Phlox Road, Welgedacht SH, Springs</h4>

</div>


<div className="directionMap">
<div className="mapColumn">
<iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3673737614827!2d28.496261315574845!3d-26.1847250695421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95301cce824b81%3A0x9a55f6607de9e5d9!2s83%20Phlox%20Rd%2C%20Welgedacht%20SH%2C%20Springs%2C%201559!5e0!3m2!1sen!2sza!4v1670916561364!5m2!1sen!2sza"

 style={{border:0}}
 allowfullscreen="" 
 loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">

  </iframe>
</div>
</div>


</div>
)

}
export default Contact;