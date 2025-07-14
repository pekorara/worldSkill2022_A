(function () {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;
  lightbox.innerHTML = `
    <div style="position: relative">
      <button id="prev-btn" style="position: absolute; left: -50px; top: 50%; transform: translateY(-50%);">上一張</button>
      <img id="lightbox-image" style="max-width: 90vw; max-height: 90vh;" />
      <button id="next-btn" style="position: absolute; right: -50px; top: 50%; transform: translateY(-50%);">下一張</button>
      <button id="close-btn" style="position: absolute; top: -40px; right: 0;">&times;</button>
    </div>`;
  document.body.appendChild(lightbox);

  const [lightboxImage, prevBtn, nextBtn, closeBtn] = [
    lightbox.querySelector('#lightbox-image'),
    lightbox.querySelector('#prev-btn'),
    lightbox.querySelector('#next-btn'),
    lightbox.querySelector('#close-btn'),
  ];

  const images = [...document.querySelectorAll('img')];
  let currentIndex = -1;

  const updateImage = () => (lightboxImage.src = images[currentIndex].src);

  images.forEach((img, index) => img.addEventListener('click', () => {
    currentIndex = index;
    updateImage();
    lightbox.style.display = 'flex';
  }));

  closeBtn.addEventListener('click', () => (lightbox.style.display = 'none'));
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length - 1) % (images.length - 1);
      updateImage();
  });
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % (images.length - 1);
      updateImage();
  });
  lightbox.addEventListener('click', (e) => {
    lightbox.style.display = 'none'
  });
})();
