import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),

        },
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #D5D5D5',
        boxSizing: 'border-box',
        borderRadius: '8px',
        width: '350px',
        height: '400px',
        left: '0px',
        top: '0px',
        alignItems: 'center',
        fontFamily: 'Poppins',
    },
    btn: {
        backgroundColor: '#086972',
        width: '70%',
        marginTop: '35px',
        color: '#E5E5E5',
    },
    margin: {
        margin: '0',
        color: '#086972',
    },
}));


function Auth() {

    const classes = useStyles();

    return (
        <div className="auth">
            <div className="title-auth">
                <h1 className="procad">procad</h1>
                <p className="subtitle">Sistema de progressão e promoção de carreira acadêmica</p>
            </div>
            <div className="signin">
                <form className={classes.root} noValidate autoComplete="off">
                    <Typography variant="h4">Login</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button className={classes.btn} variant="contained">
                        Entrar
                    </Button>
                    <Button size="medium" className={classes.margin}>
                        Registrar-se
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Auth;