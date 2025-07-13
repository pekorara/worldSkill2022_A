const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const sprite = new Image();
sprite.src = 'firework_sprites.png'; // 換成你那張圖片的檔名

const frameWidth = 500;
const frameHeight = 300;

let currentFrame = 0;

sprite.onload = () => {
    const sourceX = currentFrame * frameWidth;

    ctx.drawImage(
        sprite,
        sourceX, 0,
        frameWidth, frameHeight,
        0, 0,
        frameWidth, frameHeight
    );
};
// sprite.onload = () => {
//     const totalFrames = Math.floor(sprite.width / frameWidth);
//
//     const animate = () => {
//         ctx.clearRect(0, 0, frameWidth, frameHeight);
//
//         // 計算 sourceX：在原圖上的水平位置
//         const sourceX = currentFrame * frameWidth;
//
//         ctx.drawImage(
//             sprite,               // 原圖
//             sourceX, 0,           // sourceX, sourceY（從原圖哪裡開始擷取）
//             frameWidth, frameHeight,  // 擷取區域大小
//             0, 0,                 // canvas 上放置的位置
//             frameWidth, frameHeight   // 放到 canvas 上的大小
//         );
//
//         currentFrame++;
//         if (currentFrame < totalFrames) {
//             setTimeout(animate, 100); // 控制幀率
//         }
//     };
//
//     animate();
// };