import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import './home.scss'
function Home() {

    return (
        <div className="body">
            <AppBar className="appBar" >
                <Toolbar>
                    <Typography variant="h6">Bricks</Typography>
                </Toolbar>
            </AppBar>

            <div className="content" >

                <div className="userDetails">Hi Nir</div>


                <div className="buttonsPlace">
                    <Button className="buttonContent" variant="contained">create worksheet</Button>
                    <Button className="buttonContent" variant="contained">my profile</Button>
                    <Button className="buttonContent" variant="contained">password</Button>
                    <Button className="buttonContent" variant="contained">about us</Button>
                </div>

            </div>
        </div>
    )

}
export default Home;