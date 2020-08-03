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

import { createStaff } from '../../redux/dataEntry/actions'

const CreateStaffModal = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = () => {
    const body = { email, name, grade, password };
    console.log(body)
    dispatch(createStaff(body))
    handleClose();
  };
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>{"Create Staff"}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="grade-select-helper-label">
                {"Grade"}
              </InputLabel>
              <Select
                labelId="grade-select-helper-label"
                onChange={(e) => setGrade(e.target.value)}
                label="Grade"
                placeholder="Grade"
                value={grade}
              >
                {grades.map(grade =>
                  <MenuItem key={grade} value={grade}>{grade}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          {"Cancel"}
        </Button>
        <Button autoFocus onClick={handleSubmit} color="primary">
          {"Create Staff"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateStaffModal;
