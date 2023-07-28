<script lang="ts">
	import type { Category } from '../../../../../../models/category';
	import { categoryStore } from '../../../../../../store';
	let category: Category;
	categoryStore.subscribe((value) => (category = value));

	const submit = async (event: Event) => {
		console.log('values: ', category);
	};
</script>

<div class="mx-4 lg:w-8/12 lg:mx-auto my-8">
	<div class="flex items-center justify-between mb-6">
		<h3 class="font-semibold text-xl">Edit {category.name}</h3>
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
				bind:value={category.name}
				name="name"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="description">Description</label>
			<input
				id="description"
				class="rounded-lg border border-gray-200 p-2"
				type="text"
				bind:value={category.description}
				name="description"
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
