<script lang="ts">
	import type { PageData } from './$types';
	import { Cell, Row, h } from 'gridjs';
	import Grid from 'gridjs-svelte';
	import Empty from '../../../../components/Empty.svelte';

	export let data: PageData;
</script>

<section class="flex items-center justify-between my-4">
	<h3>Tags</h3>
	<form class="flex items-center space-x-2 mb-0">
		<input type="text" placeholder="create or edit tag" />
		<button>create</button>
	</form>
</section>

{#if data.categories.length > 0}
	<Grid
		data={data.categories}
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
{:else}
	<Empty description="No tags have been created" />
{/if}

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
