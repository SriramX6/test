
import ModelComparison from "../../Components/modelComparison/modelComparison";
import VariantSlider from "../../Components/variantSlider/variantSlider";
import ShowModelDetailsComponent from "../../Components/ShowModelDetailsComponent/ShowModelDetailsComponent";
import "./allModelPage.css"
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/contextApi.js";
import React from 'react'
import axios from "axios";




const AllModelPage = () => {
  
  const {url } = useMyContext();
  const {value } = useMyContext();
  const{SetModelDetails} = useMyContext();
  
  
  // console.log(url)
const [allDetails , setallDetails] = useState()
SetModelDetails(allDetails)
const[city , setCity]  = useState("")


//   const { data, error  } = useQuery(["data"] ,async ()=>
//   await axios.get(`http://localhost:8080//audi`).then((res)=>{
//     return res.data;
//   })
// );
// console.log(data)


useEffect( ()=> {
  const FetchAllDetails = async ()=>{
    try{
      
      // console.log(url)
      const res = await axios.get(`http://localhost:8080/${url}`)
      // const res2 = await axios.get("http://localhost:8080/city")
      // console.log(res)
      // setCity(res2.data)
      setallDetails(res.data)
      
      // console.log(allDetails)
    }
    catch(err){
      console.log(err)
    }
  }
  FetchAllDetails()
} , []);
            
useEffect( ()=> {
  const FetchCities = async ()=>{
    try{
      
      // console.log(url)
      const res = await axios.get(`http://localhost:8080/cities`)
      
      setCity(res.data)
      // console.log(allDetails)
    }
    catch(err){
      console.log(err)
    }
  }
  FetchCities()
} , []);

             
          const targetAllCities = "cities";
          let a = city[0];
          
          
          
          const targetRowId =value;
          console.log(value)


          // Find the row with the matching ID
          const targetRow = allDetails?.find((row) => row.uid === targetRowId);
        console.log(targetRow)
          if (!targetRow || !city ) {
            return <div className="asdf"><div class="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div></div>;
          }
          // if (isLoading) return <div>Loading...</div>;
  return (

    <>
    <div className="AllModelPage" style={{marginTop:"9%"}}>

      {/* { allDetails ?.map( (val)=> ( */}
      <ShowModelDetailsComponent
      // key = {val.id}
      variants = {targetRow.variants}
      priceRange = {targetRow.priceRange}
       cities = {a.cities}
      modelName = {targetRow.model_name}
      price = {targetRow.price} 
      starting = {targetRow.starting}
      top  = {targetRow.top}
  
      />

      {/* ))} */}


    <ModelComparison />


   
  

    </div>
    </>
  )
}

export default AllModelPage







// import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
// import as from "../../assets/a.jpg"
// import fd from "../../assets/rr.jpg"
// import sd from "../../assets/audi.jpg"
// import we from "../../assets/gt.jpg"
// import CenteredLayout from '../../Components/Body/CenteredLayout';
// import "./modelDisplayPage.css"
// import { useState } from 'react';


// function ModelDisplayPage() {

//         const [isListVisible, setListVisibility] = useState(false);
   
//             const [selectedOption, setSelectedOption] = useState('');
          
//             const options = ['Option 1', 'Option 2', 'Option 3'];
          
//             const handleOptionChange = (event) => {
//               setSelectedOption(event.target.value);
//               setListVisibility(false);


//             };
//         const handleClick = (e) => {
//         e.preventDefault()
//         setListVisibility(true);
//     }

//     const handleClick2 = (e) => {
//         e.preventDefault()
//         setListVisibility(false);
//     }
  
//     const images = [
//         { url: as },
//         { url: fd },
//         { url:sd },
//         { url: we },
//         { url: as },
//         { url: sd },
//         { url: we },
//       ];
    
//   return (
//     <div>
//         <CenteredLayout>
// <h1>Audi A4</h1>
// <div className='model--show--component'>
// <SimpleImageSlider
//         width={396}
//         height={300}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//       />
//       <div className='select--variant--button' >
//         <ul>
//      <p onClick={handleClick}> <li  >Select Variant  &#160; &#160; &#160; &#160; &#160;   &gt;
//       </li>
// <li className='selected--option'> {selectedOption}</li></p>
//       </ul>
//           </div>
//       <button >Select City  &#160; &#160; &#160; &#160; &#160;  &gt;</button>
      
// </div>
// {isListVisible && <div className='selectVariantName '>
//         <div onClick={handleClick2 } className='overlay ' >
//     <div className='modal-content'>
//         <div className='header'>
//             <h1>Select Variant</h1>
//             <button onClick={handleClick2} className='close--button'>X</button>
//         </div>
//         <div className='select--'> 
//       <p>Select an Variant:</p>
//       <form>
//         {options.map((option, index) => (
//           <div key={index}>
//             <input
//               type="radio"
//               id={`option${index}`}
//               name="options"
//               value={option}
//               checked={selectedOption === option}
//               onChange={handleOptionChange}
//             />
//             <label htmlFor={`option${index}`}>{option}</label>
//           </div>
//         ))}
//       </form>
//     </div>
//         </div>
//         </div>
//       </div>
// }
// </CenteredLayout>
//     </div>
//   )
// }

// export default ModelDisplayPage