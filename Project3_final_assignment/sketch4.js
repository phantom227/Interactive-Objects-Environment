// FINAL PROJECT SKETCHES

// PHOTO REFERENCES LINK:
// https://www.pngegg.com/en/png-wgbnx/download

// SONG REFERENCE
// 'Save Your Tears Remix' song made by the Weeknd, featuring Ariana Grande

let title = 'Performing @ Scotiabank Arena, 7PM EST'

let img;

let gilroy;

let song;

// var audio = new Audio('assets/song.mp3');

var video;

var vScale = 3; //scale of the pixels

function preload() {
    img = loadImage('img/concert.png');
    gilroy = loadFont('Gilroy-Regular.otf');
    song = loadSound('assets/song.mp3');
    // song = loadSound('assets/song.mp3');

    // song.play();
}

function setup() {
    createCanvas(740, 680); // originally a small size 
    // song.play(); // song.play() must be placed after createCanvas if it is to automatically play.
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
    // song.play();

}

// function checkLoad() {
//     loaded++;
//     if (loaded == itemsToLoad) {
//         audio.play();
//         console.log('music playing');
//     }
// }

// function loaded() {
//     song.play();
// } 

function draw() {
    background(82,135,151); //changed the background color

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
            fill(92,48,175); //change color of the pixels
            rectMode(CENTER);
            ellipse(x*vScale, y*vScale, w, w); //originally a rect

            // textSize(32);
            // fill(255);
            // text(title, 10, 30);
        }
    }
    image(img, 240, -25, 220, 200);

    textSize(29);
    textFont(gilroy);
    fill(255);
    text(title, 70, 630);

}

function mousePressed() {

    song.play();
    
}