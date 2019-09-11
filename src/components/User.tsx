import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface IState {
    id: number,
    name: string,
    email: string,
    address: {
        street: string
    },
    website: string,
    username: string,
    company: string
}

const useStyles = makeStyles({
    root: {
        padding: '30px'
    }
})

const User = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <h1>Welcome to Users</h1>
        </Paper>
    )
}

export default User;