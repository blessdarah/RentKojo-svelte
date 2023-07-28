<script lang="ts">
	export let htmlType: 'reset' | 'submit' | 'button' | null = null;
	export let type: 'primary' | 'secondary' = 'primary';
	export let label = 'click';
</script>

{#if type === 'primary'}
	<button
		type={htmlType}
		class="block w-full py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-400"
	>
		<slot>
			{label}
		</slot>
	</button>
{:else}
	<button
		type={htmlType}
		class="block w-full py-3 rounded-lg bg-white-500 border border:teal-500 text-gray-600 hover:text-white hover:bg-teal-400"
	>
		<slot>
			{label}
		</slot>
	</button>
{/if}
