function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(200, 50, 80);
    angleMode(DEGREES);
}
  
  function draw() {
    push();
    translate(-300, -300);
    rotateX(frameCount * 1);
    rotateY(frameCount * 1);
    box(30, 100);
    pop();

    push();
    translate(300, 300);
    rotateX(frameCount * 1);
    rotateY(frameCount * 1);
    fill(30, 40, 100);
    box(30, 100);
    pop();

   push();
    stroke(10);
    box(mouseX, mouseY);
    pop();

    push();
    translate(-300, -300);
    stroke(0);
    strokeWeight(20);
    line(0, 0, 600, 600);
    pop();
  }


function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-08", "png");
    }
}