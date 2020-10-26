 var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
  var boundar1,boundary2,boundary3;
  var speed,weight;




  function setup() { 
    createCanvas(600,600); 
    
    speeed=random(55,90);
    weight=random(400,1500);


    car1=createSprite(150,150,50,50);
    car1.shapeColor = "white";
    car1.velocityX = speed;

    car2=createSprite(150,350,50,50);
    car2.shapeColor = "white";
    car2.velocityX = speed;


    car3=createSprite(150,450,50,50);
    car3.shapeColor = "white";
    car3.velocityX = speed;


    car4=createSprite(150,600,50,50);
    car4.shapeColor = "white";
    car4.velocityX = speed;



    wall1=createSprite(600,150,50,50);
     wall1.shapeColor = "gray";

    wall2=createSprite(600,300,50,50);
    wall2.shapeColor = "gray";


    wall3=createSprite(600,450,50,50);
    wall3.shapeColor = "gray";


   wall4=createSprite(600,600,50,50);
    wall4.shapeColor = "gray";



     boundary1=createSprite(200,100,50,50);
     boundary1.shapeColor = "white";

    boundary2=createSprite(350,100,50,50);
    boundary2.shapeColor = "white";


    boundary3=createSprite(500,100,50,50);
    boundary3.shapeColor = "white";


    }
    




   function draw()
    {
    background("black");
    

    if(isTouching(gameObject1,,wall1)){
     (car1.x - wall1.x= <100);
             car1.shapeColor = "blue";

    }
    
     if(isTouching(car2,wall2)){
     (car2.x - wall1.x= <100);
             car2.shapeColor = "yellow";

    }   
    if(isTouching(car3,wall3)){
    (car3.x - wall1.x= <100&&>180);
             car3.shapeColor = "red";

    }
    if(isTouching(car4,wall4)){
     (car4.x - wall1.x= <180);
             car4.shapeColor = "green";

    }

    }
    
      


    }

    drawSprites(); 
   }
      

   






