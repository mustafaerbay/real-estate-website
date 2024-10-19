<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink,
		SpeedDialButton,
		GradientButton,
		FooterIcon
	} from 'flowbite-svelte';
	// @ts-ignore
	import { links } from '../app';
	import Socials from '$lib/Socials.svelte';


</script>

<!-- svelte-ignore a11y_missing_attribute -->

<!-- <footer class="space-evenly flex flex-row justify-center"> -->
<!-- <GradientButton color="green" on:click={openWhatsapp}>Whatsapp +123456789</GradientButton>
	
	<button class="flex rounded-full bg-white hover:bold">Save Changes</button>
	<GradientButton color="green">Iletisim No +90342 321 32 21</GradientButton>
	<GradientButton color="green">Iletisim No +90342 321 32 21</GradientButton> -->
<!-- <SpeedDialButton name="Email" href="/contact">
        <ShareNodesSolid class="w-6 h-6" />
    </SpeedDialButton> -->
<!-- </footer> -->
<Socials></Socials>
<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand
			href="https://piripack.com.tr"
			src="/images/logo.png"
			alt="PiriPack Logo"
			name=""
		/>

		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-0 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			{#each links as item}
				<FooterLink href={item.url}>{item.name}</FooterLink>
			{/each}
			<!-- <FooterLink href="/about">Hakkımızda</FooterLink> -->
			<!-- <FooterLink href="/">Privacy Policy</FooterLink> -->
			<!-- <FooterLink href="/">Licensing</FooterLink> -->
			<!-- <FooterLink href="/contact">İletişim</FooterLink> -->
		</FooterLinkGroup>
	</div>
	<!-- <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> -->
	<FooterCopyright href="/" by="PiriPack" aClass="" />
</Footer>




