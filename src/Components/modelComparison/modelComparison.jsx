// import React, { useState } from 'react'
// import {useNavigate} from "react-router-dom"
// import SurpriseCompare from '../SurpriseCompare/surpriseCompare'
// import CenteredLayout from '../Body/CenteredLayout'
// import "./modelComparison.css"
//  import gt from "../../assets/gt.jpg"
//  import ford from "../../assets/ford.png"
//  import nissan from "../../assets/nissan.jpg"
//  import jeep from "../../assets/jeep.png"
//  import ww from "../../assets/ww.jpg"
//  import audi from "../../assets/audi.jpg"
// const ModelComparison = (props) => {
  
//         const [comparePopUP , SetcomparePopUP ] = useState(false)
//         const [surprisebtn , setSurprisebtn  ] = useState(false)
//         const [surpriseCompare , setSurpriseCompare] = useState(false)
        
//         const handelCompPopUp = () =>{
//           SetcomparePopUP(!comparePopUP)
//         }
        
//         // const enableSurprise =(e) =>{
//         //   // e.preventDefault()
//         //   setSurpriseCompare(e)
//         // }
//         const handleChange = ()=>{
//              setSurprisebtn(!surprisebtn)

//              surpriseCompare &&  setSurpriseCompare(!surpriseCompare)  
             
//         }
//         const handleChangeSurpriseCompare = () =>{
//           setSurpriseCompare(!surpriseCompare)
//         }


//     const nav = useNavigate()
//     const handleClick = (e) => {
//         nav("/")
//     }
//   return (
// <div>
//       < CenteredLayout>
//     <div className='whole'>
//     <div className='left' >
       
//         <h2>Audi A4</h2>
//         <p>Audi A4 price for the base model starts at Rs. 45.34 Lakh and the top model price goes upto Rs. 53.50 Lakh (Avg. ex-showroom). A4 price for 3 variants is listed below.</p>
//         <div className='comparison--table'>
//         <table className="my-table">
//         <thead>
//           <tr>
//             <th>Variant</th>
//             <th>Ex-Showroom Price </th>
//             <th>Compare</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr >
//             <td><p onClick={handleClick} className='variant--name'>A4 Premium 40 TFSI</p>
//             <p className='variant--specification'>1984 cc, Petrol, Automatic (DCT), 17.4 kmpl, 202 bhp 1</p></td>
//             <td><p className='variant--price' >Rs. 45.34 Lakh</p></td>
//             <td  >
//                 <div className='compare--cars--btn'>
//                 <p>Add To Compare</p><input onChange={handleChange} type="checkbox" name="row1-radio" />
//                 </div>   
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <p className='variant--name'>A4 Premium Plus 40 TFSI</p>
//               <p className='variant--specification' >1984 cc, Petrol, Automatic (DCT), 17.4 kmpl, 202 bhp</p>
//             </td>
//             <td  ><p className='variant--price' >Rs. 49.65 Lakh</p></td>
//             <td><div className='compare--cars--btn'>
//                 <p>Add To Compare</p><input onChange={handleChange} type="checkbox" name="row1-radio" />
//                 </div> </td>
//           </tr>
//           <tr>
//             <td><p className='variant--name' >A4 Technology 40 TFSI</p>
//             <p className='variant--specification' >1984 cc, Petrol, Automatic (DCT), 17.4 kmpl, 202 bhp</p></td>
//             <td> <p className='variant--price' >Rs. 53.50 Lakh</p>  </td>
//             <td><div className='compare--cars--btn'>
//                 <p>Add To Compare</p><input onChange={handleChange} type="checkbox" name="row1-radio" />
//                 </div> </td>
//           </tr>
//           {/* <tr>
//             <td>Row 4, Cell 1</td>
//             <td>Row 4, Cell 2</td>
//             <td>Row 4, Cell 3</td>
//           </tr> */}
//         </tbody>
//       </table>        </div>
//     </div>
//     <div className='rigth'>
//       sdfsdfsfdsf
      
//     </div>
// {surprisebtn &&    <div className='surprise--compare--btn' >   <button onClick={handleChangeSurpriseCompare}  >aa</button></div>}
// </div>
//         </CenteredLayout>
        
     
//      { surpriseCompare &&       <div className='surprise--compare'>
//         <CenteredLayout>
//             <div className='flexed'>
//     <div className='sc-compare--1'>
//             <img className='sc-product--image' src={gt} alt='333333333WSSS'  />
//             <h2 className='sc-card-name'>audi a4</h2>
//             <p className=' sc-price' >121222212</p>
//             <p className='sc-card-description'> nothing much buy bmw </p>
//             <button onClick={handleChangeSurpriseCompare} className='close-btn'>x</button>
//         </div>

//         <div onClick={handelCompPopUp}  className='comparison--one'>
//        {comparePopUP && <SurpriseCompare/>}
//         </div>
//         <div class="surprise-wrapper">
//       <div class="surprise-line"></div>
//       <div class="surprise-wordwrapper">
//           <div class="surprise-word">vs</div>                                        
//       </div>
//       </div>
//         <div onClick={handelCompPopUp} className='comparison--one'>
//         selec cars
//         {comparePopUP && <SurpriseCompare/>}        </div>
//         <div class="surprise-wrapper">
//       <div class="surprise-line"></div>
//       <div class="surprise-wordwrapper">
//           <div class="surprise-word">vs</div>                                        
//       </div>
//       </div>
//         <div onClick={handelCompPopUp} className='comparison--one' >
//             select cars
//             {comparePopUP && <SurpriseCompare/>}        </div>
// <div className=' surpirse-compare-btn' >
//   <button   >Compare</button>
// </div>
//         </div>
//         </CenteredLayout>


//         </div>
//  }
//         </div>
    

    

//   )
// }

// export default ModelComparison