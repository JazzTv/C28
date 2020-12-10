class Slingshot 
{
    constructor(body1,point2)
    {
        var options = {
            bodyA : bird.body,
            pointB : point2,
            stiffness : .03,
            length : 10
      }
    this.Slingshot = Constraint.create(options);
    World.add(world,this.Slingshot);
    }
    display ()
    {
       if ( this.Slingshot.bodyA)
        { var firstPos = this.Slingshot.bodyA.position;
          var secondPos = this.Slingshot.pointB;

          line(firstPos.x,firstPos.y,secondPos.x,secondPos.y);
        }
    } 

    fly ()
    {
        this.Slingshot.bodyA = null;
    }
} 
