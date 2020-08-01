import React from 'react';
import { connect, useDispatch } from 'react-redux'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { closeToast } from '../redux/toast/actions'

const mapStateToProps = (state) => {
    return {
        open: state.toast.toastVisibility,
        message: state.toast.message,
        isError: state.toast.isError
    }
}

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snacky = ({ open, message, isError }) => {
    const dispatch = useDispatch()
    return (
        <Snackbar open={open} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={() => dispatch(closeToast())}>
            <Alert onClose={() => dispatch(closeToast())} severity={isError ? 'error' : 'success'}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default connect(mapStateToProps)(Snacky);