<script lang="ts">
  import type { Property } from "@types";
  import ListingCard from "../ListingCard.svelte";

  export let data: { properties: Property[] }; // Import your Property type here
  // export let data
  console.log("data222:", data);
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 px-4 py-4">
  {#if data.properties}
    <!-- <ul> -->
    {#each data.properties as property}
      <!-- <li> -->
      <!-- <ListingCard property={property}></ListingCard> -->
      <div class="w-96 h-48 bg-gray-300 rounded-xl">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p>Price: {property.pricing.price} {property.pricing.currency}</p>
        <p>Bedroom: {property.features.bedrooms}</p>
      </div>
      <!-- </li> -->
    {/each}
    <!-- </ul> -->
  {:else}
    <p>No properties available.</p>
  {/if}
</div>
