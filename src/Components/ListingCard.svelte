<script lang="ts">
  import type { Property,Media, } from "@types";
    import { Carousel } from "flowbite-svelte";

  export let property: Property;
  let currentImageIndex = 0;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % property.media.images.length;
  }

  function previousImage() {
    currentImageIndex =
      (currentImageIndex - 1 + property.media.images.length) %
      property.media.images.length;
  }

  // Format price with commas
  // $: formattedPrice = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   maximumFractionDigits: 0,
  // }).format(property.pricing.price);
</script>

<div
  class="listing-container max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
>
  <!-- Image Gallery -->
  <!-- <div class="relative h-48">
    <img
      src={property.media.images[currentImageIndex].src}
      alt="Property view"
      class="w-full h-full object-cover"
    />

    <button
      on:click={previousImage}
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      ←
    </button>
    <button
      on:click={nextImage}
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      →
    </button>

    <div
      class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
    >
      {currentImageIndex + 1} / {property.media.images.length}
    </div>
  </div> -->
  <!-- <div class="max-w-4xl">
    <Carousel images={property.media.images} />
  </div> -->
  <div class="max-w-4xl">
    <Carousel images={property.media.images} let:Controls>
      <Controls />
    </Carousel>
  </div>
  <!-- Property Details -->
  <div class="p-6">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{property.title}</h1>
        <p class="text-gray-600">
          {property.address}, {property.address.city}, {property.address.state}
          {property.address.postalCode}
        </p>
      </div>
      <div class="text-2xl font-bold text-green-600">{property.pricing.price}</div>
    </div>

    <!-- Property Stats -->
    <div class="flex gap-6 mb-6 text-gray-700">
      <div class="flex items-center">
        <span class="font-semibold">{property.features.bedrooms}</span>
        <span class="ml-1">Beds</span>
      </div>
      <div class="flex items-center">
        <span class="font-semibold">{property.features.bathrooms}</span>
        <span class="ml-1">Baths</span>
      </div>
      #{#if property.features.squareFeet}
        <div class="flex items-center">
          <span class="font-semibold"
            >{property.features.squareFeet.toLocaleString()}</span
          >
          <span class="ml-1">sq ft</span>
        </div>
      {/if}
    </div>

    <!-- Description -->
    <div class="text-gray-700">
      <h2 class="text-xl font-semibold mb-2">Description</h2>
      <p class="leading-relaxed">{property.description}</p>
    </div>
  </div>
</div>

<style>
  .listing-container {
    max-width: 50%;
    max-height: 50%;
  }

  /* button {
    cursor: pointer;
    transition: background-opacity 0.2s;
  } */

  img {
    transition: opacity 0.3s;
  }
</style>
