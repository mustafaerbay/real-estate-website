<script>
    import Contact from "../../Components/Layout/Contact.svelte";
    import { company_details } from "../../app";

</script>

<section class="section" id="contact">
    <div class="container">
        <!-- <Contact></Contact> -->
        <Contact {company_details} />
    </div>
</section>
