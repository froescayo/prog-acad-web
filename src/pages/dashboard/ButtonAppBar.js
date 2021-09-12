import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
        justifyContent: 'space-around',
    },
    title: {
        fontSize: '40px',
        fontWeight: 'bold',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        procad
                    </Typography>
                    <div>
                        <Avatar alt="User" />
                    </div>


                </Toolbar>
            </AppBar>
        </div>
    );
}