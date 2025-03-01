<script lang="ts">
    import { NumberFormat } from "svelte-number-format";
    import type { Property } from "@types";
    import { company_details } from "../app";
    import { Button, Col } from "@sveltestrap/sveltestrap";
    import FilterComponent from "./FilterComponent.svelte";
    import ImageCarousels2 from "./Carousels/ImageCarousels2.svelte";
    import { goto } from "$app/navigation";
    import { Search } from "../store";
    import { page } from "$app/stores";
    import { Hr, P } from "flowbite-svelte";
    export let listings: Property[];

    const template = {
        type: "",
        minPrice: "",
        maxPrice: "",
        minArea: "",
        maxArea: "",
        status: "",
        location: "",
    };
    function noListing() {
        // $Search = { type: ""};
        Search.set(template);
        goto("/portfolio");
    }

    function formatNumberWithCommas(number: number): string {
        // Convert the number to a string
        const numberString: string = number.toString();

        // Split by decimal point (if any)
        const parts: string[] = numberString.split(".");

        // Format the integer part with commas
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Join back with decimal part if it exists
        return parts.length > 1 ? parts.join(".") : parts[0];
    }
</script>

<div class="grid-container">
    {#if listings.length}
        {#each listings as listing}
            <div class="card">
                <ImageCarousels2 images={listing.media.images} />

                <div class="details">
                    <div class="price">
                        {formatNumberWithCommas(listing.pricing.price)}
                        {listing.pricing.currency}
                    </div>
                    <div class="title-container">
                        <div class="title">
                            <a href="/" class="title">{listing.title}</a>
                        </div>
                        <div class="status">
                            <p>{listing.status}</p>
                        </div>
                    </div>
                    <div class="location">
                        {listing.type} | {listing.features.squareFeet} sqft |
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                            />
                        </svg>
                        {listing.address.city}/{listing.address.country}
                    </div>
                    <div class="type-area">-------------------</div>
                    <!-- <div class="description">{listing.description[0]}</div> -->
                    <div class="descriptions">
                        <ul>
                            {#each listing.description as item}
                                <!-- <p> -->
                                <li>
                                    {item}
                                </li>
                                <!-- </p> -->
                            {/each}
                        </ul>
                    </div>

                    <div class="actions p-2">
                        <!-- <Button outline color="success">Primary</Button> -->
                        <a
                            href={`tel:${company_details.phone}`}
                            class="btn btn-dark button">Call</a
                        >
                        <a
                            href={`mailto:${company_details.email}`}
                            class="btn btn-dark button">Email</a
                        >
                        <a
                            href={company_details.whatsapp}
                            class="btn btn-dark button">Whatsapp</a
                        >
                        <!-- <div class="button">
                        <p>
                            <a href={`tel:${company_details.phone}`}>Call</a>
                            </p>
                            </div>
                            <div class="button">
                                <p>
                                    <a href={`mailto:${company_details.email}`}>Email</a
                                    >
                                    </p>
                                    </div>
                                    <div class="button">
                                        <p>
                                            <a href={company_details.whatsapp} target="_blank"
                                            >WhatsApp</a
                                            >
                                            </p>
                                            </div> -->
                    </div>
                </div>
            </div>
        {/each}
    {:else}
        <p>nothing to show with these filters</p>
        <!-- <button type="button" href="/portfolio"  class="submitBnt btn btn-primary"
                                >Go back to Portfolio page</button
                                > -->
        <!-- <Button color="primary">
                                    >Go back to Portfolio page</Button> -->
        {#if $page.url.pathname !== "/portfolio"}
            <Button
                class="uppercase"
                color="primary"
                on:click={() => noListing()}
                >Go to Portfolio page to check all listings</Button
            >
        {/if}
    {/if}
</div>

<style>
    .title-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 12fr;
        gap: 16px;
        /* padding: 16px; */
        /* margin-top: 48px; */
        /* margin-left: 12rem; */
        /* margin-right: 12rem; */
    }

    @media (min-width: 1024px) {
        .grid-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 1024px) {
        .card {
            flex-direction: row;
        }
    }

    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    @media (min-width: 1024px) {
        .card img {
            width: 300px;
            height: 100%;
        }
    }

    .details {
        padding: 16px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .price {
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }

    .type-area {
        font-size: 14px;
        margin-top: 4px;
        color: #666;
    }
    .descriptions p {
        font-size: 10px;
        color: #333;
    }

    .title {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
        color: #00796b;
        text-decoration: none;
        grid-column-start: span 4;
    }
    .status {
        font-size: large;
        font-weight: bolder;
        font-size: x-large;
        grid-column-start: 6;
        grid-column-end: 6;
        /* justify-items: end; */
        /* justify-self: center; */
        /* background-color: rgb(16, 160, 33); */
        border-radius: 10%;
        align-content: center;
        /* align-items: center; */
    }

    .title:hover {
        text-decoration: underline;
    }

    .location {
        padding: 4px;
        border-radius: 4px;
        font-size: 14px;
        color: #ffffff;
        margin: 8px 0;
        background-color: black;
    }

    .actions {
        margin-top: auto;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .button {
        flex: 1;
        padding: 4px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: var(--bs-dark);
        /* background-color: #f8f9fa; */
        color: white;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 16px;
        transition: background-color .4s ease-in;
    }

    .button:hover {
        background-color: #ffffff;
        color: var(--bs-dark);
        transition: background-color .4s ease-out;
        /* background-color: #e0e0e0; */
        /* color: var(--bs-primary); */
    }
</style>
