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