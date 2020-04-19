class Bullet
{
  constructor(x,y,angle,enemyTank)
  {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.state = 0;
    this.radius = 0;
    this.opacity = 1;
    this.et = enemyTank;
  }

  update()
  {
    if(this.state == 0)
    {
      this.x += Math.cos(this.angle/180*Math.PI)*10;
      this.y += Math.sin(this.angle/180*Math.PI)*10;
      if(getDistance(this.x,this.y,this.et.x,this.et.y)<30 && this.et.inv == 0)
      {
        this.et.HP -= 30;
        this.et.inv = 30;
        this.state = 1;
      }
    }
    else if(this.state == 1)
    {
      this.radius+=3;
      this.opacity-=0.05;
      if(this.opacity <= 0)
        this.state = 2;
    }
    this.draw();
  }

  draw()
  {
    if(this.state == 0)
    {
      c.fillStyle = "black";
      c.beginPath();
      c.arc(this.x,this.y,4,0,Math.PI*2);
      c.fill();
    }
    else if(this.state == 1)
    {
      c.fillStyle = `rgba(255,0,0,${this.opacity})`;
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2);
      c.fill();
      c.fillStyle = `rgba(255,150,0,${this.opacity/2})`;
      c.beginPath();
      c.arc(this.x,this.y,this.radius/4*3,0,Math.PI*2);
      c.fill();
      c.fillStyle = `rgba(255,255,0,${this.opacity/3})`;
      c.beginPath();
      c.arc(this.x,this.y,this.radius/2,0,Math.PI*2);
      c.fill();
    }
  }
}
