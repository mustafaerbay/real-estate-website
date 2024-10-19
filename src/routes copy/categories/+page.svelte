<script>
	import Category from '$lib/Category.svelte';
	import { products } from '../../app';
	import { categories } from '../../app';
</script>

<svelte:head>
	<title>Kategoriler</title>
	<meta name="description" content="Piri Pack Ambalaj | Kategoriler" />
</svelte:head>
<div class="flex-container relative">
	{#each categories as item}
		<Category name={item.name} description={item.description} url={item.url}></Category>
	{/each}
</div>

<style>
	.flex-container {
		/* float: left; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		padding-bottom: 1rem;
		/* justify-content: space-between; */
		/* padding-top: 3rem; */
	}
	@media (max-width: 800px) {
		.flex-container {
			flex-direction: row;
		}
	}
</style>
