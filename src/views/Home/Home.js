import React, { useEffect, useState } from "react";
import "./Home.css";
function Home() {
  // input type text form  handle
  const [fullName, setFullName] = useState("");

  //   form handling radio button
  const [genders, setGenders] = useState("male");

  //   form handling CheckBox
  const [divices, setDivices] = useState([]);
  useEffect(() => {
    console.log(divices);
  }, [divices]);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setDivices([...divices, e.target.value]);
    } else {
      const indexToBeDeleted = divices.indexOf(e.target.value);
      divices.splice(indexToBeDeleted, 1);
      setDivices([...divices]);
    }
  };
  return (
    <>
      <form>
        <h5 style={{ textAlign: "center" }}>Form Handling in React</h5>
        <div className="form-card">
          <input
            type="text"
            placeholder="Full Name type-text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
            className="input-text"
          />
          {/* // form handling radio button */}

          <div className="d-block mx-auto input-radio">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => {
                if (e.target.checked) {
                  setGenders(e.target.value);
                }
              }}
              checked={genders === "male"}
            />{" "}
            <span>male</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => {
                if (e.target.checked) {
                  setGenders(e.target.value);
                }
              }}
              checked={genders === "fmale"}
            />{" "}
            <span>female</span>
          </div>
          <p className="input-radio-p text-center"> Gender: {genders}</p>
          <div className="input-check-box d-flex ">
            <input
              type="checkbox"
              className="text-center"
              value="mobile"
              onChange={handleCheck}
            />{" "}
            <span className="text-center">Mobile</span> <br />
            <input
              type="checkbox"
              className="text-center"
              value="laptop"
              onChange={handleCheck}
            />{" "}
            <span className="text-center">Laptop</span> <br />
            <input
              type="checkbox"
              className="text-center"
              value="smartwatch"
              onChange={handleCheck}
            />{" "}
            <span className="text-center">Smartwatch</span> <br />
          </div>
        </div>
      </form>
    </>
  );
}

export default Home;
