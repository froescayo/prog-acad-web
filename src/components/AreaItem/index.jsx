import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import styles from './styles';


const AreaItem = () => {
    const classes = styles();
    
    return (
        <Link to="/activities" className={classes.link}>
            <div className={classes.wrapper}>
                <Typography variant="h6" style={{flex: 1}}>
                    Campo I - Atividades etc ...
                </Typography>

                <ArrowForward/>
            </div>
        </Link>
    );
}

export default AreaItem;