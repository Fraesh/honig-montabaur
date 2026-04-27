<script>
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div
	class="bg-primary text-primary-content p-8 relative overflow-hidden flex justify-center items-center"
>
	<div class="absolute inset-0 opacity-20">
		<!-- Add some background visual interest -->
		<div
			class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"
		/>
	</div>

	<div class="max-w-4xl text-center relative z-10 bg-primary/40 p-8 md:p-12">
		<p
			class="text-2xl md:text-3xl lg:text-4xl font-serif italic font-medium leading-relaxed md:leading-relaxed"
		>
			&bdquo;Genießen Sie die vielfältige Süße der Natur und helfen Sie gleichzeitig, unsere Bienen
			zu schützen!&ldquo;
		</p>
	</div>

	<Hex />
</div>
