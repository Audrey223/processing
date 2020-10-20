let continua;
let MessapiaB;
let MessapiaR;
let X,Y;
let bg;
let z = -50;
let a = 100;
let t=0;
let value = 0;
let msg = "parce que tu tournes en rond"

function preload(){
  robotoCondensed = loadFont('assets/RobotoCondensed-Regular.ttf');
  continua = loadFont('assets/Continua-Regular.otf');
  MessapiaR = loadFont('assets/Messapia-Regular.otf');
  MessapiaB = loadFont('assets/Messapia-Bold.otf');
  img = loadImage('assets/virus.svg');
  bg = loadImage('assets/bg.png');
}

function setup(){
createCanvas(windowWidth, windowHeight);
X=width/2;
Y=height/2;
textSize(20);
textAlign(CENTER);
rectMode(CENTER);
noStroke();


 

}

function draw() {

  t = t + 0.01;
   
  textFont(MessapiaR); 

   if ((dist(mouseX, mouseY, X, Y) < windowWidth) && (mouseIsPressed )) {
      background(0,45,255,50);
    
     textSize(width / 30);
     textFont(MessapiaB); 
     for (let x = 0; x <= width; x = x + width/2) {
    for (let y = 0; y <= height; y = y + (height/10)) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 50, width, -20 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 50, height, -20 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / (width/2)) + yAngle * (y / (height/2));

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
  fill(255);
  
text("Mais reste chez toi",myX, myY);

   
    }
  }
        }else{ 
          
          background(value,70);
          textSize(width / 20);
         textFont(continua);
         for (let x = (width/2); x <= width; x = x + width) {
    for (let y = (height/2); y <= height; y = y + height) {
      // point de départ du cercle
      const xAngle = map(mouseX, 50, width, -20 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 50, height, -20 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / (width/2)) + yAngle * (y / (height/2));

      // Position ; formule maths pour le cercle x'=x+cos2pir
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
fill(255);
text("Tu voudrais sortir",myX, myY);
textSize(width /65);
text(msg,myX, myY+(height/9));
textSize(width /55);
text("Covid-19",(width/2)-40,(height/5));
textSize(width /80);
textFont(MessapiaB);
fill(200);
text("Utilise les flèches directionnel et clic !",(width/2)-40,(height/15));
   
   image(img,width/2+60,(height/5)-30,(height/20),(height/20));

   image(img,z,800,(height/30),(height/30));
z = z + 1 ;
  if (z > 2080) {
    z = height;
  }

  
    }
  }
        }
         
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    msg = "parce que tu tournes en rond";
   
  } else if (keyCode === RIGHT_ARROW) {
msg = "mauvaise idée";

  } else if (keyCode === UP_ARROW) {
    msg = "ça arrivera peut-être un jour";

   value = color(0, 0, 0,50);
  } else if (keyCode === DOWN_ARROW) {
msg = "nous tous aussi";

  }
}
