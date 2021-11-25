// CODE PROTOTYPE NOTES

// Example for how the installation would look if an event in the city was happening!

// Debating whether or not to include possible music in this sketch, as a preview for
// the audience.

let title = 'Concert tonight @ Scotiabank Arena!';

var video;

var vScale = 8; //scale of the pixels

function setup() {
    createCanvas(740, 580); //originally a small size 
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);

}

function draw() {
    background(122,105,51); //changed the background color

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
        textSize(29);
        fill(255);
        text(title, 140, 130);

}