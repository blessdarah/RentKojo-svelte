<script sco>
	import '../../app.css';
</script>

<header class="py-4 px-10">
	<a href="/">
		<strong>Logo</strong>
	</a>
	<nav class="flex space-x-6 text-gray-600 items-center">
		<a class="hover:text-teal-400 hover:underline" href="/">Home</a>
		<a class="hover:text-teal-400 hover:underline" href="/about">About</a>
		<a class="hover:text-teal-400 hover:underline" href="/dashboard">Dashboard</a>
		<a href="/login" class="rounded-full bg-teal-400 px-6 py-3 text-white">Login</a>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	main {
		margin-top: 2rem;
		width: 90vw;
		max-width: 100%;
		margin: 0 auto;
	}
	a[role='button'] {
		padding: 0.8rem 2rem;
	}
</style>
