var RaspiCam = require("raspicam");
var pictureFilename = "/home/pi/MAURICIO/nodeJS/CamaraModule/image.jpg";

var camera = new RaspiCam({
    mode: "photo",
    output: pictureFilename,
    encoding: "jpg",
    timeout: 0 // take the picture immediately
});

camera.on("started", function( err, timestamp ){
    console.log("photo started at " + timestamp );
});

camera.on("read", function( err, timestamp, filename ){
     if(!err) {
        console.log('Photo taken and saved');
    } else {
        console.log('Error taking photo!');
    }
    camera.stop();
});

camera.on("exit", function( timestamp ){
    console.log("photo child process has exited at " + timestamp );
});

camera.start();