<script>
	// @ts-ignore
	import Header from './Header.svelte';
	import '../app.css';
	// @ts-ignore
	import Nav from './Nav.svelte';

	import Foot from './Foot.svelte';
	import SocialsSmall from '$lib/Socials_small.svelte';
	import BannerTop from '$lib/Banner_top.svelte';
</script>

<!-- <div class="app bg-repeat" style="background-image: url('/images/logo.png')"> -->
<!-- <div class="app bg-repeat" style="background-image: url('/images/logo.png')"> -->
<div class="app relative bg-gradient-to-r from-green-100 to-green-300">
	<!-- <Header /> -->
	
	<Nav></Nav>
	<SocialsSmall></SocialsSmall>
	<BannerTop></BannerTop>
	<main>
		<slot></slot>
		<!-- <Contact></Contact> -->
		<!-- <Maps></Maps> -->
		<!-- <CustomContact></CustomContact> -->
	</main>
	<!-- <NavbarSide></NavbarSide> -->
	<!-- <SpeedDialButton></SpeedDialButton> -->

	<Foot></Foot>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-top: 6rem;
		/* background: linear-gradient(300deg, #24734f, #7abb38, white);
		background-size: 180% 180%;
		animation: gradient-animation 3s ease infinite; */
		/* background: linear-gradient(220deg, #612716, #183c07, #777043, #c24c24, #b6d7bb, #86e2cd); */
		background-size: 360% 360%;
		animation: gradient-animation 18s ease infinite;

		background-image: linear-gradient(
			to right top,
			#24734f,
			#2f7d58,
			#3a8661,
			#44906a,
			#4e9a73,
			#5ca57f,
			#6ab18b,
			#78bc98,
			#8eccaa,
			#a3dbbc,
			#b9ebcf,
			#cffbe2
		);
	}
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-top: 1rem;
		padding-left: 4rem;
		padding-right: 4rem;
		width: 100%;
		/* max-width: 90rem; */
		max-width: fit-content;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
