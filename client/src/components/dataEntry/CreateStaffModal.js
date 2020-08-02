import React, { useState } from "react";
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

const CreateStaffModal = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const body = { name: name, gender: gender };
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>{"Create Student"}</DialogTitle>
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
              <InputLabel id="gender-select-helper-label">
                {"Gender"}
              </InputLabel>
              <Select
                labelId="gender-select-helper-label"
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
                placeholder="Gender"
                value={gender}
              >
                <MenuItem value={"male"}>{"Male"}</MenuItem>
                <MenuItem value={"female"}>{"Female"}</MenuItem>
                <MenuItem value={"other"}>{"Other"}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSubmit} color="primary">
          {"Create Student"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateStaffModal;
