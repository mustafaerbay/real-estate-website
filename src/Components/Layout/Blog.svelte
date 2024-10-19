<script>
	import { products } from '../../app';

	let highligted_products = [];
	let all_prod = products;

</script>

<section class="section bg-light" id="blog">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12">
				<div class="text-center">
					<h2>Yeni <span class="fw-bold">Ürünler</span></h2>
					<p class="text-muted section-subtitle mx-auto mt-3">
						{products.description}
					</p>
				</div>
			</div>
		</div>
		<div class="row mt-5">
			{#each products as product}
				<div class={`col-lg-4 mt-3 ${!product.is_highlighted ? 'hide d-none' : ''}`}>
					<div class="card rounded border-0 p-2">
						<div class="img_blog">
							<img
								src="{product.image_url}"
								alt=""
								class="img-fluid d-block mx-auto rounded"
							/>
						</div>
						<div class="content_blog p-3">
							<div>
								<h5 class="fw-bold mb-0 ">
									<a href="#contact" class="text-body text-uppercase">{product.name}</a>
								</h5>
							</div>
							<div class="mt-3">
								<!-- <p class="h6 text-muted date_blog mb-0">
									11 March 2018 <a href="#contact" class="text-primary fw-bold">By Kerri</a>
								</p> -->
								<p class="desc_blog text-muted mt-3">
									{product.long_description}
								</p>
                                {#each product.tags as tag}
                                    <p class="h6 mb-0">{tag}</p>
                                {/each}
								<!-- <p class="h6 mb-0">
									<a href="#contact" class="text-muted fw-bold">Read More...</a>
								</p> -->
							</div>
						</div>
					</div>
				</div>
			{/each}
			<!-- <div class="col-lg-4 mt-3">
				<div class="card rounded border-0 p-2">
					<div class="img_blog">
						<img
							src="assets/images/blog/blog-1.jpg"
							alt=""
							class="img-fluid d-block mx-auto rounded"
						/>
					</div>
					<div class="content_blog p-3">
						<div>
							<h5 class="fw-bold mb-0">
								<a href="#contact" class="text-body">There are many variations</a>
							</h5>
						</div>
						<div class="mt-3">
							<p class="h6 text-muted date_blog mb-0">
								11 March 2018 <a href="#contact" class="text-primary fw-bold">By Kerri</a>
							</p>
							<p class="desc_blog text-muted mt-3">
								Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
								fames. Lobortis ultricies.
							</p>
							<p class="h6 mb-0"><a href="#contact" class="text-muted fw-bold">Read More...</a></p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 mt-3">
				<div class="card rounded border-0 p-2">
					<div class="img_blog">
						<img
							src="assets/images/blog/blog-2.jpg"
							alt=""
							class="img-fluid d-block mx-auto rounded"
						/>
					</div>
					<div class="content_blog p-3">
						<div>
							<h5 class="fw-bold mb-0">
								<a href="#contact" class="text-body">Contrary to popular belief</a>
							</h5>
						</div>
						<div class="mt-3">
							<p class="h6 text-muted date_blog mb-0">
								18 March 2018 <a href="#contact" class="text-primary fw-bold">By Kerri</a>
							</p>
							<p class="desc_blog text-muted mt-3">
								Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
								fames. Lobortis ultricies.
							</p>
							<p class="h6 mb-0"><a href="#contact" class="text-muted fw-bold">Read More...</a></p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 mt-3">
				<div class="card rounded border-0 p-2">
					<div class="img_blog">
						<img
							src="assets/images/blog/blog-3.jpg"
							alt=""
							class="img-fluid d-block mx-auto rounded"
						/>
					</div>
					<div class="content_blog p-3">
						<div>
							<h5 class="fw-bold mb-0">
								<a href="#contact" class="text-body">Lorem Ipsum is not simply</a>
							</h5>
						</div>
						<div class="mt-3">
							<p class="h6 text-muted date_blog mb-0">
								22 March 2018 <a href="#contact" class="text-primary fw-bold">By Kerri</a>
							</p>
							<p class="desc_blog text-muted mt-3">
								Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis
								fames. Lobortis ultricies.
							</p>
							<p class="h6 mb-0"><a href="#contact" class="text-muted fw-bold">Read More...</a></p>
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</section>
