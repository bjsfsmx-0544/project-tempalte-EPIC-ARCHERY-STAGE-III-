const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

// Declarar un arreglo para las flechas playerArrows = [ ]
var playerArrows = [];

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 
 for (var i=0; i<playerArrows; i++) 
 {
 showArrows(i, playerArrows);
 }






}

/*********** Elije la función keyPressed() correcta de las siguientes opciones *************/

function keyPressed() {
  if(keyCode === 32){
    // crea un objeto arrow e insértalo en la matriz
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body
    var arrow = new PlayerArrow(posX, posY, 100, 10);
    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body);
    playerArrows.push(arrow);
  }
}






function keyReleased () {

  if(keyCode === 32){
    // Llama a la función shoot() por cada flecha en el arreglo playerArrows
    if (playerArrows.length) {
      var angle = playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
// Mostrar flecha y trayectoria
function showArrows(index, arrows) {
  arrows[index].display();
  
    
  
 

}
