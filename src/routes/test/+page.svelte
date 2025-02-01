<script>
    import { Container, Row, Col, Card, Table } from "@sveltestrap/sveltestrap";

    const carDetails = {
        title: "2015 1.4 TSI FR 140 HP ALOR BLUE EMSALSİZ FULL AERO FULL YAPILI",
        price: "705.000 TL",
        location: "Gaziantep / Şahinbey / Beyazlar Mah.",
        images: [
            "images/listings/barbaros/IMG-20241026-WA0124.webp",
            "images/listings/barbaros/IMG-20241026-WA0113.webp",
            "images/listings/barbaros/IMG-20241026-WA0118.webp",
            "images/listings/barbaros/IMG-20241026-WA0128.webp",
            "images/listings/barbaros/IMG-20241026-WA0129.webp",
        ],
        specs: {
            brand: "Seat",
            series: "Leon",
            model: "1.4 TSI FR",
            year: "2015",
            fuel: "Benzin",
            transmission: "Manuel",
            condition: "İkinci El",
            mileage: "218.000",
            bodyType: "Hatchback 5 kapı",
            enginePower: "140 hp",
            engineSize: "1395 cc",
            drive: "Önden Çekiş",
            color: "Mavi",
            warranty: "Hayır",
            damage: "Evet",
            plate: "Türkiye (TR) Plakalı",
        },
    };

    let selectedImageIndex = 0;

    function nextImage() {
        selectedImageIndex =
            (selectedImageIndex + 1) % carDetails.images.length;
    }

    function previousImage() {
        selectedImageIndex =
            selectedImageIndex === 0
                ? carDetails.images.length - 1
                : selectedImageIndex - 1;
    }
</script>

<div class="section">
    <Container>
        <Row class="mt-4">
            <Col md="6">
                <div class="image-gallery">
                    <div class="main-image-container">
                        <button class="nav-button prev" on:click={previousImage}
                            >&lt;</button
                        >
                        <img
                            src={carDetails.images[selectedImageIndex]}
                            alt="Main car view"
                            class="main-image"
                        />
                        <button class="nav-button next" on:click={nextImage}
                            >&gt;</button
                        >
                    </div>
                    <div class="thumbnails">
                        {#each carDetails.images as image, i}
                            <img
                                src={image}
                                alt="Car thumbnail {i + 1}"
                                class="thumbnail"
                                class:active={selectedImageIndex === i}
                                on:click={() => (selectedImageIndex = i)}
                            />
                        {/each}
                    </div>
                </div>
            </Col>
            <Col md="6">
                <Card class="mb-4">
                    <div class="card-header bg-primary text-white">
                        <h4>{carDetails.title}</h4>
                    </div>
                    <div class="card-body">
                        <h2 class="text-primary mb-3">{carDetails.price}</h2>
                        <p class="text-muted">{carDetails.location}</p>

                        <Table bordered>
                            <tbody>
                                {#each Object.entries(carDetails.specs) as [key, value]}
                                    <tr>
                                        <th class="w-25 bg-light">{key}</th>
                                        <td>{value}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
</div>

<style>
    .image-gallery {
        margin-bottom: 2rem;
    }

    .main-image-container {
        position: relative;
        height: 400px;
        margin-bottom: 1rem;
    }

    .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-button:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .thumbnails {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding: 10px 0;
    }

    .thumbnail {
        width: 80px;
        height: 60px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0.6;
        transition: opacity 0.2s;
    }

    .thumbnail.active,
    .thumbnail:hover {
        opacity: 1;
    }

    :global(.card) {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    :global(.table th) {
        text-transform: capitalize;
    }
</style>
