<script>
	export let data;
</script>

<section>
	<div class="mt-12 flex flex-col items-center justify-center">
		<h1 class="text-3xl font-bold text-center mb-12">{data.songResults.trackName}</h1>
		<img src={data.songResults.artworkUrl100} alt="img" class="w-1/4 rounded-md mb-12" />
		<audio controls>
			<source src={data.songResults.previewUrl} type="audio/mpeg" />
		</audio>
	</div>
</section>
