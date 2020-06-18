import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import {
  Link
} from 'react-router-dom';
import "../login/Login.scss";
import '../register/Register';

function Login() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <AppBar className="appBar" >
        <Toolbar>
          <Typography variant="h6">Bricks</Typography>
        </Toolbar>
      </AppBar>

      <header className="Bricks"> Bricks</header>



      <h1 >Login</h1>

      <TextField

        id="outlined-basic"
        label="Email"
        variant="outlined" />

      <div style={{ marginTop: "15px" }}></div>

      <TextField
        className="textf"
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined" />

      <div >
        <Button
          className="buttonConfirm"
          variant="contained">confirm
        </Button>
      </div >
      <Link className="registerLink" to="/register">don't not have an account? Sign up here</Link>

    </div>
  );
};

export default Login;
