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

                <div className="userDetails">hi Nir</div>

                <Button variant="contained" color="primary">create worksheet</Button>
                <Button variant="contained" color="primary">my profile</Button>
                <Button variant="contained" color="primary">password</Button>
                <Button variant="contained" color="primary">about us</Button>


            </div>
        </div>
    )

}
export default Home;