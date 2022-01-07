import React from "react";
import "./style.css";

const Clac = () => {
  return (
    <>
      <div className="answer">1050</div>
      <div className="all_btn">
        <div className="btn_rows">
          <div className="row">
            <button className="btns c">C</button>
            <button className="btns sign +/-">+/-</button>
            <button className="btns sign %">%</button>
            <button className="btns sign ÷">÷</button>
          </div>
          <div className="row">
            <button className="btns 7">7</button>
            <button className="btns 8">8</button>
            <button className="btns 9">9</button>
            <button className="btns sign X">X</button>
          </div>
          <div className="row">
            <button className="btns 4">4</button>
            <button className="btns 5">5</button>
            <button className="btns 6">6</button>
            <button className="btns sign -">-</button>
          </div>
          <div className="row">
            <button className="btns 1">1</button>
            <button className="btns 2">2</button>
            <button className="btns 3">3</button>
            <button className="btns sign +">+</button>
          </div>
          <div className="row last_row">
            {/* <button className="btns">1</button> */}
            <button className="btns 0">0</button>
            <button className="btns dot">.</button>
            <button className="btns equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clac;
