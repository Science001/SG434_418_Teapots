import { createConnection } from "typeorm";
import { Academic } from "../entity/academic.entity";
import { Exam } from "../entity/exam.entity";
import { Grade } from "../entity/grade.entity";
import { Location } from "../entity/location.entity";
import { Posting } from "../entity/posting.entity";
import { Principal } from "../entity/principal.entity";
import { Result } from "../entity/result.entity";
import { School } from "../entity/school.entity";
import { Student } from "../entity/student.entity";
import { Subject } from "../entity/subject.entity";
import { Teacher } from "../entity/teacher.entity";
import { User } from "../entity/user.entity";
import { Outbox } from "../entity/outbox.entity";

const electron = require("electron");
const { app, BrowserWindow, Menu, Tray } = electron;

const path = require("path");
const url = require("url");
require("dotenv").config();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, trayIcon;
app.defQuit = false;

var mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New Entity",
        accelerator: process.platform == "darwin" ? "Command+N" : "Ctrl+N",
        click() {
          mainWindow.webContents.send("new-entity");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.defQuit = true;
          app.quit();
        },
      },
    ],
  },
  {
    label: "DevTools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator:
          process.platform == "darwin" ? "Command+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
    ],
  },
];
var trayMenuTemplate = [
  {
    label: "Restore",
    click() {
      mainWindow.show();
    },
  },
  {
    label: "Quit",
    click() {
      app.defQuit = true;
      app.quit();
    },
  },
];

// Build menu from template
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
// Insert the menu
Menu.setApplicationMenu(mainMenu);

function createMainWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    icon: __dirname + `/logo.png`,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.maximize();
  createConnection({
    type: "sqlite",
    synchronize: true,
    logging: false,
    database: "database.sqlite",
    entities: [
      Academic,
      Exam,
      Grade,
      Location,
      Posting,
      Principal,
      Result,
      School,
      Student,
      Subject,
      Teacher,
      User,
      Outbox,
    ],
  }).then(async (_connection) => {
    console.log("Connection established to SQLite");
  });

  // and load the index.html of the app.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../../build/index.html"),
      protocol: "file:",
      slashes: true,
    });
  mainWindow.loadURL(startUrl);

  // Quit app when close
  mainWindow.on("close", (e) => {
    if (!app.defQuit) {
      e.preventDefault();
      mainWindow.hide();
    } else {
      app.quit();
    }
  });

  //Tray
  trayIcon = new Tray(path.join(__dirname, "./logo.png"));
  const trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
  trayIcon.setContextMenu(trayMenu);
  trayIcon.setToolTip("Education Dashboard");
  trayIcon.on("click", () => {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createMainWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
