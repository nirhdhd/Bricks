import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../step_one/step_one.scss";

var toDisplay;

function Step_one(props) {
  useEffect(() => {
    const stepNum = props.stepNum;
    console.log("stepNum", stepNum);
    toDisplay =
      stepNum == "undefine" ? { display: "inherit" } : { display: "none" };
    console.log("toDisplay", toDisplay);
  });

  return (
    <div style={toDisplay}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px", flex: 1 }}></div>
        <TextField
          inputProps={{ style: { fontFamily: "Source Sans Pro" } }}
          className="textFiels_place"
          id="standard-multiline-static"
          multiline
          rows={20}
          defaultValue="Your text goes here..."
          variant="outlined"
        />
        <div style={{ width: "300px", flex: 1 }}></div>
      </div>
    </div>
  );
}

export default Step_one;
