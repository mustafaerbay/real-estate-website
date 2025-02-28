<script lang="ts">
    // @ts-nocheck
    import { get, writable } from "svelte/store";
    import { Search } from "../store.js";
    import { Button } from "@sveltestrap/sveltestrap";
    // import { createEventDispatcher } from "svelte";
    // const dispatch = createEventDispatcher();

    // export let filterOptions;
    // Local filter state
    export let statuses;
    export let locations;
    export let types;

    let type = "";
    let minPrice = "";
    let maxPrice = "";
    let minArea = "";
    let maxArea = "";
    let status = "";
    let location = "";
    const template = {
        type: "",
        minPrice: "",
        maxPrice: "",
        minArea: "",
        maxArea: "",
        status: "",
        location: "",
    };

    const resetFilter = () => {
        Search.set(template);
    };
    // let {
    //     // statuses = $bindable(),
    //     // locations = $bindable(),
    //     // types = $bindable(),
    //     type = $bindable(),
    //     minPrice = $bindable(),
    //     maxPrice = $bindable(),
    //     minArea = $bindable(),
    //     maxArea = $bindable(),
    //     status = $bindable(),
    //     location = $bindable(),
    //     ...props
    // } = $props();

    // function applyFilters() {
    //     console.log("storre", get(Search));
    //     dispatch("filterChange", {
    //         location,
    //         type,
    //         status,
    //         minPrice,
    //         maxPrice,
    //         minArea,
    //         maxArea,
    //     });
    // }

    $: SearchBind = get(Search);

    function updateLocation(event) {
        Search.update((value) => ({ ...value, location: event.target.value }));
        console.log("store in Filter", get(Search));
    }

    function updateType(event) {
        Search.update((value) => ({ ...value, type: event.target.value }));
    }
    function updatemaxPrice(event) {
        Search.update((value) => ({ ...value, maxPrice: event.target.value }));
    }
    function updateminPrice(event) {
        Search.update((value) => ({ ...value, minPrice: event.target.value }));
    }
    function updateminArea(event) {
        Search.update((value) => ({ ...value, minArea: event.target.value }));
    }
    function updatemaxArea(event) {
        Search.update((value) => ({ ...value, maxArea: event.target.value }));
    }
    function updatestatus(event) {
        Search.update((value) => ({ ...value, status: event.target.value }));
    }
</script>

<div class="filter-container">
    
    <div class="filter-item">
        <label for="location">Location</label>
        <select
            id="location"
            bind:value={$Search.location}
            on:change={updateLocation}
        >
            <option value="">All</option>
            {#each locations as location}
                <option value={location}>{location}</option>
            {/each}
        </select>
    </div>

    <div class="filter-item">
        <label for="type">Type</label>
        <select id="type" bind:value={$Search.type} on:change={updateType}>
            <option value="">All</option>
            {#each types as type}
                <option value={type}>{type}</option>
            {/each}
        </select>
    </div>
    <div class="filter-item">
        <label for="status">Rent | Sale</label>
        <select id="type" bind:value={$Search.status} on:change={updatestatus}>
            <option value="">All</option>
            {#each statuses as status}
                <option value={status}>{status}</option>
            {/each}
        </select>
    </div>

    <div class="filter-item">
        <label for="minPrice">Min Price</label>
        <input
            id="minPrice"
            type="number"
            bind:value={$Search.minPrice}
            on:input={updateminPrice}
            placeholder="e.g., 100000"
        />
    </div>

    <div class="filter-item">
        <label for="maxPrice">Max Price</label>
        <input
            id="maxPrice"
            type="number"
            bind:value={$Search.maxPrice}
            on:input={updatemaxPrice}
            placeholder="e.g., 500000"
        />
    </div>

    <div class="filter-item">
        <label for="minArea">Min Area (sqft)</label>
        <input
            id="minArea"
            type="number"
            bind:value={$Search.minArea}
            on:input={updateminArea}
            placeholder="e.g., 500"
        />
    </div>

    <div class="filter-item">
        <label for="maxArea">Max Area (sqft)</label>
        <input
            id="maxArea"
            type="number"
            bind:value={$Search.maxArea}
            on:input={updatemaxArea}
            placeholder="e.g., 2000"
        />
    </div>
    <div class="filter-item">
        <label for="resetFilter">.</label>
        <Button
            id="resetFilter"
            on:click={resetFilter}
            color="primary"
            size="sm"
            >Reset
        </Button>
        <!-- <Button></Button> -->
    </div>
</div>

<style>
    .filter-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 24px;
        padding: 16px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    .filter-item {
        flex: 1 1 200px;
        display: flex;
        flex-direction: column;
    }

    .filter-item label {
        margin-bottom: 4px;
        font-size: 14px;
        color: #555;
    }

    .filter-item input,
    .filter-item select {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
