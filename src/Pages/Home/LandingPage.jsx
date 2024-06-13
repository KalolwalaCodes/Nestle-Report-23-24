import React from 'react'
import Video from '../../Components/Video'
import landingpagevideo from'/Main3.mp4'
import TextAnimation from '../../Components/AnimateText/AnimatedText';
import { motion } from 'framer-motion';
const LandingPage = () => {
  const imageVarientUp = {
    hidden: {
      opacity: 0,
      y: '-100px',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className='landing-page-container scroll-smoot'>
      <div className="hero-section-main">
      <Video src={landingpagevideo} />
      
      <motion.img variants={imageVarientUp} initial='hidden' animate='visible'  className='absolute-image' src="./nestlegirl.webp" alt="" />
      <div className="laanding-page-text-container">
        <TextAnimation text={'Our Path to '}/>
       <br />
       <TextAnimation text={' Progress'}/>
      
      </div>
      </div>
       <div className="main-section-02 flex flex-col  align-middle justify-start gap-8">
        <div className="black-bold-text-conatiner p-5 px-8 text-black font-bold md:w-1/2 sm:w-full">
          <h3 className='bold-heading-text text-black font-bold'>Our Purpose</h3>
          Unlocking the power of food to enhance quality of life for
           everyone, today and for generations to come.
        </div>
        <div className="bold-white-text-container p-5 ml-10 pt-0 text-black font-medium">
         hii
        </div>
       </div>
    </div>
  )
}

export default LandingPage
