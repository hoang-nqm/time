import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./App.css";
import gif from "./giphy.gif";

function App() {
  const audio = new Audio(
    "http://sfxcontent.s3.amazonaws.com/soundfx/UniversalTelephoneRing.mp3"
  );
  const [count, setCount] = useState();
  const [active, setActive] = useState(false);
  const handleChange = (event) => {
    setCount(event.target.value);
  };
  const test = () => {
    setActive(true);
  };

  if ((active === true) & (count > 0)) {
    setTimeout(() => {
      audio.play();
      setCount(count - 1);
    }, 60000);
  }
  return (
    <div className="container">
      <div>
        {" "}
        <h2> Time remaining {count} minutes</h2>
      </div>
      <div className="gif">
        <img
          style={{
            borderRadius: "20px",
            width: "100px",
            height: "100px",
            marginLeft: "80px",
          }}
          src={gif}
          alt=""
        />
      </div>

      <div className="text">
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="button">
        <Button
          style={{
            backgroundColor: "rgb(144, 202, 249)",
            color: "rgba(0, 0, 0, 0.87)",
          }}
          onClick={test}
          variant="contained"
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default App;
