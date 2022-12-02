import React from "react";
import './header.css'
import {useState} from 'react'

function Header() {
  const [navActivation, setNavActivation]=useState('sports')

  return (
    <div className="header">
 
      <div className="navigationLeftSide">
        <ul>
          <li onClick={()=>setNavActivation('sports')}  className={navActivation==='sports'?'navActivation':null}>Sports</li>
          <li onClick={()=>setNavActivation('inplay')}  className={navActivation==='inplay'?'navActivation':null}>In-Play</li>
          <li onClick={()=>setNavActivation('casino')}  className={navActivation==='casino'?'navActivation':null}>Casino</li>
          <li onClick={()=>setNavActivation('liveCasino')}  className={navActivation==='liveCasino'?'navActivation':null}>Live Casino</li>
          <li onClick={()=>setNavActivation('virtualCasino')}  className={navActivation==='virtualCasino'?'navActivation':null}>Virtual Sports</li>
        </ul>
      </div>
      <div className="navigationRightSide">
          <div className="join">Join</div>
          <div className="login">Login</div>
      </div>
    </div>
  );
}

export default Header;
