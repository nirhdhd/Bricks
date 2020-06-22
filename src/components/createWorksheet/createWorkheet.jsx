import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import './createWorkheet.scss'
import HorizontalStepper from '../../horizontalStepper'
import Step_one from './step_one/step_one'
import Step_two from './step_two/step_two'


function CreateWorksheet() {

    const [step, setStep] = useState();




    return (
        <div >

            <AppBar className="appBar" >
                <Toolbar>
                    <Typography variant="h6">Bricks {step}</Typography>
                </Toolbar>
            </AppBar>
            <HorizontalStepper onStepChange={val => setStep(val)} />
            <Step_one show={step == 0 ? 'block' : 'none'} />////need to changeeee
            <Step_two display={step == 1 ? 'block' : 'none'} />
        </div>

    )

}
export default CreateWorksheet;