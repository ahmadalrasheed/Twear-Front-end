import React from 'react'

function Reviews({value,text,color}) {
  return (
    <>
    <div className='Reviews'>
    <span style={{color:color}}>
    <i className={(value >=1) ? "fa-solid fa-star" :(value >=0.5) ? "fa-solid fa-star-half-stroke" :"far fa-star"}></i>
    </span>
    <span style={{color:color}}>
    <i className={(value >=2) ? "fa-solid fa-star" :(value >=1.5) ? "fa-solid fa-star-half-stroke" :"far fa-star"}></i>
    </span>
    <span style={{color:color}}>
    <i className={(value >=3) ? "fa-solid fa-star" :(value >=2.5) ? "fa-solid fa-star-half-stroke" :"far fa-star"}></i>
    </span>
    <span style={{color:color}}>
    <i className={(value >=4) ? "fa-solid fa-star" :(value >=3.5) ? "fa-solid fa-star-half-stroke" :"far fa-star"}></i>
    </span>
    <span style={{color:color}}>
    <i className={(value >=5) ? "fa-solid fa-star" :(value >=4.5) ? "fa-solid fa-star-half-stroke" :"far fa-star"}></i>
    </span>
    <span>
    <i>{text}</i>
    </span>
    </div>
    
    
    </>
  )
}

export default Reviews