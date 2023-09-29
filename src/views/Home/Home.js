import React, { useState } from "react";
import "./Home.css";
function Home() {
  // input type text form  handle
  const [fullName, setFullName] = useState("");

  //   form handling radio button
  const [genders, setGenders] = useState("male");

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
              checked = {genders==="male"}
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
              checked = {genders==="fmale"}

            />{" "}
            <span>female</span>
          </div>
            <p className="input-radio-p text-center"> Gender: {genders}</p>
        </div>
      </form>
    </>
  );
}

export default Home;
