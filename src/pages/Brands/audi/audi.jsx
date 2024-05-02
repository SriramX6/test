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
// import { useQuery } from 'react-query';
// import axios from "axios"
// const Audi = () => {

// const [details , setDetails]  = useState()


// // const { data, error, isLoading } = useQuery(["data"] ,async ()=>
// //   await axios.get(`http://localhost:8080//audi`).then((res)=>{
// //     return res.data;
// //   })
// // );

// useEffect( ()=>{
//   const fetchAllDetails = async ()=>{
//   try{
// const res = await  axios.get("http://localhost:8080//audi")
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

//   return (

//     <div style={{marginTop:"9%"}}>
//     <CenteredLayout >

//     {details ?.map( (detail) =>( 
//     <ModelDisplayPage
 

//     img = {detail.img}
   
//       // key = {detail.id}
//       uid = {detail.uid}
//       // variant1 = {detail.myTextOptions["Premium 40 TFSI"]}
//       model = {detail.model_name}
//       safety = {detail.safety}
//       bhp ={detail.bhp}
//       kmpl ={detail.kmpl}

//       price = {detail.price}
    
  
    
    
//     />
//     ))}



//     </CenteredLayout>
//     </div>
//   )
// }

// export default Audi