<script>
	let name = '';
	const submit = () => {
		console.log('name: ', name);
	};
</script>

<form on:submit={submit}>
	<div class="flex flex-col space-y-2">
		<label for="name">Name</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="text"
			id="name"
			placeholder="Tag name"
			bind:value={name}
			required
		/>
	</div>
	<button type="submit" class="mt-3 px-3 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white"
		>Save</button
	>
</form>
