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

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
require('dotenv').config();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1024, height: 800 });
    mainWindow.maximize();

    createConnection({
        "type": "sqlite",
        "synchronize": true,
        "logging": false,
        "database": `database.sqlite`,
        "entities": [
            Academic, Exam, Grade, Location, Posting, Principal, Result, School, Student, Subject, Teacher, User,
        ]
    }).then(async connection => {
        console.log("Connection established to SQLite")
        const academic = await connection.getRepository(Academic).find();
        console.log("academic:", academic)
        const exam = await connection.getRepository(Exam).find();
        console.log("exam:", exam)
        const grade = await connection.getRepository(Grade).find();
        console.log("grade:", grade)
        const location = await connection.getRepository(Location).find();
        console.log("location:", location)
        const posting = await connection.getRepository(Posting).find();
        console.log("posting:", posting)
        const principal = await connection.getRepository(Principal).find();
        console.log("principal:", principal)
        const result = await connection.getRepository(Result).find();
        console.log("result:", result)
        const school = await connection.getRepository(School).find();
        console.log("school:", school)
        const student = await connection.getRepository(Student).find();
        console.log("student:", student)
        const subject = await connection.getRepository(Subject).find();
        console.log("subject:", subject)
        const teacher = await connection.getRepository(Teacher).find();
        console.log("teacher:", teacher)
        const user = await connection.getRepository(User).find();
        console.log("user:", user)
    });

    // and load the index.html of the app.
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.