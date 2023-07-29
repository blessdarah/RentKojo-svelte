<script>
	import '../../app.css';
	import DashboardMenus from '../../components/common/DashboardMenus.svelte';
	let isOpen = false;
</script>

<div class="md:flex">
	<header
		class="flex justify-between items-center p-4 md:flex-col md:items-start md:min-h-screen min-w-[200px]
        md:justify-normal md:border-r"
	>
		<a href="/" class="md:text-center md:w-full md:font-black">RentKojo</a>
		<button
			on:click={() => (isOpen = !isOpen)}
			class="bg-gray-100 rounded-lg border border-gray-200 md:hidden p-2"
			>{isOpen ? 'Show menu' : 'Hide menu'}</button
		>
		<!-- svelte-ignore missing-declaration -->
		<div class="hidden md:block">
			<DashboardMenus />
		</div>
	</header>

	<!-- mobile menus -->
	<div
		on:blur={() => (isOpen = false)}
		class={`${
			isOpen ? '-translate-x-full' : ''
		} transition-all ease-in-out duration-300 md:hidden fixed inset-0 h-screen backdrop-blur-lg right-1/2 shadow-2xl`}
	>
		<div class="relative">
			<button
				on:click={() => (isOpen = !isOpen)}
				aria-label="close navigation"
				class="h-6 w-6 absolute flex items-center justify-center hover:scale-105 hover:rotate-45 transition-all ease-in duration-200 right-4 top-4 bg-gray-100 border border-gray-200 rounded-lg text-gray-400"
				>&times;</button
			>
		</div>
		<a href="/" class="md:text-center md:w-full md:font-black block mt-12 pl-8">RentKojo</a>
		<nav class="flex flex-col space-y-7 mt-4 pl-8">
			<a
				href="/dashboard"
				class="md:w-full md:px-6 md:py-2 rounded-xl md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
				>🗃️ Dashboard</a
			>
			<a
				href="/dashboard/tags"
				class="md:w-full md:px-6 md:py-2 rounded-xl md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
				>🏷️ Tags</a
			>
			<a
				href="/dashboard/categories"
				class="md:w-full md:px-6 md:py-2 rounded-xl md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
				>🎖️ Categories</a
			>
			<a
				href="/dashboard/products"
				class="md:w-full md:px-6 md:py-2 rounded-xl md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
				>📦 Products</a
			>
			<a
				href="/dashboard/profile"
				class="md:w-full md:px-6 md:py-2 rounded-xl md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
				>🤠 Profile</a
			>
		</nav>
	</div>
	<main class="flex-grow">
		<slot />
	</main>
</div>
