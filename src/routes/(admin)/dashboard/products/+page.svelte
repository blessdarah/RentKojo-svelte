<script lang="ts">
	import { goto } from '$app/navigation';
	import Table from '../../../../components/Table.svelte';
	import { productTableColumns } from '../../../../components/products/product-table.columns';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Table
	rowClick={(row) => goto(`products/${row.id}`)}
	columns={productTableColumns}
	data={data.products}
/>
