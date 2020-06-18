import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import './createWorkheet.scss'
import HorizontalStepper from '../../horizontalStepper'

function CreateWorksheet() {


    const images = ["https://i.pinimg.com/originals/f2/b5/df/f2b5df9a590e1f196684434c9871dfb1.jpg",
        "https://images.wsj.net/im-146778?width=1280&size=1"]
    return (
        <div className="body">
            <AppBar className="appBar" >
                <Toolbar>
                    <Typography variant="h6">Bricks</Typography>
                </Toolbar>
            </AppBar>
            <HorizontalStepper />

            <div> {images.map((x) => <img src={x} />)}


            </div>


        </div>

    )

}
export default CreateWorksheet;