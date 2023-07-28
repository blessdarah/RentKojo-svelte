<script>
	export let open = false;
	export let title = 'Modal title';
	export let footer = false;
	export let onClose = () => (open = false);
</script>

<div
	class={`${
		open ? 'block' : 'hidden'
	} fixed inset-0 grid place-items-center bg-black bg-opacity-50`}
>
	<div class="bg-white rounded-lg shadow-md w-[400px]">
		<div class="border-b border-gray-100 px-4 py-1 relative">
			<p>{title}</p>
			<span
				class="bg-gray-100 p-1 rounded absolute top-1 right-2 text-xs hover:bg-gray-200 cursor-pointer"
				role="button"
				aria-label="Close modal button"
				on:keypress={() => null}
				tabindex={1}
				on:click={onClose}>x close</span
			>
		</div>
		<section class="p-3">
			<slot />
		</section>

		{#if footer}
			<div class="border-t border-gray-100 px-4 p-2">
				<button
					class="ml-auto bg-blue-600 text-white text-sm rounded px-3 py-1 hover:opacity-90"
					on:click={onClose}>close</button
				>
			</div>
		{/if}
	</div>
</div>
