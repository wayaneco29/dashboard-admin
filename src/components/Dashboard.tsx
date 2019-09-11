import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        padding: '30px'
    }
})

const Dashboard = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <h1>Welcome to Dashboard !!</h1>
        </Paper>
    )
}

export default Dashboard;