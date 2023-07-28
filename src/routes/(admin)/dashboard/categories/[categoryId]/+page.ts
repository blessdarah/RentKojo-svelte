import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const getData = async () => {
		const response = await axios.get(`https://rentkojo.com/api/categories/${params.categoryId}`);
		const category = await response.data;
		return category.data;
	};
	return {
		category: getData()
	};
}) satisfies PageLoad;
