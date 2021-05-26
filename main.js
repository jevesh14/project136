status = "";
video = "";


function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
      
    video = createCapture(380,380);
     video.hide();
}
function preload(){
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";

    found_or_not = document.getElementById("name of the object")
}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
}
function draw(){
    image(video,0,0,380,380);
}