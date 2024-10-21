<script>
	// @ts-nocheck

	import { Col, Container, Row } from "@sveltestrap/sveltestrap";
	import {
		Gallery,
		Heading,
		Img,
		Li,
		List,
		ListPlaceholder,
		P,
		Span,
	} from "flowbite-svelte";
</script>

<section class="section" id="about">
	<Container>
		<Row class="align-items-center">
			<Col lg="6">
				<div class="mt-3">
					<img
						src="images/foto-01.webp"
						alt=""
						class="img-fluid d-block img-thumbnail mx-auto"
					/>
				</div>
			</Col>
			<Col lg="6">
				<div class="mt-3">
					<h2><span class="fw-bold">About Us</span></h2>
					<h4 class="mt-4">
						<span class="text-primary fw-bold"
							>Paradoks Real Estate</span
						>
					</h4>
					<p class="text-muted mt-4">
						At <b> Paradoks Real Estate</b>, we specialize in
						providing exclusive real estate services tailored to
						meet the needs of discerning buyers, sellers, and
						investors. From luxury homes in prime locations to
						turnkey properties and modern new constructions, we
						offer a curated selection of high-end listings. Our
						expertise also extends to investment opportunities,
						ensuring strong returns for our clients. Join us at our
						open houses or schedule a private tour to experience
						exceptional properties firsthand. With a commitment to
						excellence and a deep understanding of the market, we’re
						here to help you find your perfect home or investment.
						This concise, upscale description aligns with the
						premium nature of the keywords you want to highlight.
					</p>
					<div>
						<ul class="about-social list-inline mb-0 mt-4">
							<li class="list-inline-item">
								<a href="#contact"
									><i class="mdi mdi-dribbble"></i></a
								>
							</li>
							<li class="list-inline-item">
								<a href="#contact"
									><i class="mdi mdi-facebook"></i></a
								>
							</li>
							<li class="list-inline-item">
								<a href="#contact"
									><i class="mdi mdi-linkedin"></i></a
								>
							</li>
							<li class="list-inline-item">
								<a href="#contact"
									><i class="mdi mdi-twitter"></i></a
								>
							</li>
						</ul>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>
