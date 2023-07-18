<script lang="ts">
	import type { PageData } from './$types';
	import Grid from 'gridjs-svelte';
	import { h } from 'gridjs';
	import Empty from '../../../components/Empty.svelte';

	export let data: PageData;
	console.log(data.categories);
</script>

<h3 class="font-bold text-3xl my-3 border-b border-gray-200">Dashboard</h3>
{#if data.categories.data.length > 0}
	<div class="mx-4">
		<Grid
			data={data.categories.data}
			columns={[
				'name',
				'description',
				{
					name: 'Actions',
					formatter: (cell, row) => {
						return [
							h(
								'button',
								{
									className: 'py-1 px-2 border rounded-md text-white bg-blue-600',
									onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
								},
								'Edit'
							),
							h(
								'button',
								{
									className: 'py-1 px-2 border border-red-700 rounded-md text-white bg-red-600',
									onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
								},
								'Delete'
							)
						];
					}
				}
			]}
			on:rowClick={(row) => console.log('row: ', row)}
			search
			sort
			pagination
		/>
	</div>
{:else}
	<Empty description="No tags have been created" />
{/if}

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
