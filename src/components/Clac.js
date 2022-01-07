import React, { useState } from "react";
import "./style.css";

const Clac = () => {
  const [result, setresult] = useState("");

  const handleClick = (e) => {
    setresult(result.concat(e.target.name));
  };

  const clear = () => {
    setresult("");
  };
  const backspace = () => {
    setresult(result.slice(0, result.length - 1));
  };

  const claculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (err) {
      setresult("Error");
    }
  };
  return (
    <>
      <div className="answer">
        <form action="">
          <input type="text" value={result} />
        </form>
      </div>
      <div className="all_btn">
        <div className="btn_rows">
          <div className="row">
            <button onClick={clear} id="clear" className="btns clear">
              Clear
            </button>
            <button onClick={backspace} id="backspace" className="btns c">
              C
            </button>
            <button name="%" onClick={handleClick} className="btns sign %">
              %
            </button>
            <button name="/" onClick={handleClick} className="btns sign ÷">
              ÷
            </button>
          </div>
          <div className="row">
            <button name="7" onClick={handleClick} className="btns 7">
              7
            </button>
            <button name="8" onClick={handleClick} className="btns 8">
              8
            </button>
            <button name="9" onClick={handleClick} className="btns 9">
              9
            </button>
            <button name="*" onClick={handleClick} className="btns sign ×">
              ×
            </button>
          </div>
          <div className="row">
            <button name="4" onClick={handleClick} className="btns 4">
              4
            </button>
            <button name="5" onClick={handleClick} className="btns 5">
              5
            </button>
            <button name="6" onClick={handleClick} className="btns 6">
              6
            </button>
            <button name="-" onClick={handleClick} className="btns sign -">
              -
            </button>
          </div>
          <div className="row">
            <button name="1" onClick={handleClick} className="btns 1">
              1
            </button>
            <button name="2" onClick={handleClick} className="btns 2">
              2
            </button>
            <button name="3" onClick={handleClick} className="btns 3">
              3
            </button>
            <button name="+" onClick={handleClick} className="btns sign +">
              +
            </button>
          </div>
          <div className="row last_row">
            <button onClick={handleClick} className="hide"></button>
            <button name="0" onClick={handleClick} className="btns 0">
              0
            </button>
            <button name="." onClick={handleClick} className="btns dot">
              .
            </button>
            <button onClick={claculate} id="result" className="btns equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clac;
