// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


// Original code created by Doug Whitton 
// Few adjustments made by myself.

/* ===
ml5 Example
PoseNet example using p5.js
=== */


let video;
let poseNet;
let poses = [];

//let song;

//function preload(){
//    song = loadSound('assets/horror_music.mp3');
//}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
//  song = loadSound('assets/horror_music.mp3');

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
    
//  song = loadSound('assets/horror_music.mp3');
}

function modelReady() {
  select('#status').html('Clown is now live');
}

//function mousePressed(){
//  song.play(); 
//  console.log(JSON.stringify(poses))
//}

function draw() {
  image(video, 0, 0, width, height);
  filter(THRESHOLD, 0.4); // Included this filter within the sketch
//  strokeWeight(2);
  noStroke();

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    const pose = poses[0].pose;
      console.log(pose);

    // Create a blue ellipse for the nose - changed the nose from pink to blue
    fill(33, 0, 243);
    const nose = pose.nose;
    ellipse(nose.x, nose.y, 50, 50); // changed size of the ellipse; originally 20, 20)

    // Create a red ellipse for the right eye // changed color fill, originally yellow
    fill(235, 5, 140);
    const rightEye = pose.rightEye;
    ellipse(rightEye.x, rightEye.y, 40, 40);

    // Create a red ellipse for the right eye
    fill(235, 5, 140);
    const leftEye = pose.leftEye;
    ellipse(leftEye.x, leftEye.y, 40, 40);
      
    // Create a green ellipse for the right shoulder  
    fill(0,255,0);
    const rightShoulder = pose.rightShoulder;
    ellipse(rightShoulder.x, rightShoulder.y, 20, 20 );
      
    //Create a green ellipse for the left shoulder - added by myself not included in the original
    fill(0,255,0);
    const leftShoulder = pose.leftShoulder;
    ellipse(leftShoulder.x, leftShoulder.y, 20, 20);  
      
    
  }
    
    
//function mouseClicked {
//    song.play();
//}
//    
//function mousePressed(){
//  song.play(); 
//  console.log(JSON.stringify(poses))
// }
}