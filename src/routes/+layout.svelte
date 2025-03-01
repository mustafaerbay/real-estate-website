<script>
    import { company_details } from "../app";
    import NavbarCustom from "../Components/Layout/NavbarCustom.svelte";
    import About from "../Components/Layout/About.svelte";
    import Services from "../Components/Layout/Services.svelte";
    import Sta from "../Components/Layout/Sta.svelte";
    import Client from "../Components/Layout/Client.svelte";
    import Blog from "../Components/Layout/Blog.svelte";
    import Contact from "../Components/Layout/Contact.svelte";
    import Footer from "../Components/Layout/Footer.svelte";
    import Work from "../Components/Layout/Work.svelte";
    import Settings from "../Components/Layout/Settings.svelte";
    import Loader from "../Components/Layout/Loader.svelte";
    import ContactFormSidabar from "$lib/ContactForm_sidabar.svelte";
    import Listings from "../Components/Layout/Listings.svelte";
    /** @type {import('./$types').LayoutData} */
    export let data;
    // console.log("dataLayout:",data.properties)
    // console.log("filterOptions:", data.filterOptions);
    let filterItems = data.filterOptions;
    // console.log("filterItems:",filterItems?.types)

    console.log("data.PortfolioStatus_layout", data.portfolioStatus);
</script>

<svelte:head>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/materialdesignicons.min.css" />

    <!-- Animate Css -->
    <link rel="stylesheet" type="text/css" href="assets/css/animate.min.css" />

    <!-- Magnific-popup -->
    <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/magnific-popup.css"
    />

    <!-- Mobirise icons Css -->
    <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/mobiriseicons.css"
    />

    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- <link rel="stylesheet" href="assets/css/app.css"> -->

    <title>Paradoks Real Estate</title>
    <meta name="description" content="Paradoks Real Estate | Home" />
    <meta
        name="google-site-verification"
        content="l22pghUc_H4ExgSIqtQazg66YFNgQMW0Ii5d7mlZoJ0"
    />
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16848088701"
    >
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "AW-16848088701");
    </script>
</svelte:head>

<!-- Loader -->
<!-- <Loader/> -->

<!-- Start Navbar -->
<NavbarCustom />

<!-- START HOME & ABOUT-->
<!-- svelte-ignore a11y_no_redundant_roles -->
<main role="main">
    <slot />
</main>
<!-- START BLOG -->
<!-- <Blog /> -->
<!-- <Listings {data}></Listings> -->
<!-- START WORK -->
<!-- <Work /> -->

<!-- START CTA -->
<!-- START SERVICES -->
<!-- <Services /> -->

<!-- <ContactFormSidabar></ContactFormSidabar> -->

<!-- START CLIENT -->
<!-- <Client /> -->

<!-- START CONTACT -->
<!--START FOOTER-->
<Footer />

<!-- SETTINGS -->
<Settings />

<style global lang="scss">
    //@import "$lib/assets/css/style.css";
</style>
