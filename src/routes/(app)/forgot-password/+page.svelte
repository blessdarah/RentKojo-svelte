<script>
	import Button from '../../../components/Button.svelte';

	let email = '';
	function resetPassword() {
		console.log('email: ', email);
	}
</script>

<section class="mt-8 lg:mt-16">
	<h3 class="font-black text-center mb-4 text-4xl">Forgot password 😢</h3>
	<p class="text-center text-gray-500">
		Enter a valid email and we will send you a password reset link
	</p>
	<form
		on:submit|preventDefault={resetPassword}
		class="space-y-4 mt-6 max-w-full px-4 md:w-1/3 mx-auto"
	>
		<div class="flex flex-col space-y-2">
			<label for="email">Enter valid email</label>
			<input
				class="border border-gray-200 p-2 rounded-lg text-gray-500"
				type="email"
				id="email"
				bind:value={email}
				placeholder="Provide a valid email"
				required
			/>
		</div>
		<Button>🙏 Send reset link</Button>
		<a class="text-center block text-sm mt-4 hover:underline" href="/login">🙈 Cancel</a>
	</form>
</section>
