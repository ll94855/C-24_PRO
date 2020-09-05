class PaperClass {

    constructor(x,y,radius)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50,options)


        World.add(world, this.body);
    }
    display() {
    
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipse(0,0,50,50);
      pop();
    }
}
