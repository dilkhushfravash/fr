class Barier{
    constructor(x, y, w,h) 
    {
      let options = {
       isStatic:true
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
     // this.color = color
      World.add(world, this.body);
    }
    remove() {
        Matter.World.remove(world, this.body);
        //bar.splice(index, 1);
//      this.body.visible = false;
      Matter.Body.setStatic(this.body, false)
    }
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      
      fill("green");
      rect(0,0, this.w, this.h);
      pop();
    }
  }
  
  