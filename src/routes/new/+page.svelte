<script>
    import {
        Form,
        FormGroup,
        Input,
        Label,
        Button,
        Container,
        Row,
        Col,
        Card,
        CardBody,
        CardHeader,
    } from "@sveltestrap/sveltestrap";

    // Initial form state
    let formData = {
        id: "",
        title: "",
        description: [],
        address: {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
        },
        type: "",
        status: "",
        features: {
            floorCount: 0,
            bedrooms: 0,
            bathrooms: 0,
            squareFeet: 0,
            pool: false,
        },
        pricing: {
            price: 0,
            currency: "USD",
            isNegotiable: false,
        },
        agent: {
            name: "",
            email: "",
            phone: "",
            profilePictureUrl: "",
        },
        media: {
            images: [],
        },
        listedDate: new Date().toISOString().split("T")[0],
    };

    // Description input handling
    let descriptionInput = "";

    function addDescription() {
        if (descriptionInput.trim()) {
            formData.description = [
                ...formData.description,
                descriptionInput.trim(),
            ];
            descriptionInput = "";
        }
    }

    function removeDescription(index) {
        formData.description = formData.description.filter(
            (_, i) => i !== index,
        );
    }

    // Image handling
    let imageInput = {
        src: "",
        alt: "",
        title: "",
    };

    function addImage() {
        if (imageInput.src.trim()) {
            formData.media.images = [
                ...formData.media.images,
                { ...imageInput },
            ];
            imageInput = {
                src: "",
                alt: "",
                title: "",
            };
        }
    }

    function removeImage(index) {
        formData.media.images = formData.media.images.filter(
            (_, i) => i !== index,
        );
    }

    function generateJSON() {
        const jsonOutput = JSON.stringify(formData, null, 2);
        // Create and download JSON file
        const blob = new Blob([jsonOutput], { type: "application/json" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `property-listing-${formData.id}.json`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
</script>

<div class="section">
    <Container class="my-4">
        <Card>
            <CardHeader>
                <h2>Property Listing Form</h2>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="id">Property ID</Label>
                                <Input
                                    type="text"
                                    id="id"
                                    bind:value={formData.id}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    id="title"
                                    bind:value={formData.title}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <!-- Description Section -->
                    <FormGroup>
                        <Label>Description Items</Label>
                        <div class="d-flex mb-2">
                            <Input
                                type="text"
                                bind:value={descriptionInput}
                                class="me-2"
                            />
                            <Button color="primary" on:click={addDescription}
                                >Add</Button
                            >
                        </div>
                        {#each formData.description as desc, i}
                            <div class="d-flex align-items-center mb-2">
                                <div class="flex-grow-1">{desc}</div>
                                <Button
                                    color="danger"
                                    size="sm"
                                    on:click={() => removeDescription(i)}
                                    >Remove</Button
                                >
                            </div>
                        {/each}
                    </FormGroup>

                    <!-- Address Section -->
                    <Card class="mb-3">
                        <CardHeader>Address</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="street">Street</Label>
                                        <Input
                                            type="text"
                                            id="street"
                                            bind:value={formData.address.street}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="city">City</Label>
                                        <Input
                                            type="text"
                                            id="city"
                                            bind:value={formData.address.city}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="state">State</Label>
                                        <Input
                                            type="text"
                                            id="state"
                                            bind:value={formData.address.state}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="postalCode"
                                            >Postal Code</Label
                                        >
                                        <Input
                                            type="text"
                                            id="postalCode"
                                            bind:value={formData.address
                                                .postalCode}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="country">Country</Label>
                                        <Input
                                            type="text"
                                            id="country"
                                            bind:value={formData.address
                                                .country}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <!-- Property Details -->
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="type">Property Type</Label>
                                <Input
                                    type="select"
                                    id="type"
                                    bind:value={formData.type}
                                >
                                    <option value="">Select Type</option>
                                    <option value="Office">Office</option>
                                    <option value="Residential"
                                        >Residential</option
                                    >
                                    <option value="Commercial"
                                        >Commercial</option
                                    >
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="status">Status</Label>
                                <Input
                                    type="select"
                                    id="status"
                                    bind:value={formData.status}
                                >
                                    <option value="">Select Status</option>
                                    <option value="For Rent">For Rent</option>
                                    <option value="For Sale">For Sale</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <!-- Features -->
                    <Card class="mb-3">
                        <CardHeader>Features</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="floorCount"
                                            >Floor Count</Label
                                        >
                                        <Input
                                            type="number"
                                            id="floorCount"
                                            bind:value={formData.features
                                                .floorCount}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="bedrooms">Bedrooms</Label>
                                        <Input
                                            type="number"
                                            id="bedrooms"
                                            bind:value={formData.features
                                                .bedrooms}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="bathrooms">Bathrooms</Label>
                                        <Input
                                            type="number"
                                            id="bathrooms"
                                            bind:value={formData.features
                                                .bathrooms}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="squareFeet"
                                            >Square Feet</Label
                                        >
                                        <Input
                                            type="number"
                                            id="squareFeet"
                                            bind:value={formData.features
                                                .squareFeet}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                bind:checked={formData.features
                                                    .pool}
                                            />
                                            Has Pool
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <!-- Pricing -->
                    <Card class="mb-3">
                        <CardHeader>Pricing</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="price">Price</Label>
                                        <Input
                                            type="number"
                                            id="price"
                                            bind:value={formData.pricing.price}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="currency">Currency</Label>
                                        <Input
                                            type="select"
                                            id="currency"
                                            bind:value={formData.pricing
                                                .currency}
                                        >
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="TRY">TRY</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup check class="mt-4">
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                bind:checked={formData.pricing
                                                    .isNegotiable}
                                            />
                                            Price Negotiable
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <!-- Agent Information -->
                    <Card class="mb-3">
                        <CardHeader>Agent Information</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="agentName">Name</Label>
                                        <Input
                                            type="text"
                                            id="agentName"
                                            bind:value={formData.agent.name}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="agentEmail">Email</Label>
                                        <Input
                                            type="email"
                                            id="agentEmail"
                                            bind:value={formData.agent.email}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="agentPhone">Phone</Label>
                                        <Input
                                            type="tel"
                                            id="agentPhone"
                                            bind:value={formData.agent.phone}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="profilePic"
                                            >Profile Picture URL</Label
                                        >
                                        <Input
                                            type="url"
                                            id="profilePic"
                                            bind:value={formData.agent
                                                .profilePictureUrl}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <!-- Images -->
                    <Card class="mb-3">
                        <CardHeader>Images</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="imageSrc"
                                            >Image Source</Label
                                        >
                                        <Input
                                            type="text"
                                            id="imageSrc"
                                            bind:value={imageInput.src}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="imageAlt">Alt Text</Label>
                                        <Input
                                            type="text"
                                            id="imageAlt"
                                            bind:value={imageInput.alt}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="imageTitle">Title</Label>
                                        <Input
                                            type="text"
                                            id="imageTitle"
                                            bind:value={imageInput.title}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button
                                color="primary"
                                class="mt-2"
                                on:click={addImage}>Add Image</Button
                            >

                            {#each formData.media.images as image, i}
                                <div class="d-flex align-items-center mt-2">
                                    <div class="flex-grow-1">
                                        <strong>Source:</strong>
                                        {image.src}
                                    </div>
                                    <Button
                                        color="danger"
                                        size="sm"
                                        on:click={() => removeImage(i)}
                                        >Remove</Button
                                    >
                                </div>
                            {/each}
                        </CardBody>
                    </Card>

                    <!-- Submit Button -->
                    <Button
                        color="success"
                        class="w-100"
                        on:click={generateJSON}
                    >
                        Generate JSON
                    </Button>
                </Form>
            </CardBody>
        </Card>
    </Container>
</div>
