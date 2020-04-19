var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

window.addEventListener('keydown',(e)=>
{
  if(e.keyCode == '65')
    tank1.turnL = 1;
  if(e.keyCode == '68')
    tank1.turnR = 1;
  if(e.keyCode == '74')
    tank1.twistL = 1;
  if(e.keyCode == '76')
    tank1.twistR = 1;
  if(e.keyCode == '87')
    tank1.acc = 1;
  if(e.keyCode == '83')
    tank1.break = 1;
  if(e.keyCode == '32' && tank1.reload == 0 && tank1.HP > 0)
  {
    tank1.reload = 100;
    bullets.push(new Bullet(tank1.x,tank1.y,tank1.angle+tank1.rotation,tank2));
  }
  if(e.keyCode == '37')
    tank2.turnL = 1;
  if(e.keyCode == '39')
    tank2.turnR = 1;
  if(e.keyCode == '97')
    tank2.twistL = 1;
  if(e.keyCode == '99')
    tank2.twistR = 1;
  if(e.keyCode == '38')
    tank2.acc = 1;
  if(e.keyCode == '40')
    tank2.break = 1;
  if(e.keyCode == '96' && tank2.reload == 0 && tank2.HP > 0)
  {
    tank2.reload = 100;
    bullets.push(new Bullet(tank2.x,tank2.y,tank2.angle+tank2.rotation,tank1));
  }
});

window.addEventListener('keyup',(e)=>
{
  if(e.keyCode == '65')
    tank1.turnL = 0;
  if(e.keyCode == '68')
    tank1.turnR = 0;
  if(e.keyCode == '74')
    tank1.twistL = 0;
  if(e.keyCode == '76')
    tank1.twistR = 0;
  if(e.keyCode == '87')
    tank1.acc = 0;
  if(e.keyCode == '83')
    tank1.break = 0;
  if(e.keyCode == '37')
    tank2.turnL = 0;
  if(e.keyCode == '39')
    tank2.turnR = 0;
  if(e.keyCode == '97')
    tank2.twistL = 0;
  if(e.keyCode == '99')
    tank2.twistR = 0;
  if(e.keyCode == '38')
    tank2.acc = 0;
  if(e.keyCode == '40')
    tank2.break = 0;
});

function getDistance(x1,y1,x2,y2)
{
  return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

var bullets = [];

var tank1 = new Tank(100,innerHeight/2,0,0,'0',tank2);
var tank2 = new Tank(innerWidth-100,innerHeight/2,-180,0,'200');

function animate()
{
  c.clearRect(0,0,innerWidth,innerHeight);
  tank1.update();
  tank2.update();
  bullets.forEach((e)=>{e.update();});
  window.requestAnimationFrame(animate);
}
animate();
