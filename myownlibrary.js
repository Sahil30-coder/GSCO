 function isTouching(object1,object2){
    if (gameobject1.x - object2.x < object2.width/2 + gtameobject1.width/2 
    && object2.x-gameobjectobject1.x < object2.width/2 + gameobject1.width/2 
    && gameobject1.y - object2.y < object2.height/2 + gameobject1.height/2 
    && object2.y-gameobject1.y < object2.height/2 + gameobject1.height/2 )
        {
        return true;
        } 
    else {
        return false;
     
        }
    }



    function bounceOff(object1,object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2 
        && object2.x-object1.x < object2.width/2 + object1.width/2 ){
            object1.velocityX = object1.velocityX* (-1);
            object2.velocityX = object2.velocityX* (-1);

        }
        if( object1.y - object2.y < object2.height/2 + object1.height/2 
        && object2.y-object1.y < object2.height/2 + object1.height/2 ){
            object1.velocityY = object1.velocityY* (-1);
            object2.velocityY = object2.velocityY* (-1);
        }
    };



