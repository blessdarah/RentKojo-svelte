<script>
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import Button from '../../../components/Button.svelte';

	let email = 'bayehniville@gmail.com',
		phoneNumber = '679988809',
		password = 'bayehniville@2023';
	$: formData = {
		email,
		phoneNumber,
		password
	};

	function login() {
		axios
			.post('https://rentkojo.com/auth/login', formData)
			.then((response) => response.data?.success)
			.then(() => goto('/dashboard'))
			.catch((err) => console.log(err));
	}
</script>

<form on:submit|preventDefault={login} class="space-y-4">
	<h3 class="font-black text-center mb-4 text-4xl">Login</h3>
	<div class="flex flex-col space-y-2">
		<label for="phoneNumber">Phone number</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="text"
			id="phoneNumber"
			bind:value={phoneNumber}
			name="phoneNumber"
			required
		/>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="email">Email</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="email"
			id="email"
			bind:value={email}
			required
		/>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="password">password</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="password"
			id="password"
			bind:value={password}
			required
		/>
	</div>
	<p class="text-sm mb-3 flex items-center justify-between">
		Don't have an account? <a
			href="/signup"
			class="text-teal-500 hover:text-teal-400 hover:underline">Sign up</a
		>
	</p>
	<Button>Login</Button>
	<a
		href="/forgot-password"
		class="text-sm mb-3 text-center mt-2 block w-full text-gray-500 hover:text-teal-500
        hover:underline">I've forgotten my password</a
	>
</form>

<style>
	form {
		max-width: 430px;
		margin: 5rem auto;
	}
</style>
