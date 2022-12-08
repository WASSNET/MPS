
  import logo from "./images/footerLogo.png";
  import "./Styles/FooterStyles.scss";
  import fbIcon from "./images/fbIcon.png"
  
  import phoneIcon from "./images/phoneIcon.png"
  
  import emailIcon from "./images/emailIcon.png"
  
  import contactIcon from "./images/contactIcon.png"
  
  import mpsIcon from "./images/mpsIcon.png"

  function Footer(){

    let d = new Date();
    const dyear=d.getFullYear();
  const path = window.location.pathname;
  const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
      return  < footer >
      <div className="footerBod">

      <div className="footerHeading-container">
      <h4 className="footerHeading"><a href="/"><img src={logo}></img></a></h4>
      </div>

       <div className="footerBucketOfBolts"> 

       
       </div>

       <div className="footerContent">

       <div className="footerContentItem"> <img src={contactIcon} /><a href="contact">Contact Us</a></div>
       <div className="footerContentItem"> <img src={phoneIcon} /><a href="contact"> Call:xxx-xxx-xxxx</a></div>
       <div className="footerContentItem"> <img src={emailIcon} /><a href="contact">Email:Admin@MPSZA.co.za</a></div>
       <div className="MPSfooter"> <a><img src={fbIcon} /></a><h5>Mikes Panel Shop {dyear} &#169;</h5></div>

       <p className="poweredBy"><a>Website Powered By WASSNET</a></p>
       </div>
   
      </div>
      <script src="FooterColorPit.js"></script>
      </footer>
  
  }
  
  export default Footer;