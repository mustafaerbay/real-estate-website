// @ts-nocheck
import { GOOGLE_EMAIL, RECEIVER_EMAIL_ADDRESS } from '$env/static/private';
import transporter from '$lib/emailSetup';
import { contact_info } from '../../store';

export const actions = {
    sendEmail: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get('name');
            const email = formData.get('email');
            // const subject = formData.get()
            console.log(contact_info)
            let html = `<h2>hi</h2><pre>${contact_info}</pre>`;
            const message = {
                from: GOOGLE_EMAIL,
                to: RECEIVER_EMAIL_ADDRESS,
                subject: "email subject",
                text: contact_info,
                html: html

            };
            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info)
                        }
                    })
                })
            }
            await sendEmail(message)
            await postmarkapp_send_email(message)
            // İşlem yap (veritabanına kaydet, e-posta gönder vs.)

            return {
                // success: true,
                success: `Thank you, ${name}! Your email ${email} has been submitted.`
            };
        } catch (error) {
            console.error(error)
        }
    }
};