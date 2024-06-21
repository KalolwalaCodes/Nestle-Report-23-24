import React from 'react'

const GradientCard01 = ({bigData,smallData}) => {
  return (
    <div className='wrapper-card-container-01'>
      <div className="heading-bar">
      {bigData}
      </div>
      <p className="bold-small-text">
        {smallData}
      </p>
    </div>
  )
}

export default GradientCard01
