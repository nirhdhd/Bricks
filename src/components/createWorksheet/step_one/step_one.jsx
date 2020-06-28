import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../step_one/step_one.scss";

function Step_one(props) {

  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px", flex: 1 }}></div>
        <TextField
          inputProps={{ style: { fontFamily: "Source Sans Pro" } }}
          className="textFiels_place"
          id="standard-multiline-static"
          multiline
          rows={20}
          placeholder="Your text goes here..."
          variant="outlined"
        />
        <div style={{ width: "300px", flex: 1 }}></div>
      </div>
    </div>
  );
}

export default Step_one;
