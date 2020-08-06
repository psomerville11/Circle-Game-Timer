let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  c = color (50, 55, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  time = 1000;
  gameIsOver = false;
  score = 0
  myButton = new Clickable();     //Create button 
  myButton.onPress = reset; 
  myButton.locate(300, 300);        //Position Button 
}

  
function reset(){
  
  time = 1000
  score = 0// 
   } 
function draw() {
  background(backgroundColor);
  ellipse(coinX, coinY, 20);
  fill('red')
  ellipse(mouseX, mouseY, 20);
  fill('red')
  text(`Score: ${score}`,20 ,20)
  fill('blue')
  text(`Time remaining: ${time}`, 20, 40);
  fill('red')
  handleTime();
  
  myButton.draw(); // <- Draw the 'myButton' Clickable
  
  hit = collideCircleCircle(mouseX, mouseY, 20, coinX, coinY, 20);
  if (hit) {
    handleCollision();
    
  
  }
}


function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if (!gameIsOver){
     score += 1
     coinX = random(width);
     coinY = random(height);
     
  }
}

function handleTime() {
  // We'll write code to handle the time.
  if (time > 0) {
    time--;
  } else {
    gameIsOver = true;
    text('Game is over', 20, 60);
  }
}