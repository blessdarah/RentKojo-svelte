<section id="header">
	<h1 class="font-black text-3xl text-zinc-700 mb-3 md:text-5xl lg:text-8xl lg:px-16 lg:mb-10">
		Rent anything from your fellow <span class="text-teal-700">Kojo</span> 😉
	</h1>
	<p class="mb-4 opacity-90 lg:text-xl lg:mb-10">Works anywhere in Cameroon 🇨🇲</p>
	<form action="#" class="md:w-1/2 mx-auto flex flex-col md:flex-row gap-4 justify-center">
		<input
			class="py-2 px-4 focus-visible:outline-teal-500 rounded-full border border-gray-200"
			type="search"
			placeholder="Browse items"
		/>
		<button class="text-white bg-teal-400 rounded-full px-8 hover:bg-teal-300 active:bg-teal-200"
			>🔎 search</button
		>
	</form>
</section>

<!-- product -->
<section class="products">
	<div
		class="rounded-xl p-3 w-48 mb-8 h-48 flex border border-teal-400 bg-gradient-to-br from-orange-200 to-teal-300"
	>
		<div class="content self-end">
			<p class="text-sm lg:text-xs text-gray-600">
				Sit distinctio dolor incidunt cumque alias. Animi delectus iusto doloribus?
			</p>
		</div>
	</div>

	<div class="grid grid-cols-4 lg:grid-cols-6 gap-6">
		{#each Array(10) as _, index (index)}
			<div>
				<img src="https://picsum.photos/500/200" alt="product image" class="rounded-lg mb-4" />
				<h3 class="font-semibold text-lg mb-1">Product name</h3>
				<p class="text-sm text-gray-400 lg:text-xs">
					Lorem amet modi nostrum nam sapiente! Vel et expedita explicabo quos soluta Omnis nemo
					quis.
				</p>

				<div class="flex space-x-2 items-center mt-3 mb-2">
					<img
						src="https://picsum.photos/30/30"
						alt="avatar"
						class="rounded-full border-2 border-white shadow"
					/>
					<div>
						<a href="#" class="text-teal-500 text-xs"
							>Bless Darah<a>
								<p class="text-xs">Mile 2, Bamenda</p>
							</a></a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#header {
		text-align: center;
		margin: 5rem 0;
	}
	input[type='search'] {
		margin-bottom: 0;
		flex: 3;
	}
	button[type='submit'] {
		flex: 1;
	}
</style>
