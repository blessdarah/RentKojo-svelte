<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Tag } from '../../../../../models/tag';
	import { tagStore } from '../../../../../store';
	let tag: Tag;

	tagStore.subscribe((value) => {
		tag = value;
	});

	const navigate = () => {
		tagStore.update((content) => (content = tag));
		goto(`${tag.id}/edit`);
	};
</script>

<div class="lg:w-8/12 mx-auto mt-2 mb-8 flex items-center justify-between">
	<h3 class="font-bold text-gray-600 text-xl">Tag detail</h3>
	<button on:click={navigate} class="bg-teal-400 rounded-lg text-white px-3 py-2 hover:opacity-95"
		>✍️ Edit</button
	>
</div>
<div class="lg:w-8/12 mx-auto rounded border border-gray-200">
	<table class="w-full">
		<tbody>
			<tr>
				<td>Name</td>
				<td>{tag.name}</td>
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
