<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import Button from '../../../components/Button.svelte';

	let firstname: string,
		lastname: string,
		username: string,
		email: string,
		phoneNumber: string,
		password = '';
	$: formData = {
		firstname,
		lastname,
		username,
		email,
		phoneNumber,
		password
	};
	function signup() {
		axios
			.post('https://rentkojo.com/api/users', formData)
			.then((response) => response.data?.success)
			.then(() => goto('/login'))
			.catch((err) => console.log(err));
	}
</script>

<form on:submit|preventDefault={signup} class="space-y-4">
	<h3 class="font-black text-center mb-4 text-4xl">Sign Up</h3>
	<div class="flex flex-col md:flex-row gap-3">
		<div class="flex flex-col space-y-2 flex-grow">
			<label for="firstname">First name</label>
			<input
				class="border border-gray-200 p-2 rounded-lg text-gray-500"
				type="text"
				id="firstname"
				name="firtname"
				bind:value={firstname}
				placeholder="Enter your firstname"
				required
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="lastname">Last name</label>
			<input
				class="border border-gray-200 p-2 rounded-lg text-gray-500"
				type="text"
				id="lastname"
				name="firtname"
				bind:value={lastname}
				placeholder="Enter your lastname"
				required
			/>
		</div>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="username">😎 Username</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="text"
			id="username"
			name="username"
			bind:value={username}
			placeholder="Enter your username"
			required
		/>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="email">📧 Email</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="email"
			id="email"
			name="email"
			bind:value={email}
			placeholder="Enter your email"
			required
		/>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="phoneNumber">📱 Phone number</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="tel"
			id="phoneNumber"
			name="phoneNumber"
			bind:value={phoneNumber}
			placeholder="Provide a WhatsApp number"
			required
		/>
	</div>
	<div class="flex flex-col space-y-2">
		<label for="password">🔐 Password</label>
		<input
			class="border border-gray-200 p-2 rounded-lg text-gray-500"
			type="password"
			id="password"
			name="password"
			bind:value={password}
			placeholder="*************"
			required
		/>
	</div>
	<p class="text-sm text-gray-500 flex align-center justify-between mb-3">
		Already have an account? <a href="/login" class="text-teal-400">Login</a>
	</p>
	<Button>Sign Up</Button>
</form>

<style>
	form {
		max-width: 500px;
		margin: 5rem auto;
	}
</style>
