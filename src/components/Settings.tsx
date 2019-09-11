import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        padding: '30px'
    }
})

const Settings = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <h1>Settings</h1>
        </Paper>
    )
}

export default Settings;