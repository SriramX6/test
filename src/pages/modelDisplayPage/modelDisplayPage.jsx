// import React, { useState } from 'react'
// import latest from "../../assets/latest_audi.jpg"
// import "./modelDisplayPage.css"
// import {useNavigate} from "react-router-dom"
// // import A4 from "../audi/AudiA4"
// import { useMyContext } from '../../context/contextApi'
// import CenteredLayout from '../../Components/Body/CenteredLayout'
// import { useLocation } from 'react-router-dom';

// const ModelDisplayPage = (props) => {

//   const {  updateUrl , updateVal}   = useMyContext();
  
//   const location = useLocation();
//   const { pathname } = location;

//   const nav = useNavigate()
//   const { value, setValue } = useMyContext();
  
//   const handleClick = ()=>{
//     updateVal(props.uid)
//     updateUrl(pathname)
//     nav( `/model`)
//   }
// console.log(props.uid)

 
  
//   return (
    
//     <div   >
//          <CenteredLayout>
//     <div className='Any--card' >

//       <img  className='Any--img' onClick={handleClick} src={props.img} />
//       <div  className='car--details' >
//         <h3  className='Any--model' onClick={handleClick}>{props.model} &gt;</h3>
//         <div className='features-flex'>
//         <div className='Any--features'>{props.safety}</div>
//         {props.kmpl && props.safety && <div className='vertical-line' ></div>}
//         <div className='Any--features'>{props.kmpl}</div>
//         {props.bhp && <div className='vertical-line' ></div>}
//         <div className='Any--features'>{props.bhp}</div>
//         </div>
//         <span className='Any--price'>{props.price}</span>
//         <div className=' Ex-Showroom '>Avg. Ex-Showroom price</div>
//         {/* <br></br> */}
//       </div>
//     </div>
//     </CenteredLayout> 
//     </div>
//   )
// }

// export default ModelDisplayPage