<script>
	// import { MailBoxSolid } from "flowbite-svelte-icons";
	import { MailBoxSolid } from 'flowbite-svelte-icons'; // Flowbite-Svelte Icons
	import { company_details } from '../app'
</script>

<section class="contact-container">
	<div class="map-container">
		<iframe title="title" src={company_details.mapUrl} width="600" height="450" allow="fullscreen" loading="lazy"
		></iframe>
	</div>
	<div class="info-container">
		<!-- <h2>İletişim Bilgileri</h2> -->

		<div class="working-hours">
			<h3>Çalışma Saatleri</h3>
			<ul>
				{#each company_details.workHours as workHour}
					<li>{workHour.day}: {workHour.hours}</li>
				{/each}
			</ul>
		</div>

		<div class="address">
			<h3>Adres</h3>
			<p>{company_details.address}</p>
		</div>

		<div class="contact-options">
			<h3>İletişim</h3>

			<p><a href={`tel:${company_details.phone}`}>{company_details.phone}</a></p>
			<p><a href={`mailto:${company_details.email}`}>{company_details.email}</a></p>
			<p><a href={company_details.whatsapp} target="_blank">WhatsApp</a></p>
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
