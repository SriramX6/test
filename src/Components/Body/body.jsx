import React, { useState } from 'react'
import {useNavigate } from "react-router-dom"
import honda from "../../assets/brands/honda20200511152343.jpg"
import bajaj from "../../assets/brands/bajaj20200508192534.jpg"
import bmw from "../../assets/brands/bmw20200508192553.jpg"
import banner from "../../assets/banner/Designer.png"
import hero from "../../assets/brands/hero20200508192826.jpg"
import kawasaki from "../../assets/brands/kawasaki1656405887432.jpg"
import re from "../../assets/brands/royal-enfield20200508193112.jpg"
// import Footer from "../Carfooter/footer"
import CardSlider from "../cardSlider/cardSlider"
import CenteredLayout from "./CenteredLayout"
import Compare from '../compareSlider/compare'
import { useMyContext } from '../../context/contextApi'


// import Imageslider from "react-simple-image-slider"
import "./body.css"

// import CenteredLayout from './CenteredLayout'






const Body = () => {



  const nav  =  useNavigate();
  const handleClick = (e)=> {
    e.preventDefault()
    
 nav(`/${ e.target.name}`)
}

  return (

    <div className='body'>
      
        <div className='banner'>
        <img src={banner} />
       


        </div>
        <CardSlider />
        <CenteredLayout>

        

        <div  className='disp--allBrands'>
          <h1>All Brands</h1>
          <img src={honda} name = "honda" id='honda'alt='2222' onClick={handleClick} />
          <img src={bajaj}  name = "bajaj" id='bajaj' onClick={handleClick} />
          <img src={hero}  name = "hero" id='hero' onClick={handleClick} />
          <img src={bmw}  name = "bmw" id='bmw' onClick={handleClick} />
          <img src={kawasaki}  name = "kawasaki" id='kawasaki' onClick={handleClick} />
          <img src={re}  name = "re" id='re' onClick={handleClick} />


        </div>

       
      
     


      {/* <Compare /> */}
      
       
   
        
      </CenteredLayout>
    </div>
  )
}

export default Body;