import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "../step1_component/step1_component.scss";
import { Button } from "@material-ui/core";
import Step_2 from "../step2_component/step2_component";
import { Redirect } from "react-router";

function Step_1(props) {
  let TextFieldValue = " ";

  const handleChange = (e) => {
    TextFieldValue = e.target.value;
  };

  const handleNext = () => {
    console.log("!!!!, ", TextFieldValue);
    props.onStepChange(TextFieldValue);
  };

  return (
    <div className="divBody">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px", flex: 1 }}></div>

        <TextField
          inputProps={{
            style: { fontFamily: "Source Sans Pro", fontSize: "20px" },
          }}
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleNext}
          className="next_Button"
          style={{ display: "flex", width: "300px", height: "100px" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Step_1;
