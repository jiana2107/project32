class Polygon{
    constructor (x,y,w,h){
    var box_options={
        restitution:0.1,
        friction:0.5,
        density:1.2}
  
        this.width=w;
        this.height=h;
        this.image=loadImage("polygon1.png")
     this.body = Bodies.rectangle(x,y,w,h,box_options);
      World.add(world,this.body);
  
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         push()
         translate(pos.x,pos.y)
         //strokeWeight(4)
         //fill("lightpink")
         rotate(angle)
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         //rectMode(CENTER);
         //rect(0,0,this.width,this.height);
         pop()
     }
  
  
  }