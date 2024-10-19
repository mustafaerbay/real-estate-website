// @ts-nocheck

import { GOOGLE_EMAIL,GOOGLE_EMAIL_PASSWORD } from "$env/static/private"
import nodemailer from 'nodemailer';
import { writable } from 'svelte/store';
// export let options_v2 = writable()
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: GOOGLE_EMAIL,
		pass: GOOGLE_EMAIL_PASSWORD
	}
});

// const emailHtml = render({
// 	template: Hello,
// 	props: {
// 		name: 'Svelte'
// 	}
// });

// export const options = {
// 	from: 'eerrbbaayy@gmail.com',
// 	to: 'eerrbbaayy@gmail.com',
// 	subject: 'hello world',
// 	html: "emailHtmlas"
// };

export default transporter;
// @ts-ignore
// module.exports = transporter;
// export module transporter