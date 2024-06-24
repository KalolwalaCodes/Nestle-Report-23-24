import React from 'react'
import {motion} from "framer-motion"
import "./Productmain.css"
const ProductHero = ({img1,heading,img2}) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut"}}  className='wrapper-main-product-sec-image'>
      <img src={img1} alt="" />
      <motion.h3 initial={{x:"-100px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.3}} className="main-heading-align-top-center">
        {heading}
      </motion.h3>
      <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,ease:"easeInOut",delay:0.5}}  className='small-image-align-bottom-center' src={img2} alt="" />
    </motion.div>
  )
}

export default ProductHero
