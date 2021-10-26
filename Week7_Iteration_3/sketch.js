// REFERENCES 

// Inspired by a code I used from IXD: Second Year. 
// Uses elements my partner and I included in a team project!

let cam; //creates the camera
let poseNet; //sets up the camera movements
let btn1, btn2, btn3; //sets up buttons
let controller = ""; //created to set up stages
let handL, handR; //sets up left and right hand positions

let typo; //sets up font variable

let img, img2, img3; //image variables

preload = () => {

    typo = loadFont('Gilroy-Regular.otf');

    img = loadImage('img/shocked_eyes.png');
    img2 = loadImage('img/sad_eyes.png');
    img3 = loadImage('img/angry_eyes.png');

}

setup = () => {
    createCanvas(windowWidth, windowHeight);
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(windowWidth, windowHeight);
    poseNet = ml5.poseNet(cam, {
        flipHorizontal: true //flips interaction
    });
    poseNet.on('pose', gotPoses);

    handL = createVector(width / 2, height / 2);
    handR = createVector(width / 2, height / 2);

    noStroke();

    //creates & positions the buttons
    btn1 = new HButton((width/2)+300, height-350, "Shocked Eyes"); //right button
    btn2 = new HButton((width/2)-300, height-350, "Sad Eyes"); //left button
    btn3 = new HButton((width/2)+0, height-250, "Angry Eyes"); //center button


    image(img, 0, 0);
}

let gotPoses = (poses) => {
    //loop statement for controlling hand positions with camera
    //only detects if person is present
    if (poses.length > 0) {
        handL.x = lerp(poses[0].pose.keypoints[9].position.x, handL.x, 0.5);
        handL.y = lerp(poses[0].pose.keypoints[9].position.y, handL.y, 0.5);
        handR.x = lerp(poses[0].pose.keypoints[10].position.x, handR.x, 0.5);
        handR.y = lerp(poses[0].pose.keypoints[10].position.y, handR.y, 0.5);
    }
}

draw = () => {
    //flips video to match interaction
    push();
    translate(windowWidth, 0);
    scale(-1.0, 1.0);
    image(cam, 0, 0, windowWidth, windowHeight);
    scale(1.0, 1.0);
    pop();

    //fade background
    fill(180, 200);
    rect(0, 0, width, height);

    //draws buttons
    btn1.update(handL.x, handL.y, handR.x, handR.y);
    btn2.update(handL.x, handL.y, handR.x, handR.y);
    btn3.update(handL.x, handL.y, handR.x, handR.y);

    //draws hand ellipses
    fill(1, 13, 100, 100); //color
    ellipse(handL.x, handL.y, 50);
    ellipse(handR.x, handR.y, 50);

    //content
    fill(50);

    textAlign(CENTER);
    textSize(48);
    if(controller == "Shocked Eyes"){
        image(img, 500, 130, 220, 220);
    }
    if(controller == "Sad Eyes"){
        image(img2, 500, 130, 220, 220);
    }
    if(controller == "Angry Eyes"){
        image(img3, 500, 130, 220, 220);
    }

}

class HButton {
    constructor(posX, posY, label){
        this.x = posX;
        this.y = posY;
        this.label = label;
        this.hover = 0;
    }

    update(lx, ly, rx, ry){
        rectMode(CENTER);
        fill(1, 13, 110, 100);
        rect(this.x, this.y, 180, 60, 10); //size of the rect
        
        //left & right distance
        let ld = dist(this.x, this.y, lx, ly);
        let rd = dist(this.x, this.y, rx, ry);

        if(ld < 50 || rd < 50){
            this.hover += 2;
            if(this.hover>120){
                controller = this.label; //name of the buttton
                this.hover -= 6;
            }
        }else {
            if(this.hover>0) this.hover -= 6;
            if(this.hover<0) this.hover = 0;
        }
        fill(195, 90, 170);
        rect(this.x, this.y, this.hover, 40);

        rectMode(CORNERS);
        fill(255); //font color
        textFont(typo);
        textAlign(CENTER);
        textSize(24);
        text(this.label, this.x, this.y + 9);


    }
}