class Paper{

    constructor(){
        var options = {
            isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
this.body = Bodies.circle(100,600,3,options)
this.radius=3


World.add(world,this.body)
    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    
    pop();
}



}
