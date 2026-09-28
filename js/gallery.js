document.addEventListener('click', (event) => {
  const image = event.target.closest('img');
  if (!image) return;

  let viewer = document.querySelector('[data-gallery-viewer]');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.dataset.galleryViewer = '';
    viewer.classList.add("img-viewer");
    viewer.addEventListener('transitionend', (event) => {
      if (event.target !== viewer || viewer.classList.contains('is-visible')) return;
      viewer.style.display = 'none';
      viewer.replaceChildren();
    });
    viewer.addEventListener('click', () => {
      viewer.classList.remove('is-visible');
    });
    document.body.appendChild(viewer);
  }

  const enlargedImage = document.createElement('img');
  enlargedImage.src = image.currentSrc || image.src;
  enlargedImage.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;';
  viewer.replaceChildren(enlargedImage);
  viewer.style.display = 'flex';
  requestAnimationFrame(() => viewer.classList.add('is-visible'));
});