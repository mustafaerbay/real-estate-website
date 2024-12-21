<script lang="ts">
    import type { Property } from "@types";

    import Blog from "../../Components/Layout/Blog.svelte";
    import Listings from "../../Components/Layout/Listings.svelte";
    import ListingDetails from "../../Components/ListingDetails.svelte";
    import ListingGpt from "../../Components/ListingGPT.svelte";
    /** @type {import('./$types').LayoutData} */
    export let data: { properties: Property[] }; // Import your Property type here
    let listing: Property;
    listing = data.properties[0];
    let listings = data.properties;
    // let property = data.properties[0]
</script>

<section class="section" id="contact">
    <div class="container">
        <div class="text-center">
            <h1>Portfolio</h1>
        </div>
        <ListingGpt {listings}></ListingGpt>
    </div>
</section>

<!-- <div class="m-2 p-2 lg:p-4 lg:m-4">
    <div class="flex grid grid-cols-12 grid-rows-3 gap-4 lg:grid-cols-6">
        {#each data.properties as listing}
            <div class="grid-cols-2 lg:grid-cols-12">
                <ListingDetails {listing}></ListingDetails>
            </div>
        {/each}
    </div>
</div> -->

<style>
    .title {
        margin-right: 12rem;
        margin-left: 12rem;
        margin-top: 8rem;
        justify-content: center;
        justify-items: center;
        border-color: aquamarine;
        border-style: groove;
    }
</style>
