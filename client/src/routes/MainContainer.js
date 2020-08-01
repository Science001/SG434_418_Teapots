import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import AuthContainer from '../components/auth/AuthContainer';
import Sidebar from './Sidebar'
import { whoami } from '../redux/auth/actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        isInitializing: state.auth.isInitializing,
    }
}

const useStyles = makeStyles((theme) => ({
    fullScreenDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
    },
}));

const MainContainer = ({ currentUser, isInitializing }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(whoami())
    }, [dispatch])

    return isInitializing ?
        <div className={classes.fullScreenDiv}>
            <CircularProgress />
        </div>
        : currentUser ? <Sidebar /> : <AuthContainer />
}

export default connect(mapStateToProps)(MainContainer);