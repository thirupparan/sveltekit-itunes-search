<script>
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<div class="flex items-center justify-between mb-12">
	<button on:click={goBack} class="flex items-center justify-center text-white">
		<img src="backIcon.svg" alt="back" class="h-4" />
		<div class="ml-2">Back</div>
	</button>
	<button
		on:click={() => {
			goto('/');
		}}
		class="flex items-center justify-center text-white"
	>
		<img src="homeIcon.svg" alt="back" class="h-5" />
	</button>
</div>
<slot />
