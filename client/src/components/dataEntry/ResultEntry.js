import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Table,
  TableHead,
  Button,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  TextField,
} from "@material-ui/core";

import {
  fetchStudents,
  toggleResultsPage,
} from "../../redux/dataEntry/actions";

const mapStateToProps = (state) => {
  return {
    subjects: state.dataEntry.subjects,
    students: state.dataEntry.students,
  };
};

const ResultEntry = ({
  examName,
  students,
  subjects,
  pushToDrafts,
  pushToOutbox,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchStudents());
  }, [dispatch]);
  const handleSave = () => {
    pushToDrafts(examName);
    dispatch(toggleResultsPage(false));
  };
  const handleSubmit = () => {
    pushToOutbox(examName);
    dispatch(toggleResultsPage(false));
  };
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{"No"}</TableCell>
              <TableCell>{"Name"}</TableCell>
              {subjects.map((subject, idx) => (
                <TableCell key={idx}>{subject}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{student}</TableCell>
                {subjects.map((subject, idx) => (
                  <TableCell key={idx}>
                    <TextField label={`${subject} Marks`} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        style={{ float: "right", marginTop: "2em" }}
        color="primary"
        onClick={() => handleSubmit()}
      >
        {"Publish"}
      </Button>
      <Button
        variant="outl"
        color="primary"
        onClick={handleSave}
        style={{ float: "right", marginRight: "2em", marginTop: "2em" }}
      >
        {"Save as Draft"}
      </Button>
    </div>
  );
};

export default connect(mapStateToProps)(ResultEntry);
