document.addEventListener('click', (event) => {
  const image = event.target.closest('img');
  if (!image) return;

  let viewer = document.querySelector('[data-gallery-viewer]');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.dataset.galleryViewer = '';
    viewer.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.85);z-index:9999;padding:2rem;box-sizing:border-box;cursor:pointer;';
    viewer.addEventListener('click', () => {
      viewer.style.display = 'none';
      viewer.replaceChildren();
    });
    document.body.appendChild(viewer);
  }

  const enlargedImage = document.createElement('img');
  enlargedImage.src = image.currentSrc || image.src;
  enlargedImage.alt = image.alt;
  enlargedImage.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;';
  viewer.replaceChildren(enlargedImage);
  viewer.style.display = 'flex';
});