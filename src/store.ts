import { writable } from 'svelte/store';
import { emptyProduct, type Product } from './models/product';
import { emptyCategory, type Category } from './models/category';
import { emptyTag, type Tag } from './models/tag';

export const productStore = writable<Product>(emptyProduct);
export const categoryStore = writable<Category>(emptyCategory);
export const tagStore = writable<Tag>(emptyTag);
