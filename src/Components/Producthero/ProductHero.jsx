import React from 'react'
import "./Productmain.css"
const ProductHero = ({img1,heading,img2}) => {
  return (
    <div  className='wrapper-main-product-sec-image'>
      <img src={img1} alt="" />
      <h3 className="main-heading-align-top-center">
        {heading}
      </h3>
      <img className='small-image-align-bottom-center' src={img2} alt="" />
    </div>
  )
}

export default ProductHero
