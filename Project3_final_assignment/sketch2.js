// FINAL PROJECT SKETCHES

// PHOTO REFERENCES LINK:
// https://www.pngegg.com/en/png-wgbnx/download

// MUSIC REFERENCE FROM:
// https://freesound.org/

let img;

let song;

var video;

var vScale = 10; //scale of the pixels

function preload() {
    img = loadImage('img/new_years.png');
    song = loadSound('assets/song_2.mp3');

}

function setup() {
    createCanvas(740, 680); //originally a small size 
    song.play();
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);

}

// function preload() {
//     img = loadImage('img/new_years.png');
// }

function draw() {
    background(92,48,135); //changed the background color

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
            fill(122,105,51); //change color of the pixels
            rectMode(CENTER);
            ellipse(x*vScale, y*vScale, w, w); //originally a rect

            // textSize(32);
            // fill(255);
            // text(title, 10, 30);
        }
    }
    image(img, 240, 10, 220, 200);

}

function mousePressed() {
    song.play();
}