import React, { useState } from 'react';

import profile from '../assets/profile.png';

import { makeStyles } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const useStyle = makeStyles({
    paper: {
        padding: '30px'
    },
    avatar: {
        position: 'relative',
        width: '150px',
        height: '150px',
        top: '-25px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0px 2px 21px -4px rgba(0,0,0,0.7);'
    },
    formGroup: {
        width: '100%'
    },
    firstName: {
        width: '65%',
        position: 'relative'
    },
    lastName: {
        width: '30%'
    },
    textFieldHalfWidth: {
        width: '45%',
        position: 'relative'
    },
    password: {
        letterSpacing: '3px'
    },
    icon: {
        position: 'absolute',
        right: '0px',
        bottom: '10px',
        cursor: 'pointer'
    }
})
// width: 400px;
//     height: 400px;
//     padding: 30px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);

const Profile = (): JSX.Element => {
    const classes = useStyle();
    const [modal, setModal] = useState<boolean>(true)

    const handleOpen = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <Grid container justify="space-between">
            <Grid item sm={8}>
                <Paper className={classes.paper}>
                    <Container>
                        <Box display="flex" justifyContent="space-between">
                            <FormGroup className={classes.firstName}>
                                <TextField
                                    id="standard-read-only-input"
                                    label="First Name"
                                    value="Wayan Danyael"
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <EditIcon className={classes.icon} />
                            </FormGroup>
                            <TextField
                                id="standard-read-only-input"
                                label="Last Name"
                                value="Eco"
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                className={classes.lastName}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <TextField
                                id="standard-read-only-input"
                                label="Email"
                                value="wayaneco29@gmail.com"
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                className={classes.textFieldHalfWidth}
                            />
                            <TextField
                                id="standard-read-only-input"
                                label="Company"
                                value="98labs"
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                className={classes.textFieldHalfWidth}
                            />
                        </Box>
                        <Box>
                            <FormGroup className={classes.textFieldHalfWidth}>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    value="wayandanyaeleco"
                                    autoComplete="current-password"
                                    margin="normal"
                                    InputProps={{
                                        classes: {
                                            input: classes.password
                                        }
                                    }}
                                />
                                <EditIcon className={classes.icon} />
                            </FormGroup>
                            <Modal
                                aria-labelledby="title"
                                aria-describedby="body"
                                open={modal}
                                onClose={handleClose}
                            >
                                <Paper>
                                    <h2 id="title">Change Password</h2>
                                    <FormGroup className={classes.textFieldHalfWidth}>
                                        <TextField
                                            id="standard-password-input"
                                            label="New Password"
                                            type="password"
                                            value="wayandanyaeleco"
                                            autoComplete="current-password"
                                            margin="normal"
                                            InputProps={{
                                                classes: {
                                                    input: classes.password
                                                }
                                            }}
                                        />
                                        <EditIcon className={classes.icon} />
                                    </FormGroup>
                                    <FormGroup className={classes.textFieldHalfWidth}>
                                        <TextField
                                            id="standard-password-input"
                                            label="Confirm Password"
                                            type="password"
                                            value="wayandanyaeleco"
                                            autoComplete="current-password"
                                            margin="normal"
                                            InputProps={{
                                                classes: {
                                                    input: classes.password
                                                }
                                            }}
                                        />
                                        <EditIcon className={classes.icon} />
                                    </FormGroup> 
                                </Paper>
                            </Modal>
                        </Box>
                        <Box display="flex">
                            <FormGroup className={classes.formGroup}>
                                <InputLabel htmlFor="age-simple">Age</InputLabel>
                                <Select
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormGroup>
                        </Box>
                    </Container>
                </Paper>
            </Grid>
            <Grid item sm={3}>
                <Paper className={classes.paper}>
                    <Avatar alt="Profile Picture" src={profile} className={classes.avatar} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Profile;