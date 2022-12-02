import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import Globe from "./Flags/globe.png";
function Content3() {
  return (
    <div className="content3">
      <div className="snooker">
       <div className="snookerContent-1">
       <BsFillTriangleFill />
       <h2>Snooker</h2>
       </div>
        
        <div className="snookerContent-2">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>Over</p>
          <p>Under</p>
        </div>
      </div>
      <div className="country">
        <img src={Globe} alt="img" />
        <p> International - Pro League</p>
      </div>
      <div className="statistic">
        <div className="box1">
          <p>In <br /> Progress</p>
        </div>
        <div className="box2">
          <p> MFC lliauni <br /> MFC Tbilisi</p>
          <p>2 <br /> 3</p>
          <p>7.50</p>
          <p>3.40</p>
          <p>1.5</p>
          <p>6.5</p>
           <p>1.90</p>
           <p>1.80</p>
           <p>+2</p>
        </div>
      </div>
      <div className="statistic">
        <div className="box1">
          <p>In <br /> Progress</p>
        </div>
        <div className="box2">
          <p> MFC lliauni <br /> MFC Tbilisi</p>
          <p>2 <br /> 3</p>
          <p>7.50</p>
          <p>3.40</p>
          <p>1.5</p>
          <p>6.5</p>
           <p>1.90</p>
           <p>1.80</p>
           <p>+2</p>
        </div>
      </div>
      <div className="statistic">
        <div className="box1">
          <p>In <br /> Progress</p>
        </div>
        <div className="box2">
          <p> MFC lliauni <br /> MFC Tbilisi</p>
          <p>2 <br /> 3</p>
          <p>7.50</p>
          <p>3.40</p>
          <p>1.5</p>
          <p>6.5</p>
           <p>1.90</p>
           <p>1.80</p>
           <p>+2</p>
        </div>
      </div>
    </div>
  );
}

export default Content3;
