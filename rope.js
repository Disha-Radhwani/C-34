class Rope{

    constuctor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250

        }

        
        this.rope=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.rope)
    }
    attach(body){
        this.rope.bodyA=body
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){
        if(this.rope.bodyA){



        
           push();
            line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);
            pop();
    }
    }



}