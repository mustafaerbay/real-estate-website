<script>
	// @ts-nocheck

	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import { Gallery, Heading, Img, Li, List, ListPlaceholder, P, Span } from 'flowbite-svelte';
</script>


<section class="section" id="about">
	<Container>
		<Row class="align-items-center">
			<Col lg="6">
				<div class="mt-3">
					<img
						src="images/foto-13.webp"
						alt=""
						class="img-fluid d-block img-thumbnail mx-auto"
					/>
				</div>
			</Col>
			<Col lg="6">
				<div class="mt-3">
					<h2><span class="fw-bold">Hakkımızda</span></h2>
					<h4 class="mt-4"><span class="text-primary fw-bold">Piripack Ambalaj</span></h4>
					<p class="text-muted mt-4">
						PİRİPACK AMBALAJ Gaziantep 5. Organize Sanayi Bölgesinde <Span underline>30000 m2</Span>
						kapalı alanda üretimini gerçekleştirmekte olup
					</p>
					<p class="text-muted fw-bold">Sıvı dolum</p>
					<p class="text-muted fw-bold">Konsantre İçecek ambalajları</p>
					<p class="text-muted fw-bold">Şekerleme</p>
					<p class="text-muted fw-bold">Bakliyat</p>
					<p class="text-muted fw-bold">Dondurulmus Gida ve Dondurma</p>
					<p class="text-muted fw-bold">Kuru Kahve</p>
					<p class="text-muted fw-bold">Kuruyemis</p>
					<p class="text-muted fw-bold">Toz icecek</p>
					<p class="text-muted mt-4">
						gibi <b>esnek gıda ambalajları</b>, Hijyen Ürünleri, ve her türlü temizlik gurubu
						ürünlerinin ambalaj üretimini modern tesislerinde 4.0 Endüstri ile gerçekleştirmektedir.
					</p>
					<p class="text-muted mt-4">
						Markamızdan aldığımız, İlhamdan yola çıkarak yaptığım işin temizini ve en iyisini
						nitelikli hale getirmek ve Dünya çapında bir yer edinmek için karar aldığımız ve
						üreticiden tüketiciye kadar evrensel ve çevreci anlayışla işimizi yapmak bitmeyecek
						tutkumuzdur. Dünya standartlarında bir işletmecilikle gelişen teknolojileri takip ederek
						ve uyum sağlayarak gelişimimize devam edeceğiz.
					</p>
					<div>
						<ul class="about-social list-inline mb-0 mt-4">
							<li class="list-inline-item">
								<a href="#contact"><i class="mdi mdi-dribbble"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="#contact"><i class="mdi mdi-facebook"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="#contact"><i class="mdi mdi-linkedin"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="#contact"><i class="mdi mdi-twitter"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>
