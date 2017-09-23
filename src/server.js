const express = require('express');
const path = require('path');
const fs = require('fs');

const manifest = require('../manifest');

const manifestString = JSON.stringify(manifest);
const port = process.env.PORT || 1337;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render("index", manifest);
});

app.get('/course/:semesterid/:courseid', (req, res) => {
  const semesterid = req.params.semesterid;
  const courseid = req.params.courseid;
  if (semesterid == null || courseid == null) {
    res.send("no semesterid or courseid");
    return;
  }
  const course = manifest.semesters[semesterid].courses[courseid];
  if (course == null) {
    res.send("course not found");
    return;
  }
  res.render("course", {semesterid: semesterid, courseid: courseid, course: course});
});

app.get('/video/:semesterid/:courseid/:videoid', (req, res) => {
  if (req.params.semesterid == null ||
      req.params.courseid == null ||
    req.params.videoid == null) {
    res.send("invalid params");
    return;
  }
  const video = manifest.semesters[req.params.semesterid]
    .courses[req.params.courseid]
    .videos[req.params.videoid];
  if (video == null) {
    res.send("video not found.");
  }
  res.render("player", {video: video})
});

app.get('/manifest', (req, res) => {
  res.send(manifestString);
});


app.listen(port, () => {
  console.log(`Starting on port ${port}!`);
});


