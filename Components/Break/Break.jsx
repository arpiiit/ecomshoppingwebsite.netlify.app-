import React from 'react'
import './Break.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Break = (props) => {
    const {product}=props;
  return (
    <div className='breakk'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Break
