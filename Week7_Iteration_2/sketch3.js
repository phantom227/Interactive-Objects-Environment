// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let img;
let img2;
let img3;
let img4;

let video;
let pose;

function preload(){
    img = loadImage('images/x_eyes.png');
    img2 = loadImage('images/x_eyes.png');
    img3 = loadImage('images/x_eyes.png');
    img4 = loadImage('images/x_eyes.png');
}

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
    image(video, 0, 0);
    filter(INVERT);
    if(pose){
//        fill(255,0,0);
//        noStroke();
//        ellipse(pose.nose.x, pose.nose.y, 10);
    
//    fill(200,0,0);
        
// here is where I created the code to place the "X" png files for placing on the face
    image(img,pose.leftEye.x, pose.leftEye.y, 80, 80);
    image(img2,pose.rightEye.x, pose.rightEye.y, 80, 80);
    image(img3,pose.leftEar.x, pose.leftEar.y, 35, 35);
    image(img4,pose.rightEar.x, pose.rightEar.y, 35, 35);
}
    

    
}
