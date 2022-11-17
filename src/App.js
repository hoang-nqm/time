import { Alert, Button, Snackbar } from "@mui/material";
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
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const vertical = "bottom";
  const horizontal = "right";
  const handleChange = (event) => {
    setCount(event.target.value);
  };
  const start = () => {
    setActive(true);
    setOpen(true);
    setSeverity("success");
    setMessage("Start");
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const stop = () => {
    setActive(false);
    setOpen(true);
    setSeverity("error");
    setMessage("Stop");
  };

  if ((active === true) & (count > 0)) {
    setTimeout(() => {
      audio.play();
      setCount(count - 1);
    }, 6000);
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
          onClick={start}
          variant="contained"
          defaultValue={count}
        >
          Start
        </Button>
        <Button
          style={{
            backgroundColor: "rgb(144, 202, 249)",
            color: "rgba(0, 0, 0, 0.87)",
            marginLeft: "10px",
          }}
          onClick={stop}
          variant="contained"
        >
          Stop
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        key={vertical + horizontal}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
