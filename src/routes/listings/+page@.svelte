<script>
    import Blog from "../../Components/Layout/Blog.svelte";
    import Listings from "../../Components/Layout/Listings.svelte";
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<div class="p-4 m-4">
    <!-- <p>Listings</p> -->
    <Blog show_all=true></Blog>
</div>
