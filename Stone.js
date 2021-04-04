class Stone {

    constructor (x,y,width,height){
    
        var option = {
            restitution: 0.8,
            density: 12,
            friction: 0.9,  
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

    fill ("purple")
    stroke ("black")
    strokeWeight ("2") 
    rectMode (CENTER)
    rect ( 0,0,this.width, this.height );
    
    pop();
    
    }
    
    }