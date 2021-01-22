class Block{
    constructor (x,y,w,h){
    var box_options={
        restitution:0.8,
        friction:1.0,
        density:1.0}
  
        this.width=w;
        this.height=h;
        this.visibility=255;
        this.image=loadImage("rectt.png")
        this.body = Bodies.rectangle(x,y,w,h,box_options);
        World.add(world,this.body);
  
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;

        if(this.body.speed<3){
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop()
             
        }else{
             World.remove(world,this.body);
             push()
             this.visibility=this.visibility-5;
             tint(255,this.visibility)
             image(this.image,pos.x,pos.y,this.width,this.height);
             pop();
           }

           
         }

         score(){
            if(this.visibility<0 && this.visibility>-1005){
              score++
            } }
       
     
  
  }