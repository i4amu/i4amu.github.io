  const image = document.getElementById('movingImage');
  const container = document.getElementById('containerr');
  function teleportImage() {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imageWidth = image.clientWidth;
      const imageHeight = image.clientHeight;
      const maxX = containerWidth - imageWidth;
      const maxY = containerHeight - imageHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      image.style.left = `${randomX}px`;
      image.style.top = `${randomY}px`;
  }
  setInterval(teleportImage, 9000);
  