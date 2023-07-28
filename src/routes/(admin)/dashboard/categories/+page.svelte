<script lang="ts">
	import type { PageData } from './$types';
	import Table from '../../../../components/Table.svelte';
	export let data: PageData;

	const formData = { name: '' };

	const handleRowClick = (row) => {
		formData.name = row.name;
	};
</script>

<section class="flex items-center justify-between my-4">
	<h3>Tags</h3>
	<form class="flex items-center space-x-2 mb-0">
		<input type="text" bind:value={formData.name} placeholder="create or edit tag" />
		<button>create</button>
	</form>
</section>

<Table
	data={data.categories}
	columns={[
		{ title: 'Id', dataIndex: 'id' },
		{ title: 'Name', dataIndex: 'name' }
	]}
	rowClick={handleRowClick}
/>
