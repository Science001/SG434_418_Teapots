import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import { useDispatch, connect } from "react-redux";

import { createExam, toggleResultsPage } from "../../redux/dataEntry/actions";
import ResultEntry from "./ResultEntry";
import "./css/menuContainer.css";

const mapStateToProps = (state) => {
  return {
    enterResultsPage: state.dataEntry.enterResultsPage,
  };
};

const MenuContainer = ({ enterResultsPage }) => {
  const [examTitle, setExamTitle] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [exams, setExams] = useState(["Annual Exam"]);
  const [examName, setExamName] = useState();
  const [drafts, setDrafts] = useState(["Internal Assessment 2"]);
  const [outbox, setOutbox] = useState([]);
  const dispatch = useDispatch();

  const pushToOutbox = (exam) => {
    setExams(exams.filter((x) => x !== exam));
    setDrafts(drafts.filter((x) => x !== exam));
    setOutbox([...outbox, exam]);
  };

  const pushToDrafts = (exam) => {
    setExams(exams.filter((x) => x !== exam));
    if (!drafts.includes(exam)) setDrafts([...drafts, exam]);
  };

  window.addEventListener("online", () => setIsOnline(true));
  window.addEventListener("offline", () => setIsOnline(false));

  if (enterResultsPage)
    return (
      <ResultEntry
        examName={examName}
        pushToOutbox={pushToOutbox}
        pushToDrafts={pushToDrafts}
      />
    );
  else
    return (
      <div>
        {exams.length ? (
          <div id="exams">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#8884d8",
              }}
            >
              <Typography variant="h6">{"New Exams"}</Typography>
            </div>

            <List component="nav">
              {exams.map((exam) => (
                <ListItem
                  button
                  className="list-item"
                  onClick={() => {
                    setExamName(exam);
                    dispatch(toggleResultsPage(true));
                  }}
                >
                  <ListItemText>{exam}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        ) : (
          ""
        )}

        <Divider style={{ margin: "2em 0" }} />
        {drafts.length ? (
          <div id="drafts">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#8884d8",
              }}
            >
              <DraftsIcon style={{ marginRight: 5 }} />
              <Typography variant="h6">{"Drafts"}</Typography>
              <span style={{ marginRight: "3em" }}></span>
            </div>
            <List component="nav">
              {drafts.map((draftName) => (
                <ListItem
                  button
                  className="list-item"
                  onClick={() => {
                    setExamName(draftName);
                    dispatch(toggleResultsPage(true));
                  }}
                >
                  <ListItemText>{draftName}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        ) : (
          ""
        )}
        <Divider style={{ margin: "2em 0" }} />

        {outbox.length ? (
          <div id="outbox">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#8884d8",
              }}
            >
              <ExitToAppIcon style={{ marginRight: 5 }} />
              <Typography variant="h6">{"Outbox"}</Typography>
              <span
                style={{ marginRight: "3em", transform: "rotate(270deg)" }}
              ></span>
            </div>

            <List component="nav">
              {outbox.map((exam) => (
                <ListItem button>
                  <ListItemText>{exam}</ListItemText>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: isOnline ? "green" : "grey",
                    }}
                  >
                    <FiberManualRecordTwoToneIcon />
                    <Typography variant="body1">
                      {isOnline
                        ? "Syncing data to directorate"
                        : "Waiting for Internet"}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        ) : (
          ""
        )}
      </div>
    );
};

export default connect(mapStateToProps)(MenuContainer);
