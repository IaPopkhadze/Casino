import React from "react";
import Georgia from "./Flags/Georgia.png";
import { IoMdFootball } from "react-icons/io";

import "./contents.css";
function Content2() {
  return (
    <div className="content2">
      <div className="futsal">
        <IoMdFootball style={{ fontSize: "2rem" }} />
        <h2>Futsal</h2>
      </div>
      <div className="country">
        <img src={Georgia} alt="img" />
        <p> Georgia - Premier League</p>
      </div>
      <div className="statistic">
        <div className="box1">
          <p>7</p>
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

export default Content2;
