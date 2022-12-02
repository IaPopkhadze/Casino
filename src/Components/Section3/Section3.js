
import React from 'react'
import './section3.css'
 import { RiArrowDropDownLine } from 'react-icons/ri';
 import Flag from '../Assets/flag.png'
import Content1 from './Contents/Content1';
import Content2 from './Contents/Content2';
import Content3 from './Contents/Content3';

function Section3() {
  return (
    <div className='section3'>
       
     <div className="blackBaner">
        <div className="blackBanerContent1">
            <p>15:36:00</p>
            <p>About</p>
            <p>Promotions</p>
        </div>
        <div className="blackBanerContent2">
            <p>Help</p>
            <div className='language'>
            <img src={Flag} alt="" />
            <p>English</p>
              <RiArrowDropDownLine className='dropDownIcon'/>
            </div>
            <div className='oddType'>
              <p>Odds Type</p>
              <RiArrowDropDownLine className='dropDownIcon'/>
            </div>
        </div>
     </div>

     <div className="betWillBaner">
        <div className="betWill">
            <h2>Bet<span>will</span></h2>
        </div>
        <div className="signUp">
            <p className='signUpText'>Sign Up</p>
            <p>Log In</p>
        </div>
     </div>
     <div >
        <Content1/>
        <Content2/>
        <Content3/>
     </div>
    </div>
  )
}

export default Section3