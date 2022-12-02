import React from 'react'
import PictureOne from  '../Assets/mainPicture.png'
import './section1.css'
function Section1() {
  return (
    <div className='section1'>
       <div className="twoimages">
         <img className="imageOne" src={PictureOne} alt="" />
        <img className="imageTwo" src={PictureOne} alt="" />
       </div>
    </div>
  )
}

export default Section1