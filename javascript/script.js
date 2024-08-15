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


document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '<p>En este servidor tenemos, una economía tanto de compra y venta de ítems, estos pueden ser comprados con el mismo dinero del juego, contamos también con una tienda a través de comandos donde podrá comprar o vender sus objetos dependiendo cual sea su necesidad. Contamos también con comandos básicos y avanzados, tales como teletransporte, para ir a la tienda online, para hablar a privado o para estadísticas y, o trabajos entre otras cosas más. Por otro lado, también contamos con varios modos de juego como: modo supervivencia, este modo de juego son para quienes le gustan los retos para sobrevivir desde cero en un mundo abierto. En PVP es para aquellos jugadores que les gusta el combate, donde podrán pelear contra un o mas jugadores en simultaneo, en ocasiones tendremos eventos para aquellos que quieran ganar varios premios por enfrentarse a varios jugadores. Contamos con rangos premium que pueden ser adquiridos por buenos precios a través de nuestra tienda online, los cuales contienen varios beneficios para el jugador. Contamos con, servicio de soporte y reporte en la plataforma de Discord para aquel usuario que tenga un problema pueda dejar constancia de el en soporte para denunciar abusos de la administración, usuarios o algún bug que afecte a la experiencia del jugador, sostenemos en tener un buen equipo de administración que buscará dar el mejor servicio y soporte posible hacia el usuario. </p>';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '<p>Politica de rembolsos (Redactar un texto que diga que no se acepta ninguna devolucion)</p>';
});

document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '<p>Fotos y descripcion de nuevas cosas agregadas al servidor</p><img class="anuncios" src="imagenes/alexm.png" alt="">';
});
