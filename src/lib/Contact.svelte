<script>
	// import { MailBoxSolid } from "flowbite-svelte-icons";
	import { MailBoxSolid } from 'flowbite-svelte-icons'; // Flowbite-Svelte Icons

	const mapUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.371398567429!2d37.34553932072659!3d37.18621339087115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd00399b4111%3A0x60fd4aab22d44022!2sPiri%20pack%20ambalaj!5e0!3m2!1sen!2str!4v1725652443750!5m2!1sen!2str'; // Google Maps iframe linkini buraya ekle
	const phone = '+90 123 456 7890'; // Telefon numarası
	const email = 'info@seninsiten.com'; // Email adresi
	const whatsapp = 'https://wa.me/901234567890'; // WhatsApp linki
	const workHours = [
		{ day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
		{ day: 'Cumartesi', hours: '10:00 - 16:00' },
		{ day: 'Pazar', hours: 'Kapalı' }
	];
	const address = 'Sanayi, 60011. Caddesi No:17, 27090 Şehitkamil/Gaziantep';
</script>

<section class="contact-container">
	<div class="map-container">
		<iframe title="title" src={mapUrl} width="600" height="450" allow="fullscreen" loading="lazy"
		></iframe>
	</div>
	<div class="info-container">
		<!-- <h2>İletişim Bilgileri</h2> -->

		<div class="working-hours">
			<h3>Çalışma Saatleri</h3>
			<ul>
				{#each workHours as workHour}
					<li>{workHour.day}: {workHour.hours}</li>
				{/each}
			</ul>
		</div>

		<div class="address">
			<h3>Adres</h3>
			<p>{address}</p>
		</div>

		<div class="contact-options">
			<h3>İletişim</h3>

			<p><a href={`tel:${phone}`}>{phone}</a></p>
			<p><a href={`mailto:${email}`}>{email}</a></p>
			<p><a href={whatsapp} target="_blank">WhatsApp</a></p>
		</div>
	</div>
</section>

<style>
	
	.contact-container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
		flex-wrap: wrap;
		font-family: var(--font-body);
	}
	.map-container,
	.info-container {
		height: 600px;
		flex: 1;
		min-width: 300px;
		background-color: var(--color-theme-3); /* Yeşil arka plan rengi */
		/* border-radius: 12px; Yuvarlatılmış köşeler */
		padding: 20px;
		box-sizing: border-box; /* Boyutların eşit olmasını sağlamak için */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000;
	}

	.working-hours,
	.address,
	.contact-options {
		margin-bottom: 20px;
		text-align: center;
	}
	a {
		color: black;
		text-decoration: none;
		background-color: white;
		border-radius: 12px;
		padding: 5px;
	}
	a:hover {
		text-decoration: underline;
	}
	iframe {
		width: 100%;
		border: 0;
		/* justify-content: center; */
		/* display: grid;	 */
		margin: auto;
	}

	/* Media query for smaller screens */
	@media (max-width: 768px) {
		.contact-container {
			flex-direction: column;
			align-items: center;
		}
		.map-container,
		.info-container {
			width: 100%;
		}
	}
</style>
