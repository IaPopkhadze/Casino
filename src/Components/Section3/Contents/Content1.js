
import React from 'react'
import './contents.css'
import Kazakhistan from  './Flags/kazakhistan.png'
import Korea from './Flags/korea.png'
function Content1() {
  return (
    <div className='content1'>
         <div className="repeatedContent">
            <div className="content-first">
                <p>Item || <br /> set</p>
            </div>
            <div className="content-Second">
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores, explicabo.</p>
            </div>
         </div>
         <div className="country">
            <img src={Korea} alt="img" />
            <p>South Korea - V League, Women</p>
         </div>
         <div className="repeatedContent">
            <div className="content-first">
                <p>Item || <br /> set</p>
            </div>
            <div className="content-Second">
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores, explicabo.</p>
            </div>
         </div>
         <div className="country">
            <img src={Kazakhistan} alt="img" />
            <p> Kazakhistan - National League</p>
         </div>
         <div className="repeatedContent">
            <div className="content-first">
                <p>Item || <br /> set</p>
            </div>
            <div className="content-Second">
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Asperiores, explicabo.</p>
            </div>
         </div>
       
    </div>
  )
}

export default Content1