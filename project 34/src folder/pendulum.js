class Pendulum{
    constructor(x, y, color){

        var options = {
           isStatic: false,
           restitution: 1,
           frictionAir: 0.005,
           density: 1
        };

        this.x = x;
        this.y = y;

    this.body = Bodies.circle(this.x, this.y, 20, options);
   
    this.color = color;
    World.add(world, this.body);
    }

    display(){
     var angle = this.body.angle;
     var position = this.body.position;
     
     push();
     translate(position.x, position.y);
     rotate(angle);
     noStroke();
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0, 0, 20);
     pop();
    }
} 