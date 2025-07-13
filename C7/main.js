const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let x = 0;
let y = 0;
let circles = [];
let hsl = 0;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

canvas.addEventListener('mousemove',e => {
    x = e.x;
    y = e.y;
    circles.push(new circle());
})

class circle{
    constructor() {
        this.x = x + (Math.random() < 0.5 ? -1 : 1) * Math.random() * 50;
        this.y = y + (Math.random() < 0.5 ? -1 : 1) * Math.random() * 50;
        this.size = Math.random() * 50;
        this.color = `hsl(${hsl},100%,50%)`;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        ctx.fill();
    }

    update(){
        if(this.size > 0.5) this.size-=0.5;
        this.draw();
    }
}

function anime(){
    requestAnimationFrame(anime);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    circles.forEach((circle,index) => {
        circle.update();
        if (circle.size <= 0.5){
            circles.splice(index,1);
        }
    })
    hsl+=5;
}

anime();