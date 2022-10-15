song1 = "";
sonng2 = "";
leftx = "";
rightx = "";
lefty = "";
righty = "";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose", gotPoses);

}

function draw(){
    image(video , 0 , 0 ,350 , 350);
}

function modelLoaded(){
    console.log("PoseNet is on");
}

function gotPoses(results){
    if(results.length > 0){
        leftx = results[0].leftWrist.pose.x
        lefty = results[0].leftWrist.pose.y
        rightx = results[0].rightWrist.pose.x
        righty = results[0].rightWrist.pose.y
    }
}
