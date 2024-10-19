<script>
	// @ts-nocheck

	import Category from '$lib/Category.svelte';
	import { products } from '../../app';
	import { categories } from '../../app';
	import { Button, Modal, Badge } from 'flowbite-svelte';
	let defaultModal = false;
	let modal_bind = '';
	function alert_2(index) {
		// alert("Hello! I am an alert box!!");
		defaultModal = true;
		modal_bind = products[index];
	}
</script>

<div class="flex-container relative">
	{#each categories as item}
		<Category name={item.name} description={item.description} url={item.url}></Category>
	{/each}
</div>
<!-- TODO: fix product list yazilar alta geciyor-->
<div class="relative">
	<!-- <div class="relative flex grid flex-col justify-center"> -->
	{#each categories as category, index}
		{@const catId = category.id}		
		<div class="solid relative mb-4 items-center justify-center border {catId === 1 ? 'bg-gradient-to-r from-green-300 to-green-100' : catId === 2 ? 'bg-gradient-to-l from-green-300 to-green-100' : catId === 3 ? 'bg-gradient-to-r from-green-300 to-green-100' : 'bg-gradient-to-l from-green-300 to-green-100'}">
			<div class="flex flex-row justify-center">
				<!-- <h2 class="m-1 text-black decoration-4">{category.name}</h2> -->
				<div class=" text-xl md:text-5xl font-extrabold mt-4 ...">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-300">
						{category.name}
					</span>
				  </div>
			</div>
			<div class="flex flex-row justify-center text-xl md:text-5xl">
				<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 uppercase">
					Kategori kodu -- {category.id}
				</span>
				<!-- <h2 class="m-1 uppercase text-black decoration-4">Kategori kodu -- {category.id}</h2> -->
			</div>
			<div
				class="m-2 flex grid grid-cols-1 items-center gap-4 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{#each products as product, i}
					{#if product.category_id == catId}
						<Button on:click={() => alert_2(i)} class="bg-0">
							<div
								class="bg-cyan relative h-72 w-64 items-center text-balance border text-black hover:text-white"
							>
								<!-- <div class="relative place-content-stretch place-self-stretch justify-center items-center h-72 w-64 text-wrap border"> -->
								<img
									class="w-64 items-center object-cover"
									src={product.image_url}
									alt={product.description}
								/>

								<div class="product_name absolute bottom-0 h-4 w-64 text-balance text-center">
									<p class="absolute font-mono">{product.name}</p>
								</div>
								<p class="absolute font-mono">{product.id}</p>
							</div>
						</Button>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
	<Modal
		title={modal_bind.name}
		bind:this={modal_bind}
		bind:open={defaultModal}
		autoclose
		outsideclose="true"
	>
		<div class="">
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				{modal_bind.description}
				kisa aciklama kismi
			</p>
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				{modal_bind.long_description}
				uzun aciklama kismi
			</p>
			<div class="flex justify-center uppercase">
				<p>Ürün Özellikleri</p>
			</div>
			<div class="flex grid grid-cols-2 divide-x-4 divide-solid divide-lime-500 p-1 xl:grid-cols-3">
				<div>
					<p class="uppercase">Ebatlar</p>
					<ul>
						{#each modal_bind.tags as item}
							<li>
								<Badge color="green">{item}</Badge>
								<!-- {item} -->
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<li><span class="icon">&#10004;</span>PET/PETMET/PE</li>
					<li><span class="icon">&#10004;</span>PET/ALU/PE</li>
					<li><span class="icon">&#10004;</span>PET/CPP</li>
					<li><span class="icon">&#10004;</span>PE/EVOH/PE</li>
					<li><span class="icon">&#10004;</span>PA/PE</li>
					ikinci div
				</div>
				<div>
					<p><span class="icon">&#10004;</span> PET/PETMET/PE</p>
					<p><span class="icon">&#10004;</span> PET/ALU/PE</p>
					<p><span class="icon">&#10004;</span> PET/CPP</p>
					<p><span class="icon">&#10004;</span> PE/EVOH/PE</p>
					<p><span class="icon">&#10004;</span> PA/PE</p>
				</div>
			</div>
		</div>
		<!-- <svelte:fragment slot="footer">
			<Button on:click={() => alert('Handle "success"')}>I accept</Button>
			<Button color="alternative">Decline</Button>
		</svelte:fragment> -->
	</Modal>
</div>
<!-- <div class="flex-container relative mb-4 p-4">
	{#each products as product}
		<div id="products" class="m-4 h-64 w-64 p-4">
			<div>
				<img class="h-64 w-64 object-cover" src={product.image_url} alt={product.description} />
			</div>
			<div>
				<p>{product.name}</p>
			</div>
		</div>
	{/each}
</div> -->

<style>
	img {
		opacity: 75%;
		-webkit-transition: all 2s;
	}
	img:hover {
		opacity: 100%;
		transition: all 2s;
	}
	.flex-container {
		/* float: left; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		/* align-items: center; */
		padding-bottom: 1rem;
		/* justify-content: space-between; */
		/* padding-top: 3rem; */
	}
	@media (max-width: 800px) {
		.flex-container {
			flex-direction: row;
		}
	}
	/* #product_name {
		display: none;
	} */
	#product_name:hover {
		/* display: content; */
		/* background-color: black; */
		/* transition: all 2sn; */
	}
	#product_outer {
		/* box-shadow: 5px 5px 5px 5px; */
		min-width: 300px;
		max-width: 300px;
		/* border-style: solid;
		border-width: 1px;
		border-color: var(--color-theme-1); */
	}
</style>
