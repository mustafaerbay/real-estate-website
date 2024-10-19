<script>
	import { Badge } from 'flowbite-svelte';

	export let name;
	export let description;
	export let url;
</script>

<!-- <div> -->
<div id="category" class="flex max-w-sm flex-col rounded-md dark:border-gray-700 dark:bg-gray-800">
	<!-- <div
	id="category"
	class="relative max-w-sm rounded-md bg-white hover:rounded-3xl dark:border-gray-700 dark:bg-gray-800"
> -->
	<!-- <div id="category"
	class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
> -->
	<div>
		<a href="#">
			<img class="rounded-md object-contain" style="display=inline-block;" src={url} alt="" />
			<!-- <img class="rounded-md hover:rounded-3xl" style="display=inline-block;" src={url} alt="" /> -->
		</a>
	</div>
	<div class="p-5">
		<a href="/contact">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{name}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{description}
		</p>
		<!-- <div class="relative">
			<a
				id="bottom_button"
				href="/contact"
				class="absolute bottom-0 right-0 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Bilgi Al
				<svg
					class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
		</div> -->
	</div>
</div>

<!-- <div>denemee</div> -->
<!-- </div> -->

<style>
	#bottom_button {
		/* position: absolute; */
		bottom: 10;
		margin-top: -25px;
		/* margin-right: 10px; */
		/* position: 1px 1px 11px 10px; */
		position: relative;
		background-color: var(--color-theme-1);
	}
	#category {
		/* box-shadow: 5px 5px 5px 5px; */
		min-width: 300px;
		max-width: 300px;
		border-style: solid;
		border-width: 1px;
		border-color: var(--color-theme-1);
		-webkit-transition: all 2s;
	}

	/* img {
		-webkit-transition: all 2s;
	} */
	#category:hover {
		transition: all 2s;
		/* border-radius: 25%; */
		border-end-end-radius: 2rem;
		background-color: var(--color-theme-3);
	}
	div {
		position: relative;
		/* padding: 1rem; */
		margin: 4px;
		/* border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000; */
		/* flex-direction: row; */
		/* float: left; */
	}
</style>
