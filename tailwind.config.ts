import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}','./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
	theme: {
		extend: {
			colors: {
				primary: {"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"}

			},
			backgroundImage: {
				'hero-pattern': "url('/images/foto-01.webp')",
				'footer-texture': "url('/img/footer-texture.png')",
			  }
		}
	},

	plugins: [flowbitePlugin]
} as Config;
