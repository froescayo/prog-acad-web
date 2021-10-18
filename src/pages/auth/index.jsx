import React from 'react';
import { signUp, signIn } from "../../store/reducers/auth"
import LoginForm from '../../components/LoginForm';
import { Route, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { useContext } from "react";
import { GlobalStateContext } from "../../store";
import { Container } from "@material-ui/core";
import { Snackbar, Alert } from "@mui/material";
import MuiAlert from "@mui/material/Alert"
import './style.css';


const SnackAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Auth() {

    let history = useHistory();
    const [state, dispatch] = useContext(GlobalStateContext);

    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
        setErrorMessage("");
    };

    const handleSignInSubmit = async (event) => {
        event.preventDefault();

        try {
            await signIn({
                email: event.target.email.value,
                password: event.target.password.value,
            }, dispatch)
            history.push("/"); 
        } catch (error) {
            setErrorMessage(error.response.data.error)
            setOpen(true);
        }
        
        if(state.auth.user) {
            history.push("/");
        }
    }

    const handleSignupSubmit = async (form) => {
        console.log(form);
        try {
            await signUp(form, dispatch)
            
        } catch (error) {
            setErrorMessage(error.response.data.error)
            setOpen(true);
        }
    }

    return (
        <Container>
            <Route path="/login">
                <LoginForm handleSubmit={handleSignInSubmit} />
            </Route>
            <Route path="/cadastro">
                <UserForm handleSubmit={handleSignupSubmit} />
            </Route>
            <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
                <SnackAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </SnackAlert>
            </Snackbar>
        </Container>
    )
}

export default Auth;