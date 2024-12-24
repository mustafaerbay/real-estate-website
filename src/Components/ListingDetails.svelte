<script lang="ts">
    import type { Property } from "@types";

    export let listing: Property;

    let currentIndex = 0;

    function prevImage() {
        currentIndex =
            (currentIndex - 1 + listing.media.images.length) %
            listing.media.images.length;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % listing.media.images.length;
    }
</script>

<div class="listing-details">
    <h2>{listing.title}</h2>
    <div class="image-carousel column">
        <button class="carousel-button prev" on:click={prevImage}>
            &lt;
        </button>
        <img
            src={listing.media.images[currentIndex].src}
            alt={`${listing.title} - Image ${currentIndex + 1}`}
        />
        <button class="carousel-button next" on:click={nextImage}>
            &gt;
        </button>
    </div>
    <div class="grid-container">
        <div class="column">
            <p>{listing.address.city} | {listing.address.country}</p>
        </div>
        <div class="column">
            <p>Price: {listing.pricing.price}</p>
            <p>Bedrooms: {listing.features.bedrooms}</p>
            <p>Bathrooms: {listing.features.bathrooms}</p>
            <p>{listing.description}</p>
        </div>
    </div>
</div>

<style>
    .listing-details {
        padding: 2rem;
    }
    .image-carousel {
        position: relative;
        height: 400px;
        overflow: hidden;
    }
    .image-carousel img {
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
        object-fit: scale-down;
    }
    .carousel-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
    .carousel-button.prev {
        left: 1rem;
    }
    .carousel-button.next {
        right: 1rem;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Default: two equal columns */
        gap: 16px;
    }

    /* For larger screens */
    @media (min-width: 768px) {
        .grid-container {
            grid-template-columns: 2fr 1fr; /* 2:1 ratio for larger screens */
        }
    }

    /* For very large screens */
    @media (min-width: 1024px) {
        .grid-container {
            grid-template-columns: 3fr 1fr; /* 3:1 ratio for extra-large screens */
        }
    }
    .column {
        background-color: #4caf50;
        color: white;
        padding: 16px;
        text-align: center;
    }
</style>
