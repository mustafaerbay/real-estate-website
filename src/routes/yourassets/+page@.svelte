<script lang="ts">
    import type { Property } from "@types";

    import ListingGpt from "../../Components/ListingGPT.svelte";
    import FilterComponent from "../../Components/FilterComponent.svelte";
    import { Search } from "../../store";
    import ContactFormNew from "../../lib/ContactForm_new.svelte";
    import Contact from "../../Components/Layout/Contact.svelte";
    import Sta from "../../Components/Layout/Sta.svelte";
    import { company_details } from "../../app";
    /** @type {import('./$types').LayoutData} */
    export let data: { properties: Property[]; filterOptions }; // Import your Property type here
    let listing: Property;
    listing = data.properties[0];
    let listings = data.properties;

    // console.log("filteredListings", filteredListings);

    // console.log("storeFrompage:", get(Search));
    // let SearchBind = "";
    // console.log("SearchBind", SearchBind);

    $Search = { type: 'Yourasset'};
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


<section class="section" id="condo">
    <div class="container">
        <div class="text-center">
            <h1>Sell Your Assets</h1>
            <div>
                <p class="">
                    To sell your assets please fill the fom below and let us contact with you!!
                </p>
            </div>
        </div>
        <Contact {company_details} />
    </div>
</section>