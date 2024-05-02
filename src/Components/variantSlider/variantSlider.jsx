import './variantSlider.css'
import { useEffect, useRef, useState } from 'react';

const VariantSlider =(props)=>{
    let [scrollcard,setscrollcard]=useState(0);
    const containerRef = useRef();

    const handlescrollLeft=()=>{
         containerRef.current.scrollLeft -= 500;
    }

    const handlescrollRight=()=>{
        containerRef.current.scrollLeft += 500;
    }
    const zinf = props.zinf;
    const arr = props.url;
    // console.log(arr)

    return(
      <div className="variant-card-slider-conatiner show">

         <div className="variant-main-slider-contianer">
             <button className="variant-slider-icon variant-left-icon" onClick={(e)=>handlescrollLeft(e)}> left</button>
             <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>  
             {
                 arr.map((item,index)=>{
                      return(
                        <div className="variant-slider-card">
                            <img className='variant-slider-card-image' src={arr[ index]} alt='333333333WSSS'  />
                        {/* <div className="variant-slider-card-image" style={{backgroundImage:}}> </div> */}
                        <p className="variant-slider-card-title"> {zinf[index]} </p>
                        <p className="variant-slider-card-description"> aedasda </p>
                    </div>
                      )
                 })
             }
             </div>
             <button className="variant-slider-icon variant-right-icon" onClick={(e)=>handlescrollRight(e)}> right </button>
         </div>
      </div>
    )
}
 

export default VariantSlider