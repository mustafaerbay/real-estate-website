<script>
    export let images = [];
    let currentIndex = 0;
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  </script>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
  
    @media (min-width: 1025px) {
      .carousel {
        width: 300px;
        height: 100%;
      }
    }
  
    .carousel img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease-in-out;
    }
  
    .carousel-controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }
  
    .carousel-controls button {
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border: none;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
  </style>
  
  <div class="carousel">
    {#if images.length > 0}
      <img src={images[currentIndex].src} alt="Image {currentIndex + 1}" />
      <div class="carousel-controls">
        <button on:click={prevImage}>&lt;</button>
        <button on:click={nextImage}>&gt;</button>
      </div>
    {/if}
  </div>
  