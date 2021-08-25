class Stricker{
    constructor(x, y, width, height){

        var options = {
            isStatic: true,
            restitution: 0.2,
            friction: 1.0,
            density: 1.0

        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("polygon.png");
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
        
    }
    display(){

        var sPos = this.body.position;
        push();
        translate(sPos.x, sPos.y);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height)
        pop();

    }

}