document.addEventListener('click', (event) => {
  const image = event.target.closest('img');
  if (!image) return;

  let viewer = document.querySelector('[data-gallery-viewer]');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.dataset.galleryViewer = '';
    viewer.classList.add("img-viewer");
    viewer.addEventListener('click', () => {
      viewer.style.background = 'rgba(0,0,0,0)';
      viewer.replaceChildren();
    });
    document.body.appendChild(viewer);
  }

  const enlargedImage = document.createElement('img');
  enlargedImage.src = image.currentSrc || image.src;
  enlargedImage.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;';
  viewer.replaceChildren(enlargedImage);
  viewer.style.display = 'flex';
});