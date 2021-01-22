class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 1.5
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(5);
        push()
        stroke("green")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
    }}
    fly(){
      this.sling.bodyA=null;

    }
    attach(body){
        this.sling.bodyA = body;}
    }