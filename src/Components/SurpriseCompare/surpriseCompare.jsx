import React, { useState   } from 'react'
import {useNavigate} from "react-router-dom"
import CenteredLayout from  '../Body/CenteredLayout'
import "./surpriseCompare.css"


const SurpriseCompare = (props ) => {

    // const nav = useNavigate()
    // const hc = (e)=>{
    //     e.preventDefault()
        
    // }
// console.log(onButtonClick)
const [isCityVisible, setCityVisibility] = useState(false);

const brands = ['audi', 'bmw', 'bugati'];

const handleClickCity = (option) => {
  setCityVisibility(!isCityVisible);

};

  return (
    <div>
      <p>Select an option:</p>
      <div className='sc-overlay'>
      <div className='sc-modal-content'>
      <div className='sc-header'>
            <h1>Select Brand</h1>
            <button onClick={handleClickCity} className='sc-close--button'>X</button>
        </div>
        {brands.map((option2, index) => (
          <div
            key={index}
            onClick={ handleClickCity}
            style={{ cursor: 'pointer', padding: '5px', margin: '5px', border: '1px solid #ccc' }}
          >
            {option2}
          </div>
        ))}
      </div>
      {/* <p>Selected option: {selectedOption2}</p> */}
    </div>
    </div>
  )
}

export default SurpriseCompare