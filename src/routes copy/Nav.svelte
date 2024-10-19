<script>
	import ContactFormNew from '$lib/ContactForm_new.svelte';
	import ContactFormSidabar from '$lib/ContactForm_sidabar.svelte';
import Socials from '$lib/Socials.svelte';
	import SocialsSmall from '$lib/Socials_small.svelte';
import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder,
		Button
	} from 'flowbite-svelte';
</script>

<!-- TODO: make navbar rounded and centered -->
<div class="relative px-8 z-50">
	<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
		<NavBrand href="/">
			<img src="images/logo.png" class="me-3 h-6 sm:h-9" alt="PiriPack Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
		</NavBrand>
		<div class="flex flex-row md:order-2">
			<!-- <Button size="sm" color="primary" href="/contact">İletişim</Button> -->
			<ContactFormSidabar></ContactFormSidabar>
			<!-- <p>+90 555 123 12 34</p> -->
			<NavHamburger />
		</div>
		<NavUl class="order-1">
			<NavLi href="/" active={true}>Anasayfa</NavLi>
			<NavLi href="/about">Hakkımızda</NavLi>
			<NavLi href="/products">Ürünler</NavLi>
			<NavLi href="/categories">Kategoriler</NavLi>
		</NavUl>
	</Navbar>
	<!-- <div style="height:300px;" class="overflow-scroll pb-16">
		<Skeleton class="mt-16 mb-8" />
		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />
	</div> -->
</div>
