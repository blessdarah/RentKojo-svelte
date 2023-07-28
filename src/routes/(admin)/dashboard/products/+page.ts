import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (() => {
	const getData = async () => {
		const response = await axios.get('https://rentkojo.com/api/products');
		const products = await response.data;
		return products.data;
	};
	return {
		products: getData()
	};
}) satisfies PageLoad;
