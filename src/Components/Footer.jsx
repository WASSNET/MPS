
  import logo from "./images/logo.png";
  import "./Styles/FooterStyles.scss";
  import fbIcon from "./images/fbIcon.png"
  import googIcon from "./images/GoogleIcon.png"
  import phoneIcon from "./images/phoneIcon.png"
  
  import emailIcon from "./images/emailIcon.png"
  
  import contactIcon from "./images/contactIcon.png"
  


  function Footer(){

    let d = new Date();
    const dyear=d.getFullYear();
  const path = window.location.pathname;
  const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
      return  < footer >
      <div className="footerBod">

      <div className="footerHeading-container">
      <img src={logo}></img>
      </div>

       <div className="footerBucketOfBolts"> 

       
       </div>

       <div className="footerContent">
<br></br>
       <div className="footerContentItem"> <img src={contactIcon} /><a href="contact">Contact Us</a></div>
       <div className="footerContentItem"> <img src={phoneIcon} /><a href="contact"> Call:065 887-7741</a></div>
       <div className="footerContentItem"> <img src={emailIcon} /><a href="contact">Email:Quinton@MikeFourieTruckplant.co.za</a></div>

       <div className="MPSfooter">
        <a href="https://www.facebook.com/profile.php?id=100083729400680"><img src={fbIcon} /></a>
        <a href="https://www.google.com/search?q=mikes%20panel%20shop&rlz=1C1ONGR_enZA1024ZA1024&ei=iZ3sY_HgLdDugAbO2rrABQ&oq=mikes+panel+sho&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIABCABDIJCAAQFhAeEPEEOgQIABBDOgYIABAKEEM6CwgAEIAEELEDEIMBOgsILhCDARCxAxCABDoLCC4QgAQQsQMQgwE6CAgAEIAEELEDOggIABCxAxCDAToKCAAQsQMQgwEQQzoQCC4QsQMQgwEQxwEQ0QMQQzoHCC4QsQMQQzoECC4QQzoFCC4QgAQ6BwguEIAEEAo6DQguEIAEELEDEIMBEAo6CggAEIAEELEDEAo6DQgAEIAEELEDEIMBEAo6EwgAEIAEELEDEIMBELEDEIMBEAo6CAguEIAEELEDOg0ILhCvARDHARCABBAKOgcIABCABBAKOgsILhCABBDHARCvAToNCC4QgAQQxwEQrwEQCjoLCC4QrwEQxwEQgAQ6EAguEK8BEMcBENQCEIAEEAo6BggAEBYQHjoFCAAQhgNKBAhBGABKBAhGGABQAFj0HWC1J2gBcAF4AIABsQKIAZQfkgEGMi0xNS4xmAEAoAEBwAEB&sclient=gws-wiz-serp&tbs=lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=12451944635592889478&lqi=ChBtaWtlcyBwYW5lbCBzaG9wSIeVtIKHtoCACFoeEAAQARACGAAYARgCIhBtaWtlcyBwYW5lbCBzaG9wkgEQYXV0b19yZXBhaXJfc2hvcA&ved=2ahUKEwiN0ZO7k5f9AhU1QUEAHRDeD6wQvS56BAgmEAE&sa=X&rlst=f#rlfi=hd:;si:12451944635592889478,l,ChBtaWtlcyBwYW5lbCBzaG9wSIeVtIKHtoCACFoeEAAQARACGAAYARgCIhBtaWtlcyBwYW5lbCBzaG9wkgEQYXV0b19yZXBhaXJfc2hvcA;mv:[[-26.152410399999997,28.6823898],[https://www.google.com/localservices/profile?g2lbs=ALIxsqqUethKMy8q6l_SsmN3lZJW6UwNMcrRZU3ENooRY67D9utE7paSi21LMICAbXtKyKUy5BGYkD2M6uxrqAxatuk00KgQDttCk269P-KxUa0cMijByRE%3D&hl=en-ZA&gl=za&ssta=1&scp=EkcSEgkJ1qh9CQuVHhGRpvFzpomD1yIZV2F0ZXJ2YWwgMjExLUlxLCBSYW5kYnVyZyoUDYArZvAVihmrEB1nvWnwJYlosRAwARoQbWlrZXMgcGFuZWwgc2hvcCIQbWlrZXMgcGFuZWwgc2hvcA%3D%3D&spp=Cg0vZy8xMXExczR2Mm43OkxXaDRRQUJBQkVBSVlBQmdCR0FJaUVHMXBhMlZ6SUhCaGJtVnNJSE5vYjNDU0FSQmhkWFJ2WDNKbGNHRnBjbDl6YUc5d21nRUFxZ0VB&src=2&q=Mike%27s+Panel+Shop+Springs&origin=https://www.google.com&sa=X&ved=2ahUKEwit29vgk5f9AhUYi1wKHVrhAy4QkbkFegQIAxAD-26.1865593,28.4880383]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:14"> <img src={googIcon} /></a>
       </div>

       <div className="MPSfooter">
  
  <h5>MikeFourieTruckplant {dyear} &#169;</h5>
  </div> 

       </div>
   
      </div>
      <script src="FooterColorPit.js"></script>
      </footer>
  
  }
  
  export default Footer;