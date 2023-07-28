<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Product } from '../../../../../models/product';
	import { productStore } from '../../../../../store';
	import type { PageData } from './$types';
	export let data: PageData;
	let product: Product;

	productStore.subscribe((value) => {
		product = value;
	});

	const navigate = () => {
		goto(`${product.id}/edit`);
	};
</script>

<div class="lg:w-8/12 mx-auto mt-2 mb-8 flex items-center justify-between">
	<h3 class="font-bold text-gray-600 text-xl">Product detail</h3>
	<button on:click={navigate} class="bg-teal-400 rounded-lg text-white px-3 py-2 hover:opacity-95"
		>✍️ Edit</button
	>
</div>
<div class="lg:w-8/12 mx-auto rounded border border-gray-200">
	<table class="w-full">
		<tbody>
			<tr>
				<td>Name</td>
				<td>{product.name}</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>{product.description}</td>
			</tr>
			<tr>
				<td>Long description</td>
				<td>{product.longDescription}</td>
			</tr>
			<tr>
				<td>Amount</td>
				<td>{product.amount}</td>
			</tr>
			<tr>
				<td>Available from</td>
				<td>
					{new Date(product.availabilityStartDate).toDateString()} - {new Date(
						product.availabilityStartTime
					).toTimeString()}
				</td>
			</tr>
			<tr>
				<td>Available until</td>
				<td>
					{new Date(product.availabilityEndDate).toDateString()} - {new Date(
						product.availabilityEndTime
					).toTimeString()}
				</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	tr:not(:last-child) {
		border-bottom: 1px solid theme('colors.gray.200');
	}
	td {
		padding: 0.4rem;
	}
	td:first-child {
		color: theme('colors.gray.500');
		border-right: 1px solid #e3e3e3;
	}
	td:last-child {
		color: theme('colors.gray.700');
	}
</style>
