// FINAL PROJECT SKETCHES

// PHOTO REFERENCES LINK:
// https://www.pngegg.com/en/png-wgbnx/download

let img;

var video;

var vScale = 8; //scale of the pixels


// random color
var c;
var e;
var f;
var a;

function setup() {
    createCanvas(740, 680); //originally a small size 
    pixelDensity(5);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);

}

function preload() {
    img = loadImage('img/christmas.png');
}

function draw() {
    background(12,65,51); //changed the background color

    c = random(255);
    e = random(100,200);
    f = random(100);
    a = random(200,255);

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
            // fill(112,98,55); //change color of the pixels
            fill(c, e, f, a); //testing to see how randomize would make it look
            rectMode(CENTER);
            ellipse(x*vScale, y*vScale, w, w); //originally a rect

            // textSize(32);
            // fill(255);
            // text(title, 10, 30);
        }
    }
    // updatePixels();
        image(img, 220, 30, 280, 200);

}