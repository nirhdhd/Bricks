import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./createWorkheet.scss";
import Step_1 from "../createWorksheet/step1_component/step1_component";
import Step_2 from "../createWorksheet/step2_component/step2_component";
function CreateWorksheet() {
  const [text, setText] = useState();

  return (
    <div>
      <AppBar className="appBar">
        <Toolbar>
          <Typography variant="h6">Bricks</Typography>
        </Toolbar>
      </AppBar>
      {/* <Step_1
        onStepChange={(val) => {
          setText(val);
        }}
      /> */}
      <Step_2
        onStepChange={(val) => {
          setText(val);
        }}
      />
    </div>
  );
}
export default CreateWorksheet;
