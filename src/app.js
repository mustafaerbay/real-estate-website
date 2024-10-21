export const company_details = {
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
const contact_info = {
    "name": "",
    "surname": "",
    "email": "",
    "no": "",
    "detail": ""
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
const categories = [
    {
        "id": 1,
        "name": "HOME FOR SALE",
        "short_name": "HOME",
        "description": "Latest gadgets and electronics",
        "url": "images/foto-01.webp"
    },
    {
        "id": 2,
        "name": "OFFICE RENTALS",
        "short_name": "OFFICE",
        "description": "Appliances for your home",
        "url": "images/foto-02.webp"
    },
    {
        "id": 3,
        "name": "BUY LANDS",
        "short_name": "LAND",
        "description": "ARSA ALIM-SATIM ISLERI",
        "url": "images/foto-03.webp"
    },
    {
        "id": 4,
        "name": "RENTALS",
        "short_name": "RENTALS",
        "description": "Wide range of books and literature",
        "url": "images/foto-04.webp"
    }
]
const products = [
    {
        "id": 101,
        "is_highlighted": true,
        "name": "demo 01",
        "category_id": 1,
        "price": 799.99,
        "stock": 25,
        "description": "demo 01 aciklama",
        "image_url": "images/foto-01.webp",
        "tags": ["365m2", "5.kat"],
        "long_description": "demo 01 uzun aciklama"
    },
    {
        "id": 201,
        "is_highlighted": false,
        "name": "demo 02",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "demo 02 aciklama",
        "image_url": "images/foto-02.webp",
        "tags": ["350m2", "1.kat"],
        "long_description": "demo 02 uzun aciklama"
    },
    {
        "id": 301,
        "is_highlighted": false,
        "name": "demo 03",
        "category_id": 3,
        "price": 99.99,
        "stock": 25,
        "description": "demo 03 aciklama",
        "image_url": "images/foto-03.webp",
        "tags": ["1000m2", "10.kat"],
        "long_description": "demo 03 uzun aciklama"
    },
    {
        "id": 401,
        "is_highlighted": false,
        "name": "demo 04",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "demo 04 aciklama",
        "image_url": "images/foto-04.webp",
        "tags": ["123m2", "29.kat"],
        "long_description": "demo 04 uzun aciklama"
    }
]
export { phone, email, whatsapp, workHours, mapUrl, address, categories, products, links }