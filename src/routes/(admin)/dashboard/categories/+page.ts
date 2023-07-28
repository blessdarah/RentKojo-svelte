import axios from 'axios';
import type { PageLoad } from './$types';
import type { Category } from '../../../../models/category';

export const load = (() => {
	const getData = async () => {
		const response = await axios.get('https://rentkojo.com/api/categories');
		const categories = await response.data;
		return categories.data as Category[];
	};
	return {
		categories: getData()
	};
}) satisfies PageLoad;
