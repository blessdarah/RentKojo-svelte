<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Product } from '../../../../../../models/product';
	import { productStore } from '../../../../../../store';
	let product: Product;
	productStore.subscribe(
		(value) =>
			(product = {
				...value,
				availabilityStartDate: new Date(value.availabilityStartDate),
				availabilityEndDate: new Date(value.availabilityEndDate)
			})
	);

	const submit = async (event: Event) => {
		console.log('values: ', product);
	};
</script>

<div class="mx-4 lg:w-8/12 lg:mx-auto my-8">
	<div class="flex items-center justify-between mb-6">
		<h3 class="font-semibold text-xl">Edit {product.name}</h3>
		<button
			on:click={() => window.history.back()}
			class="rounded-lg px-3 py-2 text-gray-500 bg-gray-100 border border-gray-300 hover:opacity-80"
			>cancel</button
		>
	</div>

	<form on:submit|preventDefault={submit} class="space-y-6">
		<div class="flex flex-col space-y-2">
			<label for="name">Name</label>
			<input
				id="name"
				class="rounded-lg border border-gray-200 p-2"
				type="text"
				bind:value={product.name}
				name="name"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="description">Description</label>
			<input
				id="description"
				class="rounded-lg border border-gray-200 p-2"
				type="text"
				bind:value={product.description}
				name="description"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="description">Long description</label>
			<textarea
				id="longDescription"
				class="rounded-lg border border-gray-200 p-2"
				name="longDescription"
				rows="4">{product.longDescription}</textarea
			>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="amount">Amount</label>
			<input
				id="amount"
				class="rounded-lg border border-gray-200 p-2"
				type="number"
				bind:value={product.amount}
				name="amount"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="condition">Condition</label>
			<input
				id="condition"
				class="rounded-lg border border-gray-200 p-2"
				type="text"
				bind:value={product.condition}
				name="condition"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="startDate">Available date</label>
			<input
				id="startDate"
				class="rounded-lg border border-gray-200 p-2"
				type="date"
				bind:value={product.availabilityStartDate}
				name="availabilityStartDate"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="endDate">Availability end date</label>
			<input
				id="endDate"
				class="rounded-lg border border-gray-200 p-2"
				type="date"
				bind:value={product.availabilityEndDate}
				name="availabilityEndDate"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="startTime">Availability start time</label>
			<input
				id="startTime"
				class="rounded-lg border border-gray-200 p-2"
				type="time"
				bind:value={product.availabilityStartTime}
				name="availabilityStartTime"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="endTime">Availbility end time</label>
			<input
				id="endTime"
				class="rounded-lg border border-gray-200 p-2"
				type="time"
				bind:value={product.availabilityEndTime}
				name="availabilityEndTime"
			/>
		</div>

		<button type="submit" class="rounded-lg px-3 py-2 text-white bg-teal-400 hover:opacity-90"
			>Save changes</button
		>
	</form>
</div>

<style>
	input {
		color: theme('colors.gray.500');
	}
</style>
