var bullet,wall,speed,weight,wallthickness,d;

function setup() 
{

    createCanvas(1600,400)

    speed = random(223,321);
    weight = random(30,52);
    wallthickness = random(22,83);

    bullet = createSprite(150,200,100,45);
    bullet.velocityX = speed;
    wall = createSprite(1000,200,100,300);

    
}

function collide(bullet,wall)
{
   var collisionFlag = 
   ( 
        bullet.x - wall.x < bullet.width/2 + wall.width/2 && 
        wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
        bullet.y - wall.y < bullet.height/2 + wall.height/2 && 
        wall.y - bullet.y < bullet.height/2 + wall.height/2
  );

  //alert(collisionFlag);

  return collisionFlag;

}

function draw() 
{

    background("white");

    d = (0.5*weight*speed*speed)/(wallthickness*wallthickness*wallthickness);

    bullet.shapeColor = "blue";
    wall.shapeColor = "gray";

    if ( collide(bullet,wall))
    {
        bullet.velocityX = 0;
     
        if (d < 10)
        {
          bullet.shapeColor = "green";        
        }

        else 
        {
          bullet.shapeColor = "red";
        }

    }


    drawSprites();

}