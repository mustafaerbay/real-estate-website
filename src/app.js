import { products, categories } from './product';
const company_details = {
    "tax_number": "721 097 3955",
    "company_full_name": "PARADOKS ENERJI VE GAYRIMENKUL TIC. LTD. STI. ",
    "address_direction": "https://maps.app.goo.gl/6gqvFzKakxfT1oRXA",
    "address": "Atakoy 7-8-9-10. Kısım Mah. Çobançeşme E-5 yan yolu cad. no:22/1 Bakırköy/İstanbul",
    "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.371398567429!2d37.34553932072659!3d37.18621339087115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd00399b4111%3A0x60fd4aab22d44022!2sPiri%20pack%20ambalaj!5e0!3m2!1sen!2str!4v1725652443750!5m2!1sen!2str",
    "phone": "+905052083876",
    "email": "sbaratan@paradoksgayrimenkul.com",
    "formspree_url": "https://formspree.io/f/xbljlgne",
    "whatsapp": "https://wa.me/905052083876",
    "workHours": [
        { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
        { day: 'Cumartesi', hours: '10:00 - 16:00' },
        { day: 'Pazar', hours: 'Kapalı' }
    ],
    "socials": [
        { facebook: '/#' },
        { instagram: '/#' },
        { twitter: '/#' }
    ]
}
const links = [
    {
        "name": "Anasayfa",
        "url": "/",
        "is_active": true
    },
    {
        "name": "Hakkımızda",
        "url": "/about",
        "is_active": false
    },
    {
        "name": "Kategoriler",
        "url": "/categories",
        "is_active": false
    },
    {
        "name": "Ürünler",
        "url": "/products",
        "is_active": false
    },
]

export { company_details, categories, products, links }