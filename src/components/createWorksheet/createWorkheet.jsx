import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./createWorkheet.scss";
import HorizontalStepper from "../../horizontalStepper";
import Step_one from "./step_one/step_one";
import Step_two from "./step_two/step_two";

function CreateWorksheet() {
  const [step, setStep] = useState();
  const [text, setText] = useState();
  const [wordsStore, setWordsStore] = useState();
  const [parentToChild, setParentToChild] = useState();


  const getComponent = (step) => {
    switch (step) {
      case 0:
        return <Step_one />
      case 1:
        return <Step_two />
      default:
        return;
    }
  }


  return (
    <div>
      <AppBar className="appBar">
        <Toolbar>
          <Typography variant="h6">Bricks</Typography>
        </Toolbar>
      </AppBar>
      <HorizontalStepper onStepChange={(val) => setStep(val)} />
      {getComponent(step)}




    </div>
  );
}
export default CreateWorksheet;
