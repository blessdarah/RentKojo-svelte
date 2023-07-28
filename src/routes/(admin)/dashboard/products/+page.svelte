<script lang="ts">
	import { goto } from '$app/navigation';
	import Table from '../../../../components/Table.svelte';
	import { productTableColumns } from '../../../../components/products/product-table.columns';
	import type { Product } from '../../../../models/product';
	import { productStore } from '../../../../store';
	import type { PageData } from './$types';
	export let data: PageData;

	const handleClick = (product: Product) => {
		productStore.set(product);
		goto(`products/${product.id}`);
	};
</script>

<Table rowClick={handleClick} columns={productTableColumns} data={data.products} />
