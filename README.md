# DigiLecture 

*Why go to your 8AM in person, when you could attend it from your bed instead?* 👨‍🎓🛏

## Overview 

DigiLecture is a virtual reality lecture hall where you can attend pre-recorded lectures from the comfort of your own home! 

Using [Express](https://expressjs.com/), [EJS](http://ejs.co/), and Mozilla's Web VR library, [A-Frame](https://aframe.io/), we created a web app where you can choose from a selection of courses, and enter a virtual lecture hall to watch them! While it was originally created as an interface for Cornell University's [VideoNote](http://www.videonote.com/), with your own manifest, you can stream whatever you'd like. 

DigiLecture was created by Michael Lucido and Serge-Olivier Amega during Cornell University's student hackathon, [Big Red Hacks](https://bigredhacks.com/), in Fall 2017. 

## Getting Started

    npm install 
    npm start // server will start on port 1337

## Notes

* DigiLecture was designed for the Google Daydream View, however it should be able to support  headsets that have controllers [with at least 3DOF](https://aframe.io/docs/0.6.0/components/laser-controls.html). 