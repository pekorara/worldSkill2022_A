class RangeSlider{
    constructor() {
        this.step = 50;
        this.max = 1000;
        this.left = 40;
        this.right = 60;
        this.isDrag = false;
        this.direction = null;

        this.init();
    }

    init(){
        this.updateSlide();

        document.querySelector('.circle-left').addEventListener('mousedown',(e) => this.down(e,'left'))
        document.querySelector('.circle-right').addEventListener('mousedown',(e) => this.down(e,'right'))
        document.addEventListener('mousemove',e => this.move(e));
        document.addEventListener('mouseup',e => {
            this.direction = null;
            this.isDrag = false;
        });
    }

    down(e,direction){
        e.preventDefault();
        this.isDrag = true;
        this.direction = direction;
    }

    move(e){
        const rect = document.getElementById('slider').getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        let percent = Math.min(100,Math.max(0,x));
        percent = Math.round((percent / 100) * this.max / this.step) * this.step;
        percent = percent / this.max * 100;
        if (this.direction === 'left' && percent < this.right){
            this.left = percent;
        }

        if (this.direction === 'right' && percent > this.left){
            this.right = percent;
        }
        this.updateSlide();
    }
    updateSlide(){
        document.querySelector('.bar').style.left = this.left + '%';
        document.querySelector('.bar').style.width = (this.right - this.left) + '%';
        document.getElementById('leftValue').textContent = (this.left / 100) * this.max;
        document.getElementById('rightValue').textContent = (this.right / 100) * this.max;
    }
}

new RangeSlider();
// class RangeSlider {
//     constructor() {
//         this.maxValue = 1000;
//         this.step = 50;
//
//         this.leftPercent = 40;
//         this.rightPercent = 60;
//
//         this.isDragging = false;
//         this.currentHandle = null;
//
//         this.init();
//     }
//
//     init() {
//         this.updateSlider();
//         document.querySelector('.circle-left').addEventListener('mousedown', (e) => this.startDrag(e, 'left'));
//         document.querySelector('.circle-right').addEventListener('mousedown', (e) => this.startDrag(e, 'right'));
//         document.addEventListener('mousemove', (e) => this.onDrag(e));
//         document.addEventListener('mouseup', () => {
//             this.isDragging = false;
//             this.currentHandle = null;
//         });
//     }
//
//     startDrag(e, handle) {
//         e.preventDefault();
//         this.isDragging = true;
//         this.currentHandle = handle;
//     }
//
//     onDrag(e) {
//         if (!this.isDragging) return;
//         e.preventDefault();
//         const rect = document.getElementById('slider').getBoundingClientRect();
//         let percent = (e.clientX  - rect.left) / rect.width * 100;
//
//         percent = Math.max(0, Math.min(100, percent));
//
//         const value = (percent / 100) * this.maxValue;
//         const steppedValue = Math.round(value / this.step) * this.step;
//         percent = steppedValue / this.maxValue * 100;
//
//         if (this.currentHandle === 'left' && percent < this.rightPercent) {
//             this.leftPercent = percent;
//         }
//
//         if(this.currentHandle === 'right' && percent > this.leftPercent) {
//             this.rightPercent = percent;
//         }
//
//         this.updateSlider();
//     }
//
//     updateSlider() {
//         document.querySelector('.bar').style.left = `${this.leftPercent}%`;
//         document.querySelector('.bar').style.width = `${this.rightPercent - this.leftPercent}%`;
//         document.getElementById('leftValue').textContent = Math.round((this.leftPercent / 100) * this.maxValue);
//         document.getElementById('rightValue').textContent = Math.round((this.rightPercent / 100) * this.maxValue);
//     }
// }
//
//  new RangeSlider();