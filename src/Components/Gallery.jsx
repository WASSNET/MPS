import BeforeAfterSlider from "react-before-after-slider";
import ReactCompareImage from "react-compare-image";
import BtruckAfter from "./images/BtruckAfter.jpg"
import BtruckBefore from "./images/BtruckBefore.jpg"

import TruckAfter from "./images/TruckAfter.jpg"
import TruckBefore from "./images/TruckBefore.jpg"

import CatAfter from "./images/CatAfter.jpg"
import CatBefore from "./images/CatBefore.jpg"

import CAfter from "./images/A1.jpg"
import CBefore from "./images/Cat1Before.jpg"

import GallerySlider from "./GallerySlider";

import "./Styles/GalleryStyle.scss";

const Gallery = () =>{

    
        return (
          <div className="mainWrapper">
          <div className="GalleryHeader">

          </div>
          <div className="GalleryHeaderIntro">
          <h1>Gallery</h1>
          <h1>&</h1>
          <h2>Testamonials</h2>
</div>


          <GallerySlider/>
           
      
            <div className="contentWrapper">
              <ReactCompareImage className="imger" leftImage={BtruckBefore} rightImage={BtruckAfter} />
              <br></br>
              <ReactCompareImage className="imger" leftImage={TruckBefore} rightImage={TruckAfter} />
              <br></br>
              <ReactCompareImage className="imger" leftImage={CatBefore} rightImage={CatAfter} />
              <br></br>
              <ReactCompareImage className="imger" leftImage={CBefore} rightImage={CAfter} />
              <br></br>
            </div>
          </div>
        );
      }

      export default Gallery;