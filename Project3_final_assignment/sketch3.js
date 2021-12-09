// FINAL PROJECT SKETCHES

// PHOTO REFERENCES LINK:
// https://www.pngegg.com/en/png-wgbnx/download

let img;

var video;

var vScale = 5; //scale of the pixels

// random color
var c;
var e;
var f;
var a;

function setup() {
    createCanvas(740, 680); //originally a small size 
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);

}

function preload() {
    img = loadImage('img/easter.png');
}

function draw() {

    // c = (255);
    // e = random(50,200);
    // f = (100,250);
    // a = (200,255);

    background(190, 205, 60); //changed the background color

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
            fill(192,48,135); //change color of the pixels
            rectMode(CENTER);
            ellipse(x*vScale, y*vScale, w, w); //originally a rect

            // textSize(32);
            // fill(255);
            // text(title, 10, 30);
        }
    }
    image(img, 240, -25, 220, 200);

}