<script lang="ts">
    import type { Property } from "@types";

    import ListingGpt from "../../Components/ListingGPT.svelte";
    import FilterComponent from "../../Components/FilterComponent.svelte";
    import { Search } from "../../store";
    /** @type {import('./$types').LayoutData} */
    export let data: { properties: Property[]; filterOptions }; // Import your Property type here
    let listing: Property;
    listing = data.properties[0];
    let listings = data.properties;
    let filterOptions = data.filterOptions;
    // let property = data.properties[0]

    let filters = {
        location: "",
        type: "",
        minPrice: 0,
        maxPrice: Infinity,
        minArea: 0,
        maxArea: Infinity,
    };
    let filteredListings = listings;
    // console.log("filteredListings", filteredListings);

    // console.log("storeFrompage:", get(Search));
    // let SearchBind = "";
    // console.log("SearchBind", SearchBind);

    let results = [...listings];
    function filter(Search) {
        results = listings.filter(
            (item) =>
                (!Search.location || item.address.city == Search.location) &&
                (!Search.type || item.type == Search.type) &&
                (!Search.maxPrice || item.pricing.price <= Search.maxPrice) &&
                (!Search.minPrice || item.pricing.price >= Search.minPrice) &&
                (!Search.minArea ||
                    item.features.squareFeet >= Search.minArea) &&
                (!Search.maxArea ||
                    item.features.squareFeet <= Search.maxArea) &&
                (!Search.status || item.status == Search.status),
        );
    }

    $: filter($Search);
</script>

<section class="section" id="contact">
    <div class="container">
        <div class="text-center">
            <h1>Portfolio</h1>
        </div>
        <FilterComponent
            statuses={filterOptions.statuses}
            locations={filterOptions.locations}
            types={filterOptions.types}
        ></FilterComponent>
        <ListingGpt listings={results}></ListingGpt>
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
