import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../step_two/step_two.scss";

function Step_two(props) {
  return (
    <div >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0.1 }}></div>
        <TextField
          inputProps={{ style: { fontFamily: "Source Sans Pro" } }}
          className="textFiels_place"
          id="standard-multiline-static"
          multiline
          rows={20}
          defaultValue="Your text goes here..."
          variant="outlined"
        />
        <div style={{ flex: 0.1 }}></div>
        <div
          className="shadow4"
          style={{ flex: 1, backgroundColor: "#fff3cd" }}
        >
          <h3>words store</h3>
        </div>
        <div style={{ flex: 0.1 }}></div>
      </div>
    </div>
  );
}

export default Step_two;
