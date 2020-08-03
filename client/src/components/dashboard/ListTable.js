import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

import "./css/listTable.css";
import StudentModal from "./StudentModal";
import { setGradeSelected, setSchoolSelected } from '../../redux/report/actions'

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const ListTableHead = ({ order, orderBy, onRequestSort, dataHead }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {dataHead.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className="visuallyHidden">
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

ListTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const ListTable = ({ data, dataHead, title }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("rollNo");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch()

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (_event, row) => {
    if (title === 'students') setModalOpen(true);
    else if (title === 'grades') dispatch(setGradeSelected(row.grade))
    else dispatch(setSchoolSelected(row.name))
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div className="root">
      <Paper className="paper">
        <TableContainer>
          <Table
            className="table"
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <ListTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              dataHead={dataHead}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    title === 'students' ?
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.rollNo}
                      >
                        <TableCell align="center">{row.rollNo}</TableCell>

                        <TableCell
                          align="center"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.sub1}</TableCell>
                        <TableCell align="center">{row.sub2}</TableCell>
                        <TableCell align="center">{row.sub3}</TableCell>
                        <TableCell align="center">{row.sub4}</TableCell>
                        <TableCell align="center">{row.sub5}</TableCell>
                        <TableCell align="center">{row.avg}</TableCell>
                        <StudentModal
                          isOpen={modalOpen}
                          closeModal={() => setModalOpen(false)}
                          student={row}
                        />
                      </TableRow> :
                      title === 'grades' ?
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row)}
                          role="checkbox"
                          tabIndex={-1}
                          key={row.grade}
                        >
                          <TableCell align="center">{row.grade}</TableCell>
                          <TableCell align="center">{row.staff}</TableCell>
                          <TableCell align="center">{row.strength}</TableCell>
                          <TableCell align="center">{row.highest}</TableCell>
                          <TableCell align="center">{row.lowest}</TableCell>
                          <TableCell align="center">{row.avg}</TableCell>
                          <TableCell align="center">{row.pass}</TableCell>
                        </TableRow> :
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row)}
                          role="checkbox"
                          tabIndex={-1}
                          key={row.no}
                        >
                          <TableCell align="center">{row.no}</TableCell>
                          <TableCell align="center">{row.school}</TableCell>
                          <TableCell align="center">{row.strength}</TableCell>
                          <TableCell align="center">{row.district}</TableCell>
                          <TableCell align="center">{row.avg}</TableCell>
                          <TableCell align="center">{row.pass}</TableCell>
                          <TableCell align="center">{row.fail}</TableCell>
                        </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ListTable;
