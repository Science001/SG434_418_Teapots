import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";

const mapStateToProps = (state) => {
  return {
    subjects: state.dataEntry.subjects,
  };
};

const ResultEntry = ({ subjects }) => {
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
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect(mapStateToProps)(ResultEntry);
