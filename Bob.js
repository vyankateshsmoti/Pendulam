class Bob{
    constructor(x,y,RADIUS){
        var options = {
            restitution:1,
            friction:2,
            density:4,
            isStatic : false
            
        }
        this.body = Bodies.circle(x,y,RADIUS,options);
        this.radius = RADIUS;
        
        //this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
   display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("yellow")
    ellipse(0,0,this.radius);
    pop();


   }
}