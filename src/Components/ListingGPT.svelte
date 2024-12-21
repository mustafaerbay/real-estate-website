<script lang="ts">
    import type { Property } from "@types";
    import ImageCarousels from "./Carousels/ImageCarousels.svelte";
    import { company_details } from "../app";
    import { Button } from "@sveltestrap/sveltestrap";

    export let listings: Property[];
</script>

<div class="grid-container">
    {#each listings as listing}
        <div class="card">
            <!-- <img src={listing.media.images[0].src} alt={listing.title} /> -->
            <div>
                <ImageCarousels images={listing.media.images}></ImageCarousels>
            </div>
            <div class="details">
                <div class="title-container">
                    <div class="title">
                        <a href="/" class="title">{listing.title}</a>
                    </div>
                    <div class="status">
                        <p>{listing.status}</p>
                    </div>
                </div>
                <div class="price">
                    {listing.pricing.price}
                    {listing.pricing.currency}
                </div>
                <!-- <div class="description">{listing.description[0]}</div> -->
                <div class="descriptions">
                    {#each listing.description as item}
                        <p>
                            {item}
                        </p>
                    {/each}
                </div>
                <div class="type-area">
                    {listing.type} | Area: {listing.features.squareFeet} sqft
                </div>
                <div class="location">
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
                    {listing.address.city} | {listing.address.country}
                </div>
                <div class="actions">
                    <!-- <Button outline color="success">Primary</Button> -->
                    <a
                        href={`tel:${company_details.phone}`}
                        class="btn btn-primary">Call</a
                    >
                    <a
                        href={`mailto:${company_details.email}`}
                        class="btn btn-primary">Email</a
                    >
                    <a href={company_details.whatsapp} class="btn btn-primary"
                        >Whatsapp</a
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
        font-size: 14px;
        color: #777;
        margin: 8px 0;
    }

    .actions {
        margin-top: auto;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .button {
        flex: 1;
        padding: 8px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #f8f9fa;
        color: #333;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .button:hover {
        background-color: #e0e0e0;
    }
</style>
