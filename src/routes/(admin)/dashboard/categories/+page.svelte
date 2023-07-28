<script lang="ts">
	import type { PageData } from './$types';
	import Table from '../../../../components/Table.svelte';
	import { goto } from '$app/navigation';
	let data: PageData;
</script>

<Table
	data={data.categories}
	columns={[
		{ title: 'Id', dataIndex: 'id' },
		{ title: 'Name', dataIndex: 'name' }
	]}
	rowClick={(row) => goto(`categories/${row.id}`)}
/>
