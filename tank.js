class Tank
{
  constructor(x,y,rotation,angle,color)
  {
    this.x = x;
    this.y = y;
    this.spd = 0;
    this.rotation = rotation;
    this.angle = angle;
    this.reload = 0;
    this.HP = 100;
    this.inv = 100;
    this.acc = 0;
    this.break = 0;
    this.turnL = 0;
    this.turnR = 0;
    this.twistL = 0;
    this.twistR = 0;
    this.color = color;
  }

  update()
  {

    if(this.HP>0)
    {
      if(this.reload>0)this.reload--;
      this.rotation += this.turnR - this.turnL;
      this.angle += this.twistR - this.twistL;
      this.spd += (this.acc - this.break)/20;
      if(this.spd>3)this.spd = 3;
      if(this.spd<-1.5)this.spd = -1.5;
    }
    if(this.inv>0)this.inv--;
    this.spd*=0.98;
    let spdX = Math.cos(this.rotation/180*Math.PI)*this.spd;
    let spdY = Math.sin(this.rotation/180*Math.PI)*this.spd;
    this.x += spdX;
    this.y += spdY;
    if(this.x>innerWidth)this.x = innerWidth;
    if(this.y>innerHeight)this.y = innerHeight;
    if(this.x<0)this.x = 0;
    if(this.y<0)this.y = 0;
    if(this.HP<0)this.HP = 0;
    this.draw();


  }

  draw()
  {
    c.fillStyle = `hsl(${this.color},70%,${this.HP>0?50:20}%)`;
    c.translate(this.x, this.y);
    c.rotate(this.rotation/180*Math.PI);
    c.fillRect(-25,-10,50,20);
    c.strokeRect(-25,-10,50,20);
    c.fillRect(-27,-23,54,13);
    c.strokeRect(-27,-23,54,13);
    c.fillRect(-27,10,54,13);
    c.strokeRect(-27,10,54,13);
    c.rotate(-this.rotation/180*Math.PI);
    c.rotate((this.rotation+this.angle)/180*Math.PI);
    c.fillRect(-13,-13,26,26);
    c.strokeRect(-13,-13,26,26);
    c.fillRect(-3,-3,40,6);
    c.strokeRect(-3,-3,40,6);
    c.rotate(-(this.rotation+this.angle)/180*Math.PI);
    c.translate(-this.x, -this.y);

    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(this.x-30,this.y+35,60,5);
    c.fillStyle = "rgba(0,255,0,0.8)";
    c.fillRect(this.x-30,this.y+35,this.HP*0.6,5);
  }
}
