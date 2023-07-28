import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const getData = async () => {
		const response = await axios.get(`https://rentkojo.com/api/products/${params.productId}`);
		const product = await response.data;
		return product.data;
	};
	return {
		product: getData()
	};
}) satisfies PageLoad;
