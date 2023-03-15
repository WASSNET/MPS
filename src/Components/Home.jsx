import "./Styles/HomePage.scss";

import HomePgSlide from "./HomePg-Slide";

import { HomePgServices } from "./HomePg-Services";

import { SidePanelPg } from "./SidePanel";

const Home=()=>{

    return(  <div className="homePg homePg-Container">



    <div className="homePg homePg-Header">

    </div>
    

    <div className="homePg homePg-ImgSlide">
       <HomePgSlide />
    </div>

    <SidePanelPg />


      <HomePgServices/>
    </div>)
  
}
export default Home;