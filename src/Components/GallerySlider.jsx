import { useState } from "react";
import { GallerySlideData } from "./SlideData";
import "./Styles/HomePgSliderStyle.scss";

const GallerySlider =(slides)=>
{
    const [currentIndex, setCurrentIndex] = useState(0);


    setTimeout( ()=>{
        currentIndex === GallerySlideData .length-1 ? setCurrentIndex(0):setCurrentIndex(currentIndex+1);
},5000);
             
    return(
        <div className="slider-container">

        <div id="slide" className={GallerySlideData [currentIndex].image} >
     
        </div>

        
</div>
);
}

export default GallerySlider;