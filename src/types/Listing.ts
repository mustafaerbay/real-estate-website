export interface Listing {
    id: string;
    category_id: string;
    is_highlighted: boolean;
    title: string;
    price: number;

}

export interface ListingCommons {
    address: string;
    images: Image[];
    mainImage: Image;
    size: string;
    description: string;
    isForSale: boolean;
}
export interface Image {
    alt: string;
    title: string;
    src: string;
}

export interface Category {
    id: string;
    title: string;
    name: string;
    description: string;
    image: Image;
}

export interface Office {
    floor: string;

}
export interface House {
    bedroom: string;
    bathroom: string;
    floor: string;
}

