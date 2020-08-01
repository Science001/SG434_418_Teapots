import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, connect } from 'react-redux'

import './css/AuthContainer.css'
import { loginAction } from '../../redux/auth/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from '@material-ui/core/Avatar';


const mapStateToProps = (state) => {
  return {
    isLoginOnProcess: state.auth.isLoginOnProcess,
    errorMsg: state.auth.error
  }
}

const AuthContainer = ({ isLoginOnProcess, errorMsg }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    }
    console.log("Trying to log in")
    dispatch(loginAction(body))
  }

  return (
    <div className="container">
      <span style={{ fontSize: '2em' }}>{'Government of Sikkim'}</span>
      <Avatar style={{
        width: '5em',
        height: '5em',
        margin: 'auto',

      }} src={require('../../images/logo.png')} />
      <form >
        <h1>{'Login Page'}</h1>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="error">{errorMsg}</span>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={isLoginOnProcess}
          style={{ height: '3rem', marginTop: '1.5rem' }}
        >
          {isLoginOnProcess ? <CircularProgress /> : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps)(AuthContainer);