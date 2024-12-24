<script>
	import { company_details } from '../app';
	import SocialsSmall from './Socials_small.svelte';
</script>

<div
	id="banner"
	class="absolute sticky top-20 left-2 z-20 flex rounded-md justify-start sm:rotate-0 sm:flex-row sm:justify-center md:flex-row md:top-20 md:rotate-0 md:justify-center lg:top-20 lg:rotate-0 lg:flex-row lg:justify-center xl:justify-end"
>
	<!-- <div id="banner" class="rounded-md flex flex-col sm:flex-col md:flex-row lg:flex-row justify-end absolute top-20 right-0 z-20"> -->
	<!-- <div id="banner" class="rounded-md bg-white flex flex-row justify-end sticky top-20 transition-transform duration-300 ease-in-out"> -->
	<div class="ml-2 flex justify-center rounded-md bg-white">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden md:block h-6 w-6 sm:block" />
			<span class="text-xs truncate">{company_details.phone}</span>
		</button>
	</div>
	<div class="ml-2 flex justify-center rounded-md bg-white">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden md:block h-6 w-6 sm:block" />
			<span class="text-xs"><a href="mailto:{company_details.email}">{company_details.email}</a></span>
		</button>
	</div>
	<div class="ml-2 flex justify-center rounded-md bg-white">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden md:block h-6 w-6 sm:block" />
			<span class="text-xs"><a href={company_details.whatsapp}>Whatsapp</a></span>
		</button>
	</div>
</div>

<style>
	#banner {
		/* display: flex; */
		/* flex-direction: row; */
		/* justify-content: space-evenly; */
		/* align-items */
		/* padding: 2px; */
		/* background-color: var(--color-theme-1); */
		/* color: white; */
		/* z-index: 1000; */
	}
</style>
