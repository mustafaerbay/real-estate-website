<script>
    import { Col } from "@sveltestrap/sveltestrap";

    export let images = [];

    let selectedImageIndex = 0;

    function nextImage() {
        selectedImageIndex =
            (selectedImageIndex + 1) % images.length;
    }

    function previousImage() {
        selectedImageIndex =
            selectedImageIndex === 0
                ? images.length - 1
                : selectedImageIndex - 1;
    }
</script>

<Col md="6">
    <div class="image-gallery">
        <div class="main-image-container">
            <button class="nav-button prev" on:click={previousImage}
                >&lt;</button
            >
            <img
                src={images[selectedImageIndex].src}
                alt="Main car view"
                class="main-image"
            />
            <button class="nav-button next" on:click={nextImage}
                >&gt;</button
            >
        </div>
        <div class="thumbnails">
            {#each images as image, i}
                <img
                    src={image.src}
                    alt="Car thumbnail {i + 1}"
                    class="thumbnail"
                    class:active={selectedImageIndex === i}
                    on:click={() => (selectedImageIndex = i)}
                />
            {/each}
        </div>
    </div>
</Col>

<style>
    .image-gallery {
        margin-bottom: 2rem;
    }

    .main-image-container {
        position: relative;
        height: 400px;
        margin-bottom: 1rem;
    }

    .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-button:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .thumbnails {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding: 10px 0;
    }

    .thumbnail {
        width: 80px;
        height: 60px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0.6;
        transition: opacity 0.2s;
    }

    .thumbnail.active,
    .thumbnail:hover {
        opacity: 1;
    }

    :global(.card) {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    :global(.table th) {
        text-transform: capitalize;
    }
</style>
