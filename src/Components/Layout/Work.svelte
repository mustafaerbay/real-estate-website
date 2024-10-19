<script>
// @ts-nocheck

	import { Row } from '@sveltestrap/sveltestrap';
	import { products, categories } from '../../app';
	import Category from '$lib/Category.svelte';
	const works = [
		{
			categories: ['webdesign', 'wordpress'],
			imageSrc: '../../assets/images/works/1.jpg',
			alt: 'work-img',
			title: 'Project Title'
		},
		{
			categories: ['work', 'webdesign', 'seo'],
			imageSrc: '../../assets/images/works/2.jpg',
			alt: 'work-img',
			title: 'Project Title'
		},
		{
			categories: ['seo', 'wordpress'],
			imageSrc: '../../assets/images/works/3.jpg',
			alt: 'work-img',
			title: 'Project Title'
		},
		{
			categories: ['wordpress', 'work', 'webdesign'],
			imageSrc: '../../assets/images/works/4.jpg',
			alt: 'work-img',
			title: 'Project Title'
		},
		{
			categories: ['seo', 'webdesign'],
			imageSrc: '../../assets/images/works/5.jpg',
			alt: 'work-img',
			title: 'Project Title'
		},
		{
			categories: ['devlopment', 'webdesign'],
			imageSrc: '../../assets/images/works/6.jpg',
			alt: 'work-img',
			title: 'Project Title'
		}
	];
	let activeLink = 'all';
	let selected_cat;
	let selected_category_id = ['1', '2', '3', '4'];

	function cat_opt(category) {
		activeLink = category.short_name
		selected_cat = category.id
	}
</script>

<section class="section text-center" id="portfolio">
	<div class="container">
		<Row class="row justify-content-center">
			<div class="col-lg-12">
				<div class="text-center">
					<h2><span class="fw-bold">ÜRÜNLER</span></h2>
					<p class="text-muted section-subtitle mx-auto mt-3">
						It is a long established fact that a reader will be of a page when established fact
						looking at its layout.
					</p>
				</div>
			</div>
		</Row>
		<div class="row mt-5">
			<ul class="col list-unstyled list-inline text-uppercase work_menu mb-0" id="menu-filter">
				<li class="list-inline-item">
					<a
						on:click={() => (activeLink = 'all')}
						class={`${activeLink === 'all' ? 'active' : ''}`}
						href="#!">All</a
					>
				</li>
				<!-- <li class="list-inline-item">
					<a
						on:click={() => (activeLink = 'seo')}
						class={`${activeLink === 'seo' ? 'active' : ''}`}
						href="#work">Seo</a
					>
				</li>
				<li class="list-inline-item">
					<a
						on:click={() => (activeLink = 'webdesign')}
						class={`${activeLink === 'webdesign' ? 'active' : ''}`}
						href="#work">Webdesign</a
					>
				</li>
				<li class="list-inline-item">
					<a
						on:click={() => (activeLink = 'work')}
						class={`${activeLink === 'work' ? 'active' : ''}`}
						href="#work">Work</a
					>
				</li>
				<li class="list-inline-item">
					<a
						on:click={() => (activeLink = 'wordpress')}
						class={`${activeLink === 'wordpress' ? 'active' : ''}`}
						href="#work">Wordpress</a
					>
				</li> -->
				<!-- {#each categories as Category}
					<li class="list-inline-item">
						<a
							on:click={() => (activeLink = Category.short_name)}
							class={`${activeLink === Category.short_name ? 'active' : ''}`}
							href="#work">{Category.short_name}</a
						>
					</li>
				{/each} -->
				{#each categories as Category}
					<li class="list-inline-item">
						<a
							on:click={() => cat_opt(Category)}
							class={`${activeLink === Category.short_name ? 'active' : ''}`}
							href="#!">{Category.short_name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="container">
		<div class="row work-filter mt-4">
			{#each products as product }
			<!-- {#each works as work (work.categories)} -->
				<div
					class={`col-lg-4 work_item ${!(selected_cat == product.category_id || activeLink == 'all') ? 'hide d-none' : ''}`}
				>
				<!-- <div
					class={`col-lg-4 work_item ${!(work.categories.includes(activeLink) || activeLink == 'all') ? 'hide d-none' : ''}`}
				> -->
					<a href="{product.image_url}" class="img-zoom">
						<div class="work_box">
							<div class="work_img">
								<img
									loading="lazy"
									src="{product.image_url}"
									class="img-fluid d-block mx-auto rounded"
									alt="work-img"
									style="width: 800; height:533"
								/>
							</div>
							<div class="work_detail">
								<p class="mb-2">{product.name}</p>
								<h4 class="mb-0">{product.description}</h4>
								<p class="mb-2">{product.tags}</p>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.work_item {
		opacity: 1;
		transition: all 1s ease-in-out;
	}
	.work_item.hide {
		opacity: 0;
	}
</style>
