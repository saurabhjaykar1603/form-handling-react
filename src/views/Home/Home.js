import React, { useState } from "react";
import "./Home.css";
function Home() {
  // input type text form  handle
  const [fullName, setFullName] = useState("");

  return (
    <>
      <form>
        <h5 style={{textAlign: "center"}}>Form Handling in React</h5>
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
        </div>
      </form>
    </>
  );
}

export default Home;
