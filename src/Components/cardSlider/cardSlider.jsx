// import React, { useState } from 'react'
// import Carousel from 'react-multi-carousel';
// import "react-multi-carousel/lib/styles.css";
// import "./cardSlider.css"
// // import audi from '../../assets/audi.jpg'
//  import CardSliderTemp from "./cardSliderTemp" 
//  import CardSliderData from "./cardSliderData"
// //  import { useState } from 'react';



// const CardSlider = () => {

//   var target1 = CardSliderData[0]
//   var target2 = CardSliderData[1]
//   var target3 = CardSliderData[2]
//   const [featuredCar , setfeaturedCar] = useState([])

//     const responsive = {
//       superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 2000 },
//         items: 5
//       },
//       desktop: {
//         breakpoint: { max: 2000, min: 1024 },
//         items: 3
//       },
//       tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//       }
//       };
     
//       const handleClick1 = (e) => {
//       e.preventDefault()
//       setfeaturedCar(  target2.popular.map( (item) => 
//         <CardSliderTemp name = {item.name}
//         url  = {item.url}
//        desc =  {item.desc}  
//        pirce = {item.price}                  />
//       )
//      )

//       }

//       const handleClick2 = (e) => {
//         e.preventDefault()
        
//         setfeaturedCar ( target1.trending.map( (item) => 
//         <CardSliderTemp name = {item.name}
//         url  = {item.url}
//        desc =  {item.desc}  
//        pirce = {item.price}                  />
//       ))
//       }
    
//       const handleClick3 = (e) => {
//         e.preventDefault()
//         setfeaturedCar(  target3.upcoming.map( (item) => 
//           <CardSliderTemp name = {item.name}
//           url  = {item.url}
//          desc =  {item.desc}  
//          pirce = {item.price}                  />
//         ))
//         }

//         const product_out = target1.trending.map( (item) => 
//         <CardSliderTemp name = {item.name}
//         url  = {item.url}
//        desc =  {item.desc}  
//        pirce = {item.price}                  />
//       )


//   return (
// <div>


//     <h1 className='title--top'>Featured Cars</h1>

//     <ul className='list'>
//       <li><button className='glow'  onClick={handleClick2 }  >Trending</button></li>
//       <li><button className='glow' onClick={handleClick1} >Popular</button></li>
//       <li><button className='glow'  onClick={handleClick3} >Upcoming</button></li>
//     </ul>

//         <Carousel responsive={responsive} swipeable={true}>
//         {  featuredCar == 0 ? product_out : featuredCar }
        
//       </Carousel>
      
//       </div>
//   )
// }

// export default CardSlider


import './cardSlider.css'
import { useEffect, useRef, useState } from 'react';
import pic from "../../assets/brands/bajaj20200508192534.jpg"
import axios from "axios"
// import { set } from 'mongoose';



const VariantSlider =(props)=>{
    let [scrollcard,setscrollcard]=useState(0);
    const [cardSelected , setCardSelected] = useState([]);
    const containerRef = useRef();

    const handlescrollLeft=()=>{
         containerRef.current.scrollLeft -= 500;
    }

    const handlescrollRight=()=>{
        containerRef.current.scrollLeft += 500;
    }
    const zinf = props.zinf;
    const arr = props.url;
    var target;
    const arrayTobeMapped =  [pic, pic , pic]

    const get_selected_imgs =  async (value) => {
        
       
       await axios.post('http://localhost:8000/card-slider', { val: value  })
        .then(response => {
          console.log( response.data);

          setCardSelected(response.data)
          
          
      
          // Do something with the response if needed
        })
        .catch(error => {
          console.error('Error sending value:', error);
          // Handle error
        });
        
    }
    useEffect(() => {
      get_selected_imgs('1')
    }, []);
    
    // target = cardSelected?.find((row) => row.img === "img");
    //     console.log(target)

    console.log(cardSelected.name)
    // console.log(arr)

    return(
      
      <>
      <div  className='btn-slider'>
        <div className=' btns' onClick={()=>get_selected_imgs('1')} >trending</div>
        <div className=' btns' onClick={()=>get_selected_imgs('2')}>popular</div>
        <div className=' btns' onClick={()=>get_selected_imgs('3')}>electric</div>
        <div className=' btns' onClick={()=>get_selected_imgs('4')}>upcoming</div>
      </div>
       <div  className='variant-slider-button'> <ul  >

</ul> <div className="variant-card-slider-conatiner show">

          <div className="variant-main-slider-contianer">
              <button className="variant-slider-icon variant-left-icon" onClick={(e)=>handlescrollLeft(e)}> left</button>
              <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>  
              {
                                   cardSelected.img?.map((item,index)=>(
                      // return(
                        
                        <div className="variant-slider-card">
                            <img className='variant-slider-card-image' src={cardSelected.img[index]} alt='333333333WSSS'  />
                        {/* <div className="variant-slider-card-image" style={{backgroundImage:}}> </div> */}
                        <p className="variant-slider-card-title"> {cardSelected.names[index]} </p>
                        <p className="variant-slider-card-description"> {cardSelected.price[index]} </p>
                    </div>
                 ))
                      // )
              }
              </div>
              <button className="variant-slider-icon variant-right-icon" onClick={(e)=>handlescrollRight(e)}> right </button>
          </div>
      </div> </div> 
      </>
    )
}
 

export default VariantSlider

