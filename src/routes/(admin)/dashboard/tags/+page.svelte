<script lang="ts">
	import type { PageData } from './$types';
	import Table from '../../../../components/Table.svelte';
	import { tagStore } from '../../../../store';
	import { goto } from '$app/navigation';
	import type { Tag } from '../../../../models/tag';
	export let data: PageData;

	const handleClick = (tag: Tag) => {
		tagStore.set(tag);
		goto(`tags/${tag.id}`);
	};
</script>

<Table rowClick={handleClick} columns={[{ title: 'Name', dataIndex: 'name' }]} data={data.tags} />
