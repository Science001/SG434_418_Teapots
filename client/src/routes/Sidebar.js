import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip, Avatar } from "@material-ui/core";

import { logoutAction } from "../redux/auth/actions";
import Dashboard from "../components/dashboard/Dashboard";
import MenuContainer from "../components/dataEntry/MenuContainer";
import { deepOrange } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(6) + 1,
    [theme.breakpoints.up("sm")]: {
      width: 68,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const mapStateToProps = (state) => {
  return {
    lastUpdatedTime: state.report.lastUpdatedTime,
    currentUser: state.auth.currentUser,
  };
};

const Sidebar = ({ lastUpdatedTime, currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const logOut = () => {
    dispatch(logoutAction());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {"Data Storage and Analytics Dashboard"}
          </Typography>
          <Typography>{lastUpdatedTime}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={9} style={{ fontSize: "1.2em" }}>
            <Tooltip title={currentUser.email.split("@")[0]}>
              <ListItemIcon>
                <Avatar
                  className={classes.orange}
                  style={{ backgroundColor: deepOrange[500] }}
                >
                  {currentUser.email[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              title={currentUser.email.split("@")[0]}
              primary={currentUser.email.split("@")[0]}
            />
          </ListItem>
          <ListItem
            button
            key={0}
            style={{ fontSize: "1.2em" }}
            onClick={() => setActive(0)}
          >
            <Tooltip title="Dashboard">
              <ListItemIcon style={{ color: active === 0 ? "#5469d4" : "" }}>
                <DashboardIcon style={{ fontSize: "1.85em" }} />
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              style={{ color: active === 0 ? "#5469d4" : "" }}
              title="Dashboard"
              primary={"Dashboard"}
            />
          </ListItem>
          {currentUser.role === "teacher" && (
            <ListItem
              button
              key={1}
              style={{ fontSize: "1.2em" }}
              onClick={() => setActive(1)}
            >
              <Tooltip title="Data Entry">
                <ListItemIcon style={{ color: active === 1 ? "#5469d4" : "" }}>
                  <AddToQueueIcon style={{ fontSize: "1.85em" }} />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                style={{ color: active === 1 ? "#5469d4" : "" }}
                title="Data Entry"
                primary={"Data Entry"}
              />
            </ListItem>
          )}
        </List>
        <List
          style={{
            bottom: "0",
            position: "absolute",
            marginBottom: "1em",
          }}
        >
          <ListItem
            button
            key={2}
            style={{ fontSize: "1.2em" }}
            onClick={logOut}
          >
            <Tooltip title="Logout">
              <ListItemIcon>
                <ExitToAppIcon style={{ color: "red", fontSize: "1.85em" }} />
              </ListItemIcon>
            </Tooltip>
            <ListItemText title="Log Out" primary={"Log Out"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {active === 0 ? <Dashboard /> : <MenuContainer />}
      </main>
    </div>
  );
};
export default connect(mapStateToProps)(Sidebar);
