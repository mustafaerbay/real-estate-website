<script>
	import { onMount } from 'svelte';
	import ListingItem from '../src/lib/ListingItem.svelte';
	import LandingPage from './(noauth)/LandingPage.svelte';
  
	let listings = [];
	let loading = true;
	let error = null;
  
	// onMount(async () => {
	//   try {
	// 	const response = await fetch('https://api.example.com/real-estate-listings');
	// 	if (!response.ok) {
	// 	  throw new Error('Failed to fetch listings');
	// 	}
	// 	listings = await response.json();
	//   } catch (err) {
	// 	error = err.message;
	// 	loading = false
	//   } finally {
	// 	loading = false;
	//   }
	// });
  </script>
  
  <style>
	.listings {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  max-width: 800px;
	  margin: 0 auto;
	}
  
	.loading,
	.error {
	  text-align: center;
	  margin-top: 2em;
	}
  </style>
  
  <main>
	{#if loading}
	  <div class="loading">Loading listings...</div>
	  <LandingPage></LandingPage>
	{:else if error}
	  <div class="error">Error: {error}</div>
	  <!-- <LandingPage></LandingPage> -->
	{:else}
	  <div class="listings">
		{#each listings as listing}
		  <ListingItem {listing} />
		{/each}
	  </div>
	{/if}
  </main>
  