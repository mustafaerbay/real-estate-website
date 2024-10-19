<script>
	// @ts-nocheck

	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import {
		Carousel,
		Gallery,
		Heading,
		Li,
		List,
		ListPlaceholder,
		P,
		Span,
		Marquee
	} from 'flowbite-svelte';
	import AccordionCategory from '$lib/AccordionCategory.svelte';
	import { BadgeCheckOutline } from 'flowbite-svelte-icons';
	import Slide from 'flowbite-svelte/Slide.svelte';
	const images = [
		{ alt: 'shoes', src: 'images/foto-13.webp' },
		{ alt: 'small bag', src: 'images/foto-02.webp' },
		{ alt: 'plants', src: 'images/foto-03.webp' },
		{ alt: 'watch', src: 'images/foto-14.webp' },
		{ alt: 'shoe', src: 'images/foto-04.webp' },
		{ alt: 'shoe', src: 'images/foto-01.webp' }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Piri Pack Ambalaj" />
</svelte:head>
<div>
	<Gallery
		class="grid-cols-3 gap-4 "
		items={images}
		let:item
		style={{ minHeight: '100vh', maxHeight: '100vh' }}
	>
		<div class="rounded-md">
			<!-- <div class="rounded-md ring-1 ring-green-600 dark:ring-red-400 p-1"> -->
			<img src={item.src} alt={item.alt} class="h-auto max-w-full rounded-md" />
			<!-- <img src={item.src} alt={item.alt} class="h-auto max-w-full rounded-md hover:rounded-3xl hover:shadow-3xl hover:transition" /> -->
		</div>
	</Gallery>
</div>
<div class="pb-4 pt-4 max-h-4xl">
	<Carousel {images} duration="3000" />
</div>
<!-- <hr class="solid" />
<h1>Hakkimizda</h1>
<hr class="solid" /> -->

<!-- TODO: marquee not good in phone size -->
<div class="hidden md:block lg:block xl:block ">
	<Marquee speed={1} hoverSpeed={0.5} class="py-16">
		<img class="h-64 w-64" alt="flowbite-svelte icon logo" src="images/foto-01.webp" />
		<img class="h-64 w-64" alt="flowbite-svelte icon logo" src="images/foto-06.webp" />
		<img class="h-64 w-64" alt="flowbite-svelte icon logo" src="images/foto-07.webp" />
		<img class="h-64 w-64" alt="flowbite-svelte icon logo" src="images/foto-08.webp" />
	</Marquee>
</div>
<div id="big_header">
	<Heading
		tag="h1"
		class="mb-4"
		color="bg-white"
		customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl sm:text-sm">Biz Kimiz !</Heading
	>
</div>

<P class="mb-3" color="text-black " firstupper
	>PİRİPACK AMBALAJ Gaziantep 5. Organize Sanayi Bölgesinde <Span underline>30000 m2</Span> kapalı alanda
	üretimini gerçekleştirmekte olup
</P>
<P class="mb-3" color="text-black dark:text-gray-400">
	<List tag="ul" class="space-y-1 text-black dark:text-gray-400">
		<Li>Sıvı dolum</Li>
		<Li>Konsantre İçecek ambalajları</Li>
		<Li>Şekerleme</Li>
		<Li>Bakliyat</Li>
		<Li>Dondurulmus Gida ve Dondurma</Li>
		<Li>Kuru Kahve</Li>
		<Li>Kuruyemis</Li>
		<Li>Toz icecek</Li>
	</List>
	gibi <b>esnek gıda ambalajları</b>, Hijyen Ürünleri, ve her türlü temizlik gurubu ürünlerinin
	ambalaj üretimini modern tesislerinde 4.0 Endüstri ile gerçekleştirmektedir.
</P>
<P class="mb-3" color="text-black dark:text-gray-400">
	Markamızdan aldığımız, İlhamdan yola çıkarak yaptığım işin temizini ve en iyisini nitelikli hale
	getirmek ve Dünya çapında bir yer edinmek için karar aldığımız ve üreticiden tüketiciye kadar
	evrensel ve çevreci anlayışla işimizi yapmak bitmeyecek tutkumuzdur. Dünya standartlarında bir
	işletmecilikle gelişen teknolojileri takip ederek ve uyum sağlayarak gelişimimize devam edeceğiz.
</P>
<P class="mb-3" color="text-black dark:text-gray-400"
	>Problemleri ve olumsuzlukları cesaretle göğüsleyerek çözümleyici yaklaşımlar aramak temel
	amacımız ve hedefimiz olacaktır. Bu bağlamda <b>PİRİPACK</b>
	olarak hedefimiz yenilenebilir enerjilerle, doğal kaynaklara zarar vermeden
	<Span underline>%100</Span> geri dönüştürülebilen üretim yapmak ve yarınlara daha faydalı bir temiz
	bir dünya bırakmak olacaktır.</P
>

<h1>Ürün Özellikleri</h1>
<div id="urun_ozellikleri">
	<div class="list-container">
		<ul class="success-list">
			<li><span class="icon">&#10004;</span>PET/PETMET/PE</li>
			<li><span class="icon">&#10004;</span>PET/ALU/PE</li>
			<li><span class="icon">&#10004;</span>PET/CPP</li>
			<li><span class="icon">&#10004;</span>PE/EVOH/PE</li>
			<li><span class="icon">&#10004;</span>PA/PE</li>
		</ul>
	</div>
</div>

<!-- <p class="text-2xl dark:text-white font-sans hover:bg-green-300">asdasdasdada</p> -->
<!-- <section> -->
<!-- <h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter /> -->
<!-- </section> -->

<style>
	img {
		-webkit-transition: all 2s;
	}
	img:hover {
		transition: all 2s;
		border-radius: 25%;
	}
	hr.solid {
		border-top: 3px solid var(--color-theme-1);
		padding-bottom: 3rem;
	}

	/* h1 {
		font-family: var(--font-family);
		padding-top: 10rem;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	} */
	/* p {
		margin: 10rem;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		width: 100%;
		position: relative;
		display: block;
	} */
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */

	#big_header {
		padding: 1px;
		text-align: center;
		background: var(--color-theme-1);
		color: white;
		font-size: 30px;
	}

	#urun_ozellikleri {
		font-size: x-large;
		margin: auto;
		height: 600px;
		flex: 1;
		min-width: 300px;
		background-color: white; /* Yeşil arka plan rengi */
		/* border-radius: 12px; Yuvarlatılmış köşeler */
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000;
	}

	.list-container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* height: 30vh;  */
	}

	.success-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.success-list li {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.icon {
		color: green;
		margin-right: 10px;
		font-size: 1.2em;
	}
</style>
