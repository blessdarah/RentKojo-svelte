<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import type { Category } from '../../../../models/category';
	import { categoryStore } from '../../../../store';
	import Table from '../../../../components/Table.svelte';
	export let data: PageData;

	// const { data } = response.categories;

	const handleRowClick = (category: Category) => {
		categoryStore.set(category);
		goto(`categories/${category.id}`);
	};
</script>

<Table
	data={data.categories}
	columns={[
		{ title: 'Id', dataIndex: 'id' },
		{ title: 'Name', dataIndex: 'name' }
	]}
	rowClick={handleRowClick}
/>
