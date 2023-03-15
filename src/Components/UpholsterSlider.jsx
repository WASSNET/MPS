import { useState } from "react";
import { SlideData } from "./UpholsterSlideData";
import "./Styles/HomePgSliderStyle.scss";

const UpholsterPgSlide =(slides)=>
{
    const [currentIndex, setCurrentIndex] = useState(0);


    setTimeout( ()=>{
        currentIndex === SlideData.length-1 ? setCurrentIndex(0):setCurrentIndex(currentIndex+1);
},5000);
             
    return(
        <div className="slider-container">

        <div id="slide" className={SlideData[currentIndex].image} >
     
        </div>

        
</div>
);
}

export default UpholsterPgSlide;