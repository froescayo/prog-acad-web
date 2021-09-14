import { signIn, signUp, fakeSignIn } from "../../store/reducers/auth"
import LoginForm from '../../components/LoginForm';
import { Route, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { useContext } from "react";
import { GlobalStateContext } from "../../store";

import './style.css';

function Auth() {

    let history = useHistory();
    const [state, dispatch] = useContext(GlobalStateContext);

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        console.log({
            email: event.target.email.value,
            password: event.target.password.value,
        })

        fakeSignIn({
            email: event.target.email.value,
            password: event.target.password.value,
        }, dispatch).then(r => {
            history.push("/");
        })
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        signUp({

        }, dispatch);
    }

    return (
        <div className="auth">
            <div className="title-auth-container">
                <div className="title-auth">
                    <h1 className="procad">procad</h1>
                    <p className="subtitle">Sistema de progressão e promoção de carreira acadêmica</p>
                </div>
            </div>
            <Route path="/login" component={() => <LoginForm handleSubmit={handleSignInSubmit} />} />
            <Route path="/cadastro" component={() => <UserForm handleSubmit={handleSignupSubmit} />} />
        </div>
    )
}

export default Auth;