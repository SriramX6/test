// import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
// import CenteredLayout from '../Body/CenteredLayout';
// import { useState , useEffect ,useRef  } from 'react';
// import "./ShowModelDetailsComponent.css"
// import VariantSlider from "../variantSlider/variantSlider"
// import engineIcon from "../../assets/icons/car-engine.png"
// import accIcon from "../../assets/icons/accelerate.png"
// // import { useQuery } from 'react-query';
// import axios from 'axios';

// import { useMyContext } from '../../context/contextApi';

// function ShowModelDetailsComponent(props) {

//   // const {getModelDetails} = useMyContext();
//   // console.log(getModelDetails)


//   // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
//   //                          table-scroll

//   const [activeTable, setActiveTable] = useState(1);

//   // Function to handle scroll event
//   function highlightName() {
//     var rightDiv = document.querySelector('.scroll-spec');
//     var scrollPosition = rightDiv?.scrollTop;
//     var tables = document.querySelectorAll('.scrollable-table');
//     tables.forEach(function(table, index) {
//       var tableTop = table.offsetTop;
//       var tableBottom = tableTop + table.clientHeight;
//       var nameElement = document.querySelectorAll('.sticky-spec div')[index];
//       if (scrollPosition >= tableTop && scrollPosition <= tableBottom) {
//         nameElement.classList.add('active');
//       } else {
//         nameElement.classList.remove('active');
//       }
//     });
//   }

//     // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

//   const [ modelSpecPic , setModelSpecPic] = useState()

// // vs
// const [isActive  , setActive] = useState(false)
//   let [scrollcard,setscrollcard]=useState(0);
//   const containerRef = useRef();
// // vs
//   let targetCityRTO  ;
//   const [ rtoPriceRange , SetrtoPriceRange ] = useState()

//     const [color ,  setColor ] = useState()
//   const [both , setBoth]  = useState()

//   const { value, variantIndex, updateIndex  , RTO , SetRTO ,SetvariantPrice , variantPrice} = useMyContext()

//   const [VariantSelected , SetVariantSelected] = useState();


//   const [ cityy , SetCity  ] = useState();

//   const handleColor = (e) => {
//     // setCarColor(e)
//   }
  

//   const [isCityVisible, setCityVisibility] = useState(false);

//   const [selectedOption2, setSelectedOption2] = useState('');

//   const cities = props.cities;
//   // console.log(props.cities)

//   const handleCityClick = (option) => {
//     // console.log("first")
//     setSelectedOption2(option);


//     const fetchAllCityDetails = async ()=>{
//       try{
//         // console.log(variantIndex)
//     const res = await  axios.get(`http://localhost:8080/city`)
//     // console.log(res.data)
//     SetCity(res.data)

//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//     fetchAllCityDetails()
     
//     RTOpricce()
    
     
      
//     //  console.log(targetCityRTO.RTO)
   
    
//     setCityVisibility(false);
   
//   };

//   useEffect( ()=>{
//     SettedRTO()
//   }, [cityy])
  
// useEffect(()=>{
//   variantPriceSetted()
// } , [VariantSelected])

// useEffect(()=>{
    
// } , [])

//   // console.log(cityy)
//   targetCityRTO = cityy?.find((row) => row.city === selectedOption2 );
  
//   const SettedRTO = ()=>{

//    cityy != null && SetRTO(targetCityRTO.rto)
//   }
//   const RTOpricce =()=>{
  

//   let startExS = (props.starting *20) /100;
//   let topExS = (props.top *20) /100;
//   SetrtoPriceRange(`${formatNumber(props.starting+startExS)} - ${formatNumber(props.top+topExS)} `  )
//   // console.log(rtoPrice)

// }

//     // console.log(targetCityRTO)
//   // if(  targetVariant.price != null ){
//   //   rto  = targetCityRTO.RTO *  targetVariant.price;
//   // console.log(rto)
//   // }
//   // else 
//   // let v 
 

//   function formatNumber(targetVariant) {
//     if (targetVariant >= 10000000) {
//       return (targetVariant / 10000000).toFixed(2) + ' Cr';
//     } else if (targetVariant >= 100000) {
//       return (targetVariant / 100000).toFixed(2) + ' Lakh';
//     }
//     return targetVariant.toString();
//   }

  
//   // console.log(targetCityRTO);

 

//   const handleClickCity =(e)=>{
//   setCityVisibility(e);
//   }
  
//         const [isVariantVisible, setVariantVisibility] = useState(false);

//             const [selectedOption, setSelectedOption] = useState('');
//             // console.log(props.data)
//             const variants = props.variants;

          
//             const HandleVariantChange = (event , index) => {
//               updateIndex(index)
//               // console.log(index)
              
     
//               setSelectedOption(event);

//               const fetchAllDetails = async ()=>{
//                 try{
//                   // console.log(variantIndex)
//               const res = await  axios.get(`http://localhost:8080/${index}`)
//               // console.log(res.data)
//               SetVariantSelected(res.data)
         
//                 }
//                 catch(err){
//                   console.log(err)
//                 }
//               }
//               fetchAllDetails()
              
//               setVariantVisibility(false);
              

//             };

//             const targetVariant = VariantSelected?.find((row) => row.model === value);
//             const variantPriceSetted = ()=>{
//               VariantSelected != null && SetvariantPrice(targetVariant.price)
//             }

//         const handleClickVariant = (e) => {
//         setVariantVisibility(e);
//     }
//     //  colorOptions["red"]
  
//     useEffect(()=>{
//       const fetchImg = async ()=>{
//         try{
//           const res = await axios.get(`http://localhost:8080/model_img/${value}`)
//           setColor(res.data)
//           // console.log(res.data)

//         }
//         catch(err){
//           console.log(err)
//         }
//       }
//       fetchImg()

//     } , [])
//     const targetedIMG = color?.find((opt)=>opt.default )
//     // const val = targetedIMG;
//     // console.log(targetedIMG)
//    useEffect(()=>{
//     if(variantPrice && RTO != null){
//       // console.log(variantPrice , RTO)
//     let a = (variantPrice * RTO) /100;
//     // console.log(a)
//     let b = parseInt(a) + parseInt(variantPrice);
//     // console.log(b)
//         setBoth(formatNumber(b))
//       // console.log(both)
//     }
//    } , [variantPrice , RTO ])

  
      
//    if (  !targetedIMG  ) {
//     return <div className="asdf"><div class="dot-spinner">
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
//     <div className="dot-spinner__dot"></div>
// </div></div>;
//   }
  
//   // vs
  
 

//     const handlescrollLeft=()=>{
//          containerRef.current.scrollLeft -= 500;
//     }

//     const handlescrollRight=()=>{
//         containerRef.current.scrollLeft += 500;
//     }
//     // const zinf = props.zinf;
//     // const arr = props.url;
//   // vs
 
// // const a = targetedIMG;
// // let modelSpecPic;
// const Variant_btn_click =  (e)=>{
// // console.log(`${value}_`+ e)
// let s =(`${value}`+ e);

// // console.log(s)
// // modelSpecPic = color.s;
// setModelSpecPic(targetedIMG[s])
// console.log(s)
// setActive(!isActive)
// console.log(modelSpecPic)
// }

// const arrayTobeMapped = modelSpecPic != null ? modelSpecPic : targetedIMG.zpic
    
//   return (
//     <div  >
//       <CenteredLayout>
// <h1 className='header'>{props.modelName}</h1>
// <div className='grid-container' >
// <div className='model--show--component'>
//   <div className='left'>
//   <div className='image--slider'>
//   <SimpleImageSlider
//         width={525}
//         height={300}
        
//         images={ targetedIMG.default }
//         // showBullets={true}
//         showNavs={true}
//       />
//       </div>
//       </div>
//       <div onClick={() => handleClickVariant(true)} className='middle'>
//       <div className='select--variant--button' >
//         <ul>
//           <p > 
//             <li style={{color: "rgba(128, 128, 128, 0.887)" , fontSize : "12px"}}  >Select Variant  &gt; </li>
//             <li className='selected--option'> {selectedOption ? <p> {selectedOption}</p> :  <p  >select variant</p> }</li>
//           </p>
//         </ul>
//           </div>
//           </div>
//           <div onClick={() => handleClickCity(true)} className='right'>
//       <div className='select--city--button' >
//         <ul>
//           <p   > 
//             <li style={{color: "rgba(128, 128, 128, 0.887)" , fontSize : "12px"}} >Select City   &gt;</li>
//             <li className='selected--option'>  {selectedOption2 ? <p>{selectedOption2} </p> :  <p >select city</p> }</li>
//           </p>
//         </ul>
//       </div>
//       </div>
//       <div className='price'>
        
//       <h2 className='item1'>{VariantSelected == null &&  cityy != null ?  rtoPriceRange : VariantSelected != null &&  cityy == null ? formatNumber(targetVariant.price) : both !=null ? both :  props.priceRange      }</h2>  
//     { selectedOption2 ?  <p>On Road-Price , {  selectedOption2  }</p> :<p>Avg Exshowroom price</p>}
//     <p>Avg Waiting Period : 17 Weeks</p>
//       </div>
//       <div className='color--btn'>
//   <p onClick={()=>handleColor(props.red)} ></p>
//   </div>
//   </div>
//   </div>
//   {isVariantVisible && <div className='selectVariantName '>
//         <div onClick={() => handleClickVariant(false) } className='overlay ' >
//     <div className='modal-content'>
//         <div className='header'>
//             <h1>Select variant</h1>
//             <button onClick={() => handleClickVariant(false)} className='close--button'>X</button>
//         </div>
//         <div className='select--'> 
//       <p>Select an Variant:</p>
//       <form>
//       {variants.map((option, index) => (
//           <div
//             key={index}
//             onClick={() =>HandleVariantChange(option , index)}
//             style={{ cursor: 'pointer', padding: '5px', margin: '5px', border: '1px solid #ccc' }}
//           >
//             {option}
//           </div>
//         ))}
//       </form>
//     </div>
//         </div>
//         </div>
//       </div>   
// }

// {isCityVisible && <div onClick={() => handleClickCity(false)}  className='select--city'>
//       <p>Select an option:</p>
//       <div className='overlay'>
//       <div className='modal-content'>
//       <div className='header'>
//             <h1>Select City</h1>
//             <button onClick={() => handleClickCity(false)} className='close--button'>X</button>
//         </div>
//         {cities.map((option2, index) => (
//           <div
//             key={index}
//             onClick={() => handleCityClick(option2)}
//             style={{ cursor: 'pointer', padding: '5px', margin: '5px', border: '1px solid #ccc' }}
//           >
//             {option2}
//           </div>
//         ))}
//       </div>
//       {/* <p>Selected option: {selectedOption2}</p> */}
//     </div>
//     </div>
//     }
// </CenteredLayout>

// {/* <VariantSlider/> */}

// {/* variant slider */}
// { VariantSelected != null ? <div  className='variant-slider-button'> <ul  >
//  { variants?.map((itm , ind)=>(<li><button  key={ind} onClick={()=>Variant_btn_click(ind)}>{itm}</button></li>))
//   }
// </ul> <div className="variant-card-slider-conatiner show">

//           <div className="variant-main-slider-contianer">
//               <button className="variant-slider-icon variant-left-icon" onClick={(e)=>handlescrollLeft(e)}> left</button>
//               <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>  
//               {
//                                     arrayTobeMapped?.map((item,index)=>(
//                       // return(
                        
//                         <div className="variant-slider-card">
//                             <img className='variant-slider-card-image' src={arrayTobeMapped[index]} alt='333333333WSSS'  />
//                         {/* <div className="variant-slider-card-image" style={{backgroundImage:}}> </div> */}
//                         <p className="variant-slider-card-title"> {targetedIMG.zinfo[index]} </p>
//                         <p className="variant-slider-card-description"> aedasda </p>
//                     </div>
//                       // )
//                  ))
//               }
//               </div>
//               <button className="variant-slider-icon variant-right-icon" onClick={(e)=>handlescrollRight(e)}> right </button>
//           </div>
//       </div> </div> : null}
// {/* end vs */}

// <CenteredLayout>

// <section className='sec-car-spec'>
//   <h1>
//   {props.modelName} specifications
//   </h1>
// <div className='car-specification' >
// <div className='spec-content'>
// <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M273.536 472.448h418.432v267.456H273.536z" fill="#ffffff"></path><path d="M716.032 855.68a21.824 21.824 0 0 1-21.888 21.824H223.168a21.76 21.76 0 0 1-21.76-21.824V141.568a21.76 21.76 0 0 1 21.76-21.824h470.976c12.096 0 21.888 9.792 21.888 21.824V855.68z" fill="#393732"></path><path d="M112.32 841.088h807.232v76.48H112.32z" fill="#5A7784"></path><path d="M264.896 179.008h387.584v247.68H264.896z" fill="#ffffff"></path><path d="M436.16 390.656l-20.8 36.032h83.2l-20.928-36.032zM334.784 270.784l-22.464 17.152-20.8-27.2 22.464-17.152zM608.64 244.032l22.4 17.088-20.8 27.2-22.4-17.088zM534.144 217.664l26.88 8.96-10.752 32.448-26.88-8.96zM441.216 211.968h28.352v34.24h-28.352zM395.136 249.856l-26.88 8.96-10.88-32.448 26.944-8.96z" fill="#4c545d"></path><path d="M463.744 402.816l-19.008-11.712 100.096-149.248 7.36 4.544z" fill="#000000"></path><path d="M820.416 345.984a19.328 19.328 0 0 1-14.272-6.144l-105.664-110.976a19.84 19.84 0 0 1 0.768-27.904 19.648 19.648 0 0 1 27.776 0.768l105.664 111.04a19.712 19.712 0 0 1-14.272 33.216z" fill="#383838"></path><path d="M842.176 796.032c-9.792 0-20.352-1.408-31.872-4.288-74.304-18.048-65.024-137.408-57.024-190.656h-38.592v-39.424h86.208l-4.928 23.744c-10.624 50.432-18.752 157.824 23.616 168.128 21.12 5.12 36.288 3.904 45.248-3.904 14.912-12.736 20.032-46.4 15.232-100.032-2.944-32.96-14.72-46.976-29.696-64.768-22.912-27.392-48.96-58.368-47.808-150.336l39.296 0.512c-0.96 77.376 18.304 100.224 38.656 124.48 16.256 19.392 34.624 41.28 38.656 86.592 6.144 68.928-2.944 111.296-28.736 133.504-12.608 10.944-28.8 16.448-48.256 16.448z" fill="#5A7784"></path><path d="M777.6 326.464h85.632v103.744H777.6z" fill="#383838"></path></g></svg>
// <div className='qn'>
//   fuel type
// </div>
// <div className='ans' >
//   ans
// </div>
// </div>

// <div className='spec-content'>
// <img src={engineIcon} alt='333333333WSSS'  />
// <div className='qn'>
//  engine
// </div>
// <div className='ans' >
//   ans
// </div>
// </div>



// <div className='spec-content'>
// <img src={accIcon} />
//  <div className='qn'>
//   Acceleration
// </div>
// <div className='ans' >
//   ans
// </div>
// </div>





// <div className='spec-content'>
// <svg fill="#575757" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#575757"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.999 1.129c-8.812 0-15.98 7.169-15.98 15.981 0 5.536 2.803 10.6 7.497 13.544 0.467 0.296 1.084 0.152 1.378-0.316s0.152-1.085-0.316-1.378c-1.691-1.061-3.095-2.439-4.17-4.027l1.048-0.605c0.478-0.276 0.643-0.887 0.366-1.366-0.277-0.48-0.889-0.642-1.366-0.366l-1.050 0.606c-0.763-1.579-1.228-3.306-1.353-5.107h1.113c0.552 0 1-0.448 1-1s-0.447-1-1-1h-1.108c0.132-1.834 0.618-3.572 1.393-5.143l1.005 0.58c0.157 0.091 0.329 0.134 0.499 0.134 0.346 0 0.681-0.179 0.867-0.5 0.277-0.479 0.112-1.090-0.366-1.366l-0.995-0.574c1.003-1.463 2.277-2.728 3.75-3.719l0.563 0.975c0.185 0.322 0.521 0.5 0.867 0.5 0.17 0 0.342-0.043 0.499-0.134 0.479-0.277 0.643-0.887 0.366-1.366l-0.561-0.971c1.542-0.744 3.24-1.208 5.030-1.338v1.246c0 0.553 0.447 1 1 1s1-0.447 1-1v-1.25c1.831 0.127 3.567 0.606 5.137 1.373l-0.543 0.939c-0.276 0.479-0.113 1.090 0.366 1.366 0.157 0.091 0.329 0.134 0.499 0.134 0.346 0 0.681-0.178 0.867-0.5l0.54-0.936c1.459 0.993 2.721 2.255 3.715 3.713l-0.936 0.541c-0.479 0.277-0.642 0.887-0.366 1.366 0.186 0.322 0.521 0.5 0.867 0.5 0.17 0 0.342-0.043 0.499-0.134l0.942-0.543c0.768 1.571 1.248 3.307 1.377 5.139h-1.098c-0.552 0-1 0.448-1 1s0.448 1 1 1h1.098c-0.127 1.777-0.581 3.482-1.328 5.041l-0.99-0.572c-0.477-0.276-1.091-0.111-1.366 0.366-0.276 0.479-0.113 1.090 0.366 1.366l0.993 0.573c-1.097 1.633-2.545 3.044-4.292 4.119-0.471 0.29-0.616 0.907-0.327 1.376 0.189 0.306 0.517 0.476 0.852 0.476 0.178 0 0.36-0.048 0.523-0.148 4.764-2.934 7.608-8.024 7.608-13.614 0-8.811-7.169-15.98-15.98-15.98zM23.378 13.992c0.478-0.277 0.642-0.887 0.366-1.366s-0.888-0.642-1.366-0.366l-5.432 3.136c-0.29-0.164-0.62-0.265-0.977-0.265-1.102 0-1.995 0.893-1.995 1.994 0 1.102 0.893 1.995 1.995 1.995s1.995-0.893 1.995-1.995c0-0.002-0-0.005-0-0.007z"></path> </g></svg>
// <div className='qn'>
//   top-speed
// </div>
// <div className='ans' >
//   ans
// </div>
// </div>

// <div className='spec-content'>
// {/* <svg fill="#575757" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#575757"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.999 1.129c-8.812 0-15.98 7.169-15.98 15.981 0 5.536 2.803 10.6 7.497 13.544 0.467 0.296 1.084 0.152 1.378-0.316s0.152-1.085-0.316-1.378c-1.691-1.061-3.095-2.439-4.17-4.027l1.048-0.605c0.478-0.276 0.643-0.887 0.366-1.366-0.277-0.48-0.889-0.642-1.366-0.366l-1.050 0.606c-0.763-1.579-1.228-3.306-1.353-5.107h1.113c0.552 0 1-0.448 1-1s-0.447-1-1-1h-1.108c0.132-1.834 0.618-3.572 1.393-5.143l1.005 0.58c0.157 0.091 0.329 0.134 0.499 0.134 0.346 0 0.681-0.179 0.867-0.5 0.277-0.479 0.112-1.090-0.366-1.366l-0.995-0.574c1.003-1.463 2.277-2.728 3.75-3.719l0.563 0.975c0.185 0.322 0.521 0.5 0.867 0.5 0.17 0 0.342-0.043 0.499-0.134 0.479-0.277 0.643-0.887 0.366-1.366l-0.561-0.971c1.542-0.744 3.24-1.208 5.030-1.338v1.246c0 0.553 0.447 1 1 1s1-0.447 1-1v-1.25c1.831 0.127 3.567 0.606 5.137 1.373l-0.543 0.939c-0.276 0.479-0.113 1.090 0.366 1.366 0.157 0.091 0.329 0.134 0.499 0.134 0.346 0 0.681-0.178 0.867-0.5l0.54-0.936c1.459 0.993 2.721 2.255 3.715 3.713l-0.936 0.541c-0.479 0.277-0.642 0.887-0.366 1.366 0.186 0.322 0.521 0.5 0.867 0.5 0.17 0 0.342-0.043 0.499-0.134l0.942-0.543c0.768 1.571 1.248 3.307 1.377 5.139h-1.098c-0.552 0-1 0.448-1 1s0.448 1 1 1h1.098c-0.127 1.777-0.581 3.482-1.328 5.041l-0.99-0.572c-0.477-0.276-1.091-0.111-1.366 0.366-0.276 0.479-0.113 1.090 0.366 1.366l0.993 0.573c-1.097 1.633-2.545 3.044-4.292 4.119-0.471 0.29-0.616 0.907-0.327 1.376 0.189 0.306 0.517 0.476 0.852 0.476 0.178 0 0.36-0.048 0.523-0.148 4.764-2.934 7.608-8.024 7.608-13.614 0-8.811-7.169-15.98-15.98-15.98zM23.378 13.992c0.478-0.277 0.642-0.887 0.366-1.366s-0.888-0.642-1.366-0.366l-5.432 3.136c-0.29-0.164-0.62-0.265-0.977-0.265-1.102 0-1.995 0.893-1.995 1.994 0 1.102 0.893 1.995 1.995 1.995s1.995-0.893 1.995-1.995c0-0.002-0-0.005-0-0.007z"></path> </g></svg> */}

// <div className='ans align-center'  >
//   View more
// </div>
// </div>



// </div>

// </section>

// </CenteredLayout>

// <CenteredLayout>
// <section className='sec-more-spec'>
//   <div className='sticky-spec'>
//     <div className='sticky-content'>
//       1
//     </div>

//     <div  className='sticky-content'>
//       2
//     </div>
    
//     <div  className='sticky-content'>
//       3
//     </div>

//     <div  className='sticky-content'>
//       4
//     </div>

//     <div  className='sticky-content'>
//       4
//     </div>
//     {/* <ul>
//       <li  className='sticky-content' >
//       1
//       </li>

//       <li className='sticky-content'>
//         2
//       </li>

//       <li className='sticky-content'>
//         3
//       </li>

//       <li className='sticky-content'>
//         4
//       </li>

//       <li className='sticky-content'>
//         5
//       </li>

//     </ul> */}
//   </div>

//   <div  className='scroll-spec' onScroll={highlightName()} >  
// <h3>sdf</h3>
// <table className='scrollable-table'>
// <tbody>
//   <tr id='tr' >
//     <td className='specs-table-data'>
//       <span>asd</span>
//     </td>
//     <td className='specs-table-data'>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

  
// </tbody>

// </table>

// {/* End of 1st table */}

// <h3>sdf</h3>
// <table className='scrollable-table'>
// <tbody>
//   <tr id='tr' >
//     <td className='specs-table-data'>
//       <span>asd</span>
//     </td>
//     <td className='specs-table-data'>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

  
// </tbody>

// </table>
// {/* End of sec table */}


// <h3>sdf</h3>
// <table className='scrollable-table'>
// <tbody>
//   <tr id='tr' >
//     <td className='specs-table-data'>
//       <span>asd</span>
//     </td>
//     <td className='specs-table-data'>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

  
// </tbody>

// </table>
// {/* end of third table */}

// <h3>sdf</h3>
// <table className='scrollable-table'>
// <tbody>
//   <tr id='tr' >
//     <td className='specs-table-data'>
//       <span>asd</span>
//     </td>
//     <td className='specs-table-data'>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

  
// </tbody>

// </table>
// {/* end of fourth table */}

// <h3>sdf</h3>
// <table className='scrollable-table'>
// <tbody>
//   <tr id='tr' >
//     <td className='specs-table-data'>
//       <span>asd</span>
//     </td>
//     <td className='specs-table-data'>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

//   <tr>
//     <td>
//       <span>asd</span>
//     </td>
//     <td>
//       <span>sdfsd</span>
//     </td>
//   </tr>

  
// </tbody>

// </table>
// {/* end of fifth table */}
//   </div>
// </section>
// </CenteredLayout>

//     </div>
//   )
// }

// export default ShowModelDetailsComponent