<script lang="ts">
	import type { PageData } from './$types';
	import Table from '../../../../components/Table.svelte';
	import Modal from '../../../../components/Modal.svelte';
	import TagForm from '../../../../components/tags/TagForm.svelte';
	export let data: PageData;

	let isOpen = false;
</script>

<Modal open={isOpen} onClose={() => (isOpen = false)}>
	<TagForm />
</Modal>
<button on:click={() => (isOpen = true)}>Toggle modal</button>

<Table
	rowClick={() => (isOpen = true)}
	columns={[{ title: 'Name', dataIndex: 'name' }]}
	data={data.tags}
/>
