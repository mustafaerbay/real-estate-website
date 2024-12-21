export const products = [
    {
        "id": "101",
        "category_id": 1,
        "is_highlighted": false,
        "title": "demo 01",
        "address": "adres bilgisi",
        "price": 799.99,
        "description": "demo 01 aciklama",
        "image_url": "images/foto-01.webp",
        "images_path": "images/listings/astoria",
        "tags": ["365m2", "5.kat"],
        "long_description": "demo 01 uzun aciklama",
        "images": [
            {
                "src" : "images/listings/demo1/foto1.webp",
                "alt" : "gayrimenkul fotografi",
                "class": "img-fluid d-block mx-auto rounded"
            },
            
        ]
    },
    {
        "id": "201",
        "category_id": 2,
        "is_highlighted": true,
        "title": "Astoria Full",
        "address": "adres bilgisi",
        "price": 99.99,
        "description": "demo 02 aciklama",
        "image_url": "images/foto-02.webp",
        "image_list": ["images/listings/astoria"],
        "images_path": "images/listings/astoria",
        "tags": ["350m2", "1.kat"],
        "long_description": "demo 02 uzun aciklama"
    },
    {
        "id": "301",
        "is_highlighted": false,
        "title": "demo 03",
        "category_id": 3,
        "price": 99.99,
        "stock": 25,
        "description": "demo 03 aciklama",
        "image_url": "images/foto-03.webp",
        "images_path": "images/listings/astoria",
        "tags": ["1000m2", "10.kat"],
        "long_description": "demo 03 uzun aciklama"
    },
    {
        "id": "401",
        "is_highlighted": false,
        "title": "demo 04",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "demo 04 aciklama",
        "image_url": "images/foto-04.webp",
        "images_path": "images/listings/astoria",
        "tags": ["123m2", "29.kat"],
        "long_description": "demo 04 uzun aciklama"
    }
]

export const types = [
    "Buy",
    "Rent"
]

export const rental_frequency = [
    "yearly",
    "monthly",
    "weekly"
]

export const categories = [
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