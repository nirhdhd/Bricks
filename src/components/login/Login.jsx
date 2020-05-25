import "../login/Login.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import React, { useState } from "react";

function Login() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="h6">Bricks</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Login;
