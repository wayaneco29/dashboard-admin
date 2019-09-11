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
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';

const useStyle = makeStyles({
    paper: {
        padding: '50px 30px 30px 30px',
        marginTop: '40px',
        position: 'relative',
        border: '1px solid #3f51b5'
    },
    infoHeader: {
        width: '70%',
        fontSize: '20px',
        padding: '25px',
        position: 'absolute',
        top: '-35px',
        left: '50%',
        backgroundColor: '#3f51b5',
        color: '#fafafa',
        transform: 'translateX(-50%)'
    },
    avatar: {
        position: 'relative',
        width: '150px',
        height: '150px',
        top: '-80px',
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
    textFieldFullWidth: {
        width: '100%'
    },
    password: {
        letterSpacing: '3px'
    },
    icon: {
        position: 'absolute',
        right: '0px',
        bottom: '10px',
        cursor: 'pointer'
    },
    modal: {
        width: '400px',
        height: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    modalHeader: {
        padding: '30px',
        backgroundColor: '#3f51b5',
        color: '#fafafa'
    },
    modalInput: {
        width: '100%',
        padding: '20px 30px',
        position: 'relative'
    },
    modalInputIcon: {
        cursor: 'pointer',
        position: 'absolute',
        right: '27px',
        bottom: '28px'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 30px'
    },
    modalButtons: {
        width: '46%',
        padding: '10px 0px'
    }
})

interface IRole {
    value: string | number
    name: string
}

const Profile = (): JSX.Element => {
    const classes = useStyle();
    const [modal, setModal] = useState<boolean>(false)
    const [role, setRole] = useState<IRole>({ value: 0, name: "" })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const handleChange = (name: string) => (
        event: React.ChangeEvent<{ value: number | string }>
    ) => {
        event.persist()
        setRole({ ...role, value: event.target.value })
    }

    const handleOpen = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleShowPassword = () => {
        setShowPassword(true)
    }

    const hideShowPassword = () => {
        setShowPassword(false)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(true)
    }

    const hideShowConfirmPassword = () => {
        setShowConfirmPassword(false)
    }

    return (
        <Grid container justify="space-between">
            <Grid item sm={8}>
                <Paper className={classes.paper}>
                    <Paper className={classes.infoHeader}>
                        Profile Information
                    </Paper>
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
                                <EditIcon className={classes.icon} onClick={handleOpen} />
                            </FormGroup>
                            <Modal
                                aria-labelledby="title"
                                aria-describedby="body"
                                open={modal}
                                onClose={handleClose}
                            >
                                <Paper className={classes.modal}>
                                    <h2 id="title" className={classes.modalHeader}>Change Password</h2>
                                    <FormGroup className={classes.modalInput}>
                                        <TextField
                                            id="standard-password-input"
                                            label="New Password"
                                            type={showPassword ? "text" : "password"}
                                            value=""
                                            autoComplete="current-password"
                                            margin="normal"
                                            InputProps={{
                                                classes: {
                                                    input: classes.password
                                                }
                                            }}
                                        />
                                        {showPassword ? <VisibilityOffIcon className={classes.modalInputIcon} onClick={hideShowPassword} /> : <VisibilityIcon className={classes.modalInputIcon} onClick={handleShowPassword} />}
                                    </FormGroup>
                                    <FormGroup className={classes.modalInput}>
                                        <TextField
                                            id="standard-password-input"
                                            label="Confirm Password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            value=""
                                            autoComplete="current-password"
                                            margin="normal"
                                            InputProps={{
                                                classes: {
                                                    input: classes.password
                                                }
                                            }}
                                        />
                                        {showConfirmPassword ? <VisibilityOffIcon className={classes.modalInputIcon} onClick={hideShowConfirmPassword} /> : <VisibilityIcon className={classes.modalInputIcon} onClick={handleShowConfirmPassword} />}
                                    </FormGroup>
                                    <div className={classes.buttonContainer}>
                                        <Button onClick={handleClose} size="medium" color="primary" variant="contained" className={classes.modalButtons}>Save</Button>
                                        <Button onClick={handleClose} size="medium" color="default" variant="contained" className={classes.modalButtons}>Cancel</Button>
                                    </div>
                                </Paper>
                            </Modal>
                        </Box>
                        <Box display="flex">
                            <FormControl className={classes.textFieldFullWidth}>
                                <NativeSelect
                                    value={role.value}
                                    onChange={handleChange('role')}
                                    name="role"
                                    inputProps={{ 'aria-label': 'role' }}
                                >
                                    <option value={0} disabled>
                                        Role </option>
                                    <option value={1}>Safelane</option>
                                    <option value={2}>Midlane</option>
                                    <option value={3}>Offlane</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </Container>
                </Paper>
            </Grid>
            <Grid item sm={3}>
                <Paper className={classes.paper}>
                    <Avatar alt="Profile Picture" src={profile} className={classes.avatar} />
                    <div>
                        <h2>Motto:</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione, aliquam ut eveniet eum commodi sapiente officiis doloremque rem nemo?</p>
                    </div>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default Profile;