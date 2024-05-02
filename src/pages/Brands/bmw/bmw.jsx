// import React from 'react'
// // import latest from "../../assets/latest_audi.jpg"
// // import "./audi.css"
// import a6 from "../../../assets/a6.webp"
// import q3 from "../../../assets/q3.webp"
// import gt from "../../../assets/etrongt.webp"
// import q8et from "../../../assets/q8et.webp"
// import {useState } from "react"
// import  {useEffect} from "react"
// import ModelDisplayPage from '../../modelDisplayPage/modelDisplayPage'
// import CenteredLayout from '../../../Components/Body/CenteredLayout'
// import axios from "axios"



// const Bmw = () => {
   
   
// const [details , setDetails]  = useState()

// const [img , setImg]  = useState("")

// const createPost  = async (newimg)=>{


//   try{
// await axios.post("http://localhost:8080/img" , newimg)
//   }
//   catch(err){
//     console.log(err)
//   }

  
// }

// useEffect( ()=>{
//   const fetchAllDetails = async ()=>{
//   try{
// const res = await  axios.get("http://localhost:8080//bmw")
// // console.log(res)
// setDetails(res.data)
// // console.log(details)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// fetchAllDetails()
// }, [])

// const creat = (e)=>{
//   e.preventDefault()
  
// console.log(img)
//   createPost(img)
// }
// const handleUPload = async (e) =>{
//   const file = e.target.files[0];
//   // console.log(file)
//   const base64 = await convertToBase64(file);
//   // console.log(base64)
// setImg(`${base64}`)

// }

//   return (

//     <div>
//         <div>
//           <input type='file' id='file' label = "image" name='myfile' accept='.jpeg , .png , .jpg , .webp' onChange={(e)=>handleUPload(e)} /> 
//           <button onClick={creat}>sas</button>
//         </div>
//     <CenteredLayout >

//     {details ?.map( (detail) =>( 
//     <ModelDisplayPage
 

//     // img = {detail.img}
   
//       // key = {detail.id}
//       uid = {detail.uid}
//       model = {detail.model_name}
//       safety = {detail.safety}
//       bhp ={detail.bhp}
//       kmpl ={detail.kmpl}
//       variants = {detail.variants}
//       price = {detail.price}
    
  
    
    
//     />
//     ))}




//     </CenteredLayout>
//     </div>
//   )
// }

// export default Bmw

// function convertToBase64(file){
//   return new Promise((resolve , reject) =>{
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = ()=>{
//       resolve(fileReader.result)

//     };
//     fileReader.onerror=(error)=>{
//       reject(error)
//     }
//   })
// }