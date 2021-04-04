class Iron {

    constructor (x,y,width,height){
    
        var option = {
            restitution: 0.8,
            density: 25,
            friction: 3,  
        }
    
      this.body = Bodies.rectangle(x,y,width,height,option);
      
    
      this.width = width;
      this.height = height;

      
     
        World.add(world,this.body);
    
    }
    
    display (){
    
    var angle = this.body.angle
    var po = this.body.position 
   
    
    push();
    
   
    
    translate (po.x ,po.y)
    rotate (angle)

    fill ("silver")
    stroke ("black")
    strokeWeight ("3") 
    rectMode (CENTER)
    rect ( 0,0,this.width, this.height );
    
    pop();
    
    }
    
    }