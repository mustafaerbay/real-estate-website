<script lang="ts">
    // @ts-nocheck
    import { company_details } from "../app";
    import { Col, Container, Row } from "@sveltestrap/sveltestrap";
    import TypeWriter from "../Components/TypeWriter.svelte";
    import About from "../Components/Layout/About.svelte";
    import Work from "../Components/Layout/Work.svelte";
    import Blog from "../Components/Layout/Blog.svelte";
    import Sta from "../Components/Layout/Sta.svelte";
    import Contact from "../Components/Layout/Contact.svelte";
    import Services from "../Components/Layout/Services.svelte";
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<section
    class="section header-bg-img h-100vh align-items-center d-flex clip-home"
    id="home"
>
    <div class="bg-overlay"></div>
    <Container class="z-2">
        <Row class="justify-content-center">
            <Col lg="12">
                <div class="text-center header-content mx-auto">
                    <!-- <h4 class="text-white first-title mb-4">Paradoks</h4> -->
                    <h1 class="header-name text-white text-capitalize mb-0">
                        Paradoks Real Estate
                        <TypeWriter />
                    </h1>
                    <!-- <p class="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p> -->
                    <div class="mt-4 pt-2">
                        <a
                            href="/portfolio"
                            class="btn btn-outline-white rounded-pill"
                            >Check Portfolio</a
                        >
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    <div class="scroll_down">
        <a href="#portfolio" class="scroll">
            <i class="text-white"></i>
        </a>
    </div>
</section>
<!-- <About/> -->
<Services {data}></Services>
<!-- <Sta /> -->

<slot></slot>
<!-- <Blog></Blog> -->
<!-- <Work></Work> -->
<Contact {company_details} />
