<script lang="ts">
    // @ts-nocheck
    import type { Property, PortfolioStatus } from "../../types/RealEstate";
    /** @type {import('./$types').LayoutData} */
    export let data: { properties: Property[]; filterOptions; portfolioStatus };

    let portfolioStatus: PortfolioStatus = data.portfolioStatus;
    console.log("data.PortfolioStatus", portfolioStatus);
</script>

<section class="section bg-light" id="services">
    <div class="container">
        <!-- <div class="row justify-content-center">
            <div class="col-lg-12">
                <div class="text-center">
                    <h2><span class="fw-bold">Luxury Homes</span></h2>
                    <p class="text-muted mx-auto section-subtitle mt-3">Explore our collection of exquisite luxury properties, featuring high-end finishes, expansive layouts, and exclusive amenities. Perfect for discerning buyers seeking sophistication, comfort, and premium living in the finest locations.</p>
                </div>
            </div>
        </div> -->
        <div class="row mt-5">
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/office">
                        <div class="services-boxes-icon">
                            <i class="mbri-growing-chart text-primary display-4"
                            ></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Offices</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">
                                For business who are looking for a office in
                                Istanbul
                            </p>
                            <!-- <p class="text-muted mt-3">Discover move-in-ready homes that have been meticulously maintained or fully renovated, offering you a hassle-free living experience. These properties require no additional work, allowing you to settle in and enjoy your new home from day one.</p> -->
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/apartments">
                        <div class="services-boxes-icon">
                            <i class="mbri-map-pin text-primary display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Apartments</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">
                                Luxury condo's and apartments in the heart of
                                Istanbul
                            </p>
                            <!-- <p class="text-muted mt-3">Our listings in prime locations provide unparalleled access to top-rated schools, vibrant shopping districts, and convenient public transportation. Experience the best in urban and suburban living with properties situated in the most desirable neighborhoods.</p> -->
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/houses">
                        <div class="services-boxes-icon">
                            <i class="mbri-cash text-primary display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Houses</h5>
                            <div class="services-title-border"></div>
                            <p class="text-muted mt-3">
                                Discover the hidden gems of Istanbul through our
                                exclusive collection of houses
                            </p>
                            <!-- <p class="text-muted mt-3">Take advantage of our carefully selected investment properties, offering strong potential for rental income and future appreciation. Whether you’re a seasoned investor or new to the market, these opportunities can enhance your portfolio with excellent returns.</p> -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/orchards">
                        <div class="services-boxes-icon">
                            <i class="mbri-key text-primary display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Orchards</h5>
                            <div class="services-title-border"></div>
                            <!-- <p class="text-muted mt-3"> Browse our modern new construction homes, designed with the latest architectural trends and energy-efficient technologies. These brand-new properties offer contemporary living spaces tailored for today’s lifestyle, with no previous owners.</p> -->
                            <p class="text-muted mt-3">
                                Imagine owning a piece of land filled with lush
                                fruit trees.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/lands">
                        <div class="services-boxes-icon">
                            <i class="mbri-flag text-primary display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Agricultural Lands</h5>
                            <div class="services-title-border"></div>
                            <!-- <p class="text-muted mt-3">Join us for an upcoming open house to experience these properties firsthand. Walk through and imagine your future home as you explore every detail, ask questions, and get a true sense of what each unique property has to offer.</p> -->
                            <p class="text-muted mt-3">
                                Start an organic farm, or invest in a piece of
                                land with long-term growth potential
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center services-boxes rounded p-4 mt-4">
                    <a href="/yourassets">
                        <div class="services-boxes-icon">
                            <i class="mbri-home text-primary display-4"></i>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-0">Sell your asset</h5>
                            <div class="services-title-border"></div>
                            <!-- <p class="text-muted mt-3">Explore our collection of exquisite luxury properties, featuring high-end finishes, expansive layouts, and exclusive amenities. Perfect for discerning buyers seeking sophistication, comfort, and premium living in the finest locations.</p> -->
                            <p class="text-muted mt-3">
                                Fill out our form and we will get back to you
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .services-boxes {
        transition: 0.3s;
    }

    .services-boxes:hover {
        border-radius: 50%;
        background-color: antiquewhite;
        transition-duration: 3ms;
        /* background-color: palevioletred */
    }
    a {
        color: black;
    }
</style>
