import { MAIL_SMTP_TOKEN } from "$env/static/private";

let url = 'https://api.postmarkapp.com/email';
// @ts-ignore
export const postmarkapp_send_email = async (body) => {

    try {
        const userRes = await fetch(`${url}`, {
            method: 'POST',
            // redirect: 'follow',
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Postmark-Server-Token': MAIL_SMTP_TOKEN
            },
        });
        if (!userRes.ok) {
            throw new Error('Failed to create school');
        }

        const userData = await userRes.json();
        return userData;
    } catch (error) {
        // @ts-ignore
        console.error('Error creating school:', error.message);
        throw error;
    }

}
