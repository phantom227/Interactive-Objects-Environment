// CODE PROTOTYPE NOTES

// Using this sketch to see how including the random color variables
// in the background instead of on the pixels, like in sketch.js for example

// This will be changed in the final design!

let title = 'Happy Easter!!';

var video;

var vScale = 16; //scale of the pixels

// random color
var c;
var e;
var f;
var a;

function setup() {
    createCanvas(740, 580); //originally a small size 
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);

}

function draw() {

    c = random(255);
    e = random(100,200);
    f = random(100);
    a = random(200,255);

    background(c, e, f, a); //changed the background color

    video.loadPixels();
    loadPixels();
    for (var y = 0; y < video.height; y++){
        for (var x = 0; x < video.width; x++) {
            var canvas = (video.width - x + 1 + (y * video.width))*4;
            var r = video.pixels[canvas+0];
            var g = video.pixels[canvas+1];
            var b = video.pixels[canvas+2];

            var bright = (r+g+b)/2;
            var w = map(bright, 0, 255, 0, vScale);

            noStroke();
            fill(92,48,135); //change color of the pixels
            rectMode(CENTER);
            ellipse(x*vScale, y*vScale, w, w); //originally a rect

            // textSize(32);
            // fill(255);
            // text(title, 10, 30);
        }
    }
    // updatePixels();
        textSize(32);
        fill(255);
        text(title, 240, 130);

}