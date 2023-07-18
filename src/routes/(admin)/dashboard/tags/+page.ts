import axios from 'axios';
import type { PageLoad } from './$types';

export const load = (() => {
	const getData = async () => {
		const response = await axios.get('https://rentkojo.com/api/tags');
		const tags = await response.data;
		return tags.data;
	};
	return {
		tags: getData()
	};
}) satisfies PageLoad;
