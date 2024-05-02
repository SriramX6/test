import React, { useEffect } from "react";

import { useState , createContext ,useContext } from 'react';


export const valueContext = createContext()

export const useMyContext = () => useContext(valueContext);

export const ValueProvider = ({children})=>{


  // model selection
    const [value ,  setValue] = useState(() => {
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : '';
      });

      useEffect(() => {
        localStorage.setItem('data', JSON.stringify(value));
      }, [value]);

      const updateVal = (val) =>{
        setValue(val)
    }
    // model selection --------

      // url
    const [url , setUrl] = useState(() => {
        const storedData2 = localStorage.getItem('url');
        return storedData2 ? JSON.parse(storedData2) : '';
      });
    

      useEffect(() => {
        localStorage.setItem('url', JSON.stringify(url));
      }, [url]);

      const updateUrl = (urll) =>{
        setUrl(urll)
    }
      // url --------


      // variant Index 

      const [ variantIndex  , setVariantIndex ] = useState(() => {
        const storedIndex = localStorage.getItem('variantIndex');
        return storedIndex ? JSON.parse(storedIndex) : "" ;
      });

      useEffect(() => {
        localStorage.setItem('VariantIndex', JSON.stringify(variantIndex));
      }, [variantIndex]);

      const updateIndex = (ind) =>{
        setVariantIndex(ind)
    }
  
     // variant Index ----------


    //  variant price
     const [variantPrice , setvariantPrice] = useState( null)

     const SetvariantPrice = (opt) =>{
      setvariantPrice(opt)
     }
    //  -----------

    
    //  RTO price
    const [RTO , setRTO] = useState( null)

    const SetRTO = (opt) =>{
     setRTO(opt)
    }
   //  ----------


  //  general model details
      const [getModelDetails , setGeneralDetails] = useState(null)

      const SetModelDetails = (opt) => {
        setGeneralDetails(opt)
      }

    return(
        <valueContext.Provider value = {{value , updateVal ,
         url , updateUrl ,
         variantIndex ,updateIndex ,
          SetvariantPrice ,variantPrice ,
           RTO , SetRTO,
           getModelDetails  , SetModelDetails}}>

        {children}
        </valueContext.Provider>
    )
}
