import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import VideocamIcon from '@material-ui/icons/Videocam';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

import Dashboard from './Dashboard';
import User from './User';
import Settings from './Settings';
import Profile from './Profile';

const useStyles = makeStyles({
    rootContainer: {
        height: 'calc(100vh - 64px)',
        justifyContent: 'space-between'
    },
    gridItemFirst: {
        padding: '30px 20px',
        backgroundColor: '#efefef',
        borderRight: '1px solid #d1cfcf',
        overflow: 'hidden',
        maxWidth: '200px',
        flexBasis: '200px',
        transition: 'flex-basis 600ms ease'
    },
    gridItemFirstAnimated: {
        padding: '30px 20px',
        backgroundColor: '#efefef',
        borderRight: '1px solid #d1cfcf',
        maxWidth: '67px',
        flexBasis: '67px',
        transition: 'flex-basis 600ms ease'
    },
    trans: {
        transition: 'flex-basis 600ms ease'
    },
    gridItemSecond: {
        padding: '30px 20px',
        maxWidth: 'calc(100% - 200px)',
        flexBasis: 'calc(100% - 200px)',
        transition: 'flex-basis 600ms ease'
    },
    gridItemSecondAnimated: {
        padding: '30px 20px',
        maxWidth: 'calc(100% - 67px)',
        flexBasis: 'calc(100% - 67px)',
        transition: 'flex-basis 600ms ease'
    },
    linkContainer: {
        padding: '20px 0px',
        textDecoration: 'none',
        color: '#000'
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '18px'
    },
    span: {
        paddingLeft: '14px',
        color: '#3f51b5'
    },
    spanAnimated: {
        paddingLeft: '14px',
        color: '#3f51b5',
        display: 'none'
    },
    linkColor: {
        color: '#3f51b5'
    }
})


interface IProps {
    close: boolean
}
const Content = (props: IProps): JSX.Element => {
    const classes = useStyles();
    console.log(props.close)

    return (
        <Grid container className={classes.rootContainer}>
            <Grid item xs={2} className={props.close ? classes.gridItemFirstAnimated : classes.gridItemFirst} style={{ transition: 'flex-basis 600ms ease, max-width 600ms ease' }}>
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/'>
                        <DashboardIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Dashboard</span>
                    </Link>
                </div>
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/users'>
                        <PeopleIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Users</span>
                    </Link>
                </div>
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/settings'>
                        <SettingsIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Settings</span>
                    </Link>
                </div>
                <hr />
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/'>
                        <YoutubeSearchedForIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Search</span>
                    </Link>
                </div>
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/users'>
                        <MusicNoteIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Music
                        </span>
                    </Link>
                </div>
                <div className={classes.linkContainer}>
                    <Link className={classes.links} to='/settings'>
                        <VideocamIcon fontSize='default' className={classes.linkColor} />
                        <span className={props.close ? classes.spanAnimated : classes.span}>Video</span>
                    </Link>
                </div>
                <hr />
            </Grid>
            <Grid item xs={10} className={props.close ? classes.gridItemSecondAnimated : classes.gridItemSecond} style={{ transition: 'flex-basis 600ms ease, max-width 600ms ease' }}>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/users' component={User} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </Grid>
        </Grid >
    )
}

export default Content;