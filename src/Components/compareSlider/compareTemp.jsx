import React from 'react'

function CompareTemp(props)  {
  return (
    

<div className='com'>
<div class="card ">



    <div class="half-compare">
      <div className=' img--container'>
      <img src={props.url1} alt="First Image"/>
      </div>
      <span>{props.brand1}</span>
      <p className='des'>{props.model1}</p>
      <p className='des'>{props.price1}</p>
    </div>
    <div class="wrapper">
      <div class="line"></div>
      <div class="wordwrapper">
          <div class="word">vs</div>                                        
      </div>
      </div>
    <div class="half-compare">
      <div className=' img--container'>
      <img src={props.url2} alt="Second Image"/>
      </div>
        <span>{props.brand2}</span>
      <p className='des'>{props.model2}</p>
      <p className='des'>{props.price2}</p>
      
    </div>
  </div>

  <button className='compare--button'>Compare Now</button> 
  </div>
 

  )
}

export default CompareTemp