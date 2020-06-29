import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../step_one/step_one.scss";

function Step_one(props) {

  const handleChange = (e) => {
    let value = e.target.value;
    props.onStepOneChange(value);
  }

  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px", flex: 1 }}></div>

        <TextField
          controlled
          value={props.textVal}
          inputProps={{ style: { fontFamily: "Source Sans Pro" } }}
          className="textFiels_place"
          id="standard-multiline-static"
          placeholder="Your text goes here..."
          onChange={(e) => handleChange(e)}
          multiline
          variant="outlined"
          rows={20}
        />

        <div style={{ width: "300px", flex: 1 }}></div>
      </div>
    </div>
  );
}

export default Step_one;
