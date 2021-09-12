import { signIn } from "../../store/reducers/auth"
import LoginForm from '../../components/LoginForm';
import { Route } from 'react-router-dom';
import UserForm from '../../components/UserForm';


function Auth() {


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            email: event.target.email.value,
            password: event.target.password.value,
        })
        signIn({
            email: event.target.email.value,
            password: event.target.password.value,
        })
    }

    return (
        <div className="auth">
            <div className="title-auth-container">
                <div className="title-auth">
                    <h1 className="procad">procad</h1>
                    <p className="subtitle">Sistema de progressão e promoção de carreira acadêmica</p>
                </div>
            </div>
            <Route path="/login" component={() => <LoginForm handleSubmit={handleSubmit} />} />
            <Route path="/cadastro" component={() => <UserForm handleSubmit={handleSubmit} />} />
        </div>
    )
}

export default Auth;