import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { createSchool } from '../../redux/dataEntry/actions'

const CreateSchoolModal = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("")
  const [principalName, setPrincipalName] = useState("")
  const [principalEmail, setPrincipalEmail] = useState("")
  const [principalPassword, setPrincipalPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = () => {
    const principal = {
      name: principalName,
      email: principalEmail,
      password: principalPassword
    }
    const body = { name, division, principal };
    console.log(body)
    dispatch(createSchool(body))
    handleClose();
  };

  const divisionValues = ['Mangan', 'Pakyong', 'Chungthang', 'Gyalshing', 'Namchi', 'Gangtok', 'Rongli', 'Soreng', 'Ravong']

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>{"Create School"}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="School Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="division-select-helper-label">
                {"Division"}
              </InputLabel>
              <Select
                labelId="division-select-helper-label"
                onChange={(e) => setDivision(e.target.value)}
                label="Division"
                placeholder="Division"
                value={division}
              >
                {divisionValues.map(div =>
                  <MenuItem key={div} value={div}>{div}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider variant="middle" style={{ margin: '1rem 0' }} />
        <Typography align='center' style={{ marginBottom: '1rem' }} >{'Principal Details'}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={principalName}
              onChange={(e) => setPrincipalName(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              value={principalEmail}
              onChange={(e) => setPrincipalEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={principalPassword}
              onChange={(e) => setPrincipalPassword(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          {"Cancel"}
        </Button>
        <Button autoFocus onClick={handleSubmit} color="primary">
          {"Create School"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSchoolModal;
