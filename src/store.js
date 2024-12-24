import { writable } from 'svelte/store';

export const contact_info = writable({
    name: '',
    surname: '',
    email: '',
    no: '',
    detail: '',
    products: [],
    categories: []
});

export const Search = writable({
    location: "",
    type: "",
    maxPrice: "",
    minPrice: "",
    minArea: "",
    maxArea: "",
    status: "",
});