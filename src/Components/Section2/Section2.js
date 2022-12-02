import React from 'react'
import './section2.css'
import Icon1 from '../Assets/icon1.svg'
import Icon2 from '../Assets/icon2.svg'
import Icon3 from '../Assets/icon3.svg'
import Icon4 from '../Assets/icon4.svg'
import Icon5 from '../Assets/icon5.svg'
import Icon6 from '../Assets/icon6.svg'
import Icon7 from '../Assets/icon7.svg'
import Icon8 from '../Assets/icon8.svg'
function Section2() {
  return (
    <div className='section2'>
        <div className="section2Navigation">
             <div className="icons">
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon1} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon2} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon3} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon4} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon5} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon6} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon7} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
                <div className='eachItemContainer'>
                    <img className='icon'  src={Icon8} alt="img" />
                    <p>Video <br /> Slots</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Section2