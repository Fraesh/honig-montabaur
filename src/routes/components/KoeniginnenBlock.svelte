<script>
	import bgImage from '$lib/assets/img/bienenwabe.webp';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div class="relative w-full p-24 overflow-hidden">
	<!-- Background image -->
	<div class="absolute inset-0 w-full h-full z-0">
		<img src={bgImage} alt="Bienenwabe" class="w-full h-full object-cover" />
		<!-- Dark overlay for readability -->
		<div class="absolute inset-0 bg-black/60" />
	</div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto px-4 flex flex-col items-start">
		<h1 class="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight miami">
			Wie wir gesunde Bienenvölker heranziehen
		</h1>

		<a href="/königinnen" class="btn btn-primary font-bold border-none">
			Mehr zur Königinnenzucht
		</a>
	</div>

	<Hex />
</div>
