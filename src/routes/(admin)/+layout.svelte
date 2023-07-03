<div class="lg:flex">
    <header class="flex justify-between items-center p-4 md:flex-col md:items-start md:max-w-[400px] md:h-screen
        md:justify-normal md:border-r dark:md:border-gray-800">
        <a href="/" class="md:text-center md:w-full md:font-black">RentKojo</a>
        <nav class="space-x-3 md:flex-col md:space-x-0 md:items-start md:p-0 md:m-0 md:space-y-2 md:mt-4 text-sm">
            <a href="/dashboard" class="md:w-full md:px-6 md:py-2 md:hover:bg-gray-200 dark:md:hover:bg-gray-700">🗃️ Dashboard</a>
            <a href="/dashboard/tags" class="md:w-full md:px-6 md:py-2 md:hover:bg-gray-200 dark:md:hover:bg-gray-700">🏷️ Tags</a>
            <a href="/dashboard" class="md:w-full md:px-6 md:py-2 md:hover:bg-gray-200 dark:md:hover:bg-gray-700">🎖️ Categories</a>
            <a href="/dashboard" class="md:w-full md:px-6 md:py-2 md:hover:bg-gray-200 dark:md:hover:bg-gray-700">📦 Products</a>
            <a href="/dashboard/profile" class="md:w-full md:px-6 md:py-2 md:hover:bg-gray-200 dark:md:hover:bg-gray-700">🤠 Profile</a>
        </nav>
    </header>
    <main class="container">
        <slot />
    </main>
</div>

