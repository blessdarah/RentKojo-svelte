<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { product } = data;
	console.log('product: ', product);
</script>

<h3 class="font-bold ml-2 mb-4 text-gray-600 text-xl">Product detail</h3>
<div class="lg:w-8/12 mx-auto rounded border border-gray-200">
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="w-2/5">Product name</p>
		<p>{product.name}</p>
	</div>
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="w-2/5">Description</p>
		<p>{product.description}</p>
	</div>
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="max-w-[300px]">Amount</p>
		<p>{product.amount}</p>
	</div>
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="w-2/5">Condition</p>
		<p>{product.condition}</p>
	</div>
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="w-2/5">Available from</p>
		<p>
			{new Date(product.availabilityStartDate).toDateString()} - {new Date(
				product.availabilityStartTime
			).toTimeString()}
		</p>
	</div>
	<div class="border-b border-inherit p-2 md:flex gap-4">
		<p class="w-2/5">Available to</p>
		<p>
			{new Date(product.availabilityEndDate).toDateString()} - {new Date(
				product.availabilityEndTime
			).toTimeString()}
		</p>
	</div>
</div>
