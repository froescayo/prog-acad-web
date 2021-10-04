import { signUp, fakeSignIn, signIn } from "../../store/reducers/auth"
import LoginForm from '../../components/LoginForm';
import { Route, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { useContext } from "react";
import { GlobalStateContext } from "../../store";
import { Container } from "@material-ui/core";

import './style.css';

function Auth() {

    let history = useHistory();
    const [state, dispatch] = useContext(GlobalStateContext);

    const handleSignInSubmit = (event) => {
        event.preventDefault();

        signIn({
            email: event.target.email.value,
            password: event.target.password.value,
        }, dispatch).then(r => {
            history.push("/");
        }).catch(console.log);
        if(state.auth.user) {
            history.push("/");
        }
    }

    const handleSignupSubmit = (form) => {
        console.log(form);
        signUp(form, dispatch);
    }

    return (
        <Container>
            <Route path="/login">
                <LoginForm handleSubmit={handleSignInSubmit} />
            </Route>
            <Route path="/cadastro">
                <UserForm handleSubmit={handleSignupSubmit} />
            </Route>
        </Container>
    )
}

export default Auth;