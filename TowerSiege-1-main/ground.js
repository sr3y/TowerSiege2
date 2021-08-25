class Ground{
    constructor(x, y, width, height){

        var options = {
            isStatic: true
        
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
        
    }
    display(){

        var gPos = this.body.position;
        push();
        translate(gPos.x, gPos.y);
        rectMode(CENTER);
        fill(44, 154, 92);
        rect(0, 0, this.width, this.height)
        pop();

    }

}