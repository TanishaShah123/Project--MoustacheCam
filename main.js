nosex = 0;
nosey = 0;


function preload() {
    moustache = loadImage("moustache.png");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    model = ml5.poseNet(video, modelloaded);
    model.on("pose", getresult);
}

function modelloaded() {
    console.log("Model loaded");
}

function getresult(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        nosex = resultsarray[0].pose.nose.x - 20;
        nosey = resultsarray[0].pose.nose.y + 5;

    }
}

function draw() {
    image(video, 0, 0, 700, 500);
    image(moustache, nosex, nosey, 120, 70);
}

function clickimg() {
    save("Img.png");
}