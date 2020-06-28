import React from 'react';
import './Register.scss'
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
    Link,
} from 'react-router-dom';


const errors = {
    emailRequired: "",
    emailInvalid: "",
    userRequired: "",
    passwordEqual: "",
    passwordRequired: ""
}

function Register() {

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {

        let isError = validation(data);
        console.log(isError);

    }


    const resetForm = () => {
        errors.emailInvalid = "";
        errors.emailRequired = "";
        errors.passwordEqual = "";
        errors.passwordRequired = "";
        errors.userRequired = "";
    }

    ////////////////////////////////////////////
    //     NIR WAS HERE
    // --------------------
    //  * fix the regex in the email field
    //
    ////////////////////////////////////////////


    const validation = (data) => {

        resetForm();

        let isError = false;

        if (data.email === "") {
            errors.emailRequired = "you must wrote email!";
            isError = true;
        }
        if (!/^[A-Za-z]+$/i.test(data.email)) {
            errors.emailInvalid = "Invalid email address";
            isError = true;
        }
        if (data.password === "") {
            errors.passwordRequired = "you must wrote password";
            isError = true;
        }
        if (data.password !== data.passwordConfirm) {
            errors.passwordEqual = "your passwords do not match";
            isError = true;
        }
        if (data.username === "") {
            errors.userRequired = "your must have username ";
            isError = true;
        }

        return isError;
    }

    return (
        <div className="body">
            <AppBar style={{ backgroundColor: "#33333" }} className="appBar" >
                <Toolbar>
                    <Typography variant="h6">Bricks</Typography>
                </Toolbar>
            </AppBar>
            <header className="Bricks"> Bricks </header>
            <h1>Register</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    name="email"
                    ref={register({ maxLength: 20 })}
                    errortext={errors.emailRequired || errors.emailInvalid}
                    error={errors.emailRequired !== "" || errors.emailInvalid !== ""}
                    inputRef={register}
                    label="Outlined"
                    label="email"
                    variant="outlined" />
                <p className="errorMesseage">{errors.emailRequired || errors.emailInvalid}</p>


                <div style={{ marginTop: "15px" }}></div>

                <TextField
                    name="username"
                    errortext={errors.userRequired}
                    error={errors.userRequired !== ""}
                    inputRef={register}
                    ref={register({ pattern: /^[A-Za-z]+$/i })}
                    label="Outlined"
                    label="username"
                    variant="outlined" />
                <p className="errorMesseage" >{errors.userRequired}</p>

                <div style={{ marginTop: "15px" }}></div>

                <TextField
                    name="password"
                    errortext={errors.passwordRequired}
                    error={errors.passwordRequired !== ""}
                    inputRef={register}
                    type="password"
                    ref={register({ required: true })}
                    label="password"
                    variant="outlined" />
                <p className="errorMesseage">{errors.passwordRequired}</p>

                <div style={{ marginTop: "15px" }}></div>


                <TextField
                    name="passwordConfirm"
                    errortext={errors.passwordEqual}
                    error={errors.passwordEqual !== ""}
                    inputRef={register} type="number"
                    ref={register({ required: true })}
                    label="passwordConfirm"
                    type="password"
                    variant="outlined" />
                <p className="errorMesseage">{errors.passwordEqual}</p>


                <div>
                    <Button className="buttonConfirm"
                        type="submit"
                        variant="contained"
                    >
                        confirm
                    </Button>
                </div>

            </form>
            <Link className="registerLink" to="/login">allredy have accout? click here</Link>


        </div >
    )
};
export default Register;