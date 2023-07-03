import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (() => {
	const getData = async () => {
		const response = await axios.get('https://rentkojo.com/api/categories');
		const categories = await response.data;
		return categories;
	};
	return {
		categories: getData()
	};
}) satisfies PageLoad;
