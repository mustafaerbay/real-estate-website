<script>
	import { ImagePlaceholder, Input } from 'flowbite-svelte';
	import { Card, Button, Label, Checkbox } from 'flowbite-svelte';
</script>

<div id="contact_and_image">
	<div class="h-auto bg-cover bg-center" style='background-image:url(images/foto-01.webp)'>
		<!-- <img class="h-auto max-w-full flex object-cover" src="images/foto-01.webp" alt="image description" /> -->
	</div>
	<div>
		<Card>
			<form class="flex flex-col space-y-6" action="/">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
				<Label class="space-y-2">
					<span>Isim</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<a
						href="/"
						class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
					>
						Lost password?
					</a>
				</div>
				<Button type="submit" class="w-full">Login to your account</Button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Not registered? <a
						href="/"
						class="text-primary-700 hover:underline dark:text-primary-500"
					>
						Create account
					</a>
				</div>
			</form>
		</Card>
	</div>
</div>

<style>
	div {
		justify-content: center;
        /* justify-items: auto; */
		/* flex-direction: row; */
		/* float: left; */
		padding: 1rem;
        flex-shrink: 1;
        flex-grow: 1;
        flex-basis: 10px;
        /* display: flex; */
	}
	img {
		max-width: 600px;
		max-height: 600px;
	}

	#contact_and_image {
        display: flex;

		background-color: antiquewhite;
		padding: 1rem;
		margin: 1rem;
		height: 300px;
		flex: 1;
		min-width: 300px;
		/* background-color: var(--color-theme-3); Yeşil arka plan rengi */
		/* border-radius: 12px; Yuvarlatılmış köşeler */
		padding: 20px;
		box-sizing: border-box; /* Boyutların eşit olmasını sağlamak için */
		/* display: flex; */
		flex-direction: row;
		justify-content: space-between;
		border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000;
	}
	img,div {
        display: flex;
		min-width: 150px;
		padding: 1rem;
		margin: 1rem;
		border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000;
	}

	/* #contact_and_image {
		background-color: antiquewhite;
		padding: 1rem;
		margin: 1rem;
		border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000;
	} */
</style>
