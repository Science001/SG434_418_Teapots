import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  TextField,
} from "@material-ui/core";

import { fetchStudents } from '../../redux/dataEntry/actions'

const mapStateToProps = (state) => {
  return {
    subjects: state.dataEntry.subjects,
    students: state.dataEntry.students,
  };
};

const ResultEntry = ({ students, subjects }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

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
            {students.map((student, idx) =>
              <TableRow key={idx + 1}>
                <TableCell>{idx}</TableCell>
                <TableCell>{student}</TableCell>
                {subjects.map((subject, idx) => (
                  <TableCell key={idx}>
                    <TextField label={subject} />
                  </TableCell>
                ))}
              </TableRow>)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect(mapStateToProps)(ResultEntry);
