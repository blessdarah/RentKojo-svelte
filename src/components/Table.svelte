<script lang="ts">
	import Empty from './Empty.svelte';
	import { fly } from 'svelte/transition';

	export let title = '';
	export let columns: App.TableColumn[] = [];
	export let searchAttribute = 'name';
	export let data: any[] = [];

	export let rowClick = undefined;
	let tableData = data;
	let search = '';

	$: {
		search === ''
			? (tableData = data)
			: (tableData = data.filter((item: any) =>
					item[searchAttribute].toLowerCase().includes(search)
			  ));
	}
</script>

{#if data.length > 0}
	<div class="p-4" transition:fly={{ y: 100, duration: 300 }}>
		<header class="flex align-center justify-between mb-4">
			{#if title}
				<h4 class="font-semibold text-lg text-gray-800">{title}</h4>
			{/if}
			<input
				class="border rounded-full px-4 py-2 ml-auto"
				placeholder="Filter..."
				id="search"
				type="search"
				bind:value={search}
			/>
		</header>
		<div class="border border-gray-200 rounded-lg overflow-y-hidden overflow-x-auto">
			<table class="w-full table-auto overflow-x-scroll">
				<thead>
					<tr align="left">
						{#each columns as column}
							<th class="p-2 font-semibold text-gray-700">{column.title ?? column.dataIndex}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each tableData as row}
						<tr
							on:click={() => (rowClick ? rowClick(row) : null)}
							class="border-t border-inherit odd:bg-gray-50 hover:bg-gray-100"
						>
							{#each columns as column}
								{#if column.formatWith}
									<td
										class="text-gray-500 border-r border-inherit p-2"
										align={column.align ?? 'left'}>{column.formatWith(row[column.dataIndex])}</td
									>
								{:else}
									<td
										class="text-gray-500 border-r border-inherit p-2"
										align={column.align ?? 'left'}>{row[column.dataIndex]}</td
									>
								{/if}
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{:else}
	<Empty description="no data found" />
{/if}
