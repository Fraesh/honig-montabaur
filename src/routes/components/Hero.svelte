<script>
	import Honig from '$lib/assets/img/honig_hero_g2.webp';

	import Ast1 from '$lib/assets/img/ast1.svg';
	import Ast2 from '$lib/assets/img/ast2.svg';
	import Schloss from '$lib/components/ornaments/Schloss.svelte';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div class="hero min-h-screen max-w-full relative">
	<div class="hero-content flex-col md:flex-row-reverse">
		<!-- BG -->
		<Schloss />
		<Hex />
		<img src={Ast1} class="absolute top-1/4 left-10 w-20 -rotate-[110deg] -scale-y-100 -z-9" />
		<img
			src={Ast2}
			class="absolute top-2/3 left-5 w-28 -rotate-[110deg] -scale-y-100 -z-9 opacity-60"
		/>
		<img src={Ast1} class="absolute top-3/4 right-10 w-20 -rotate-[60deg] -z-9" />
		<img src={Ast2} class="absolute top-1/3 right-5 w-28 -rotate-[60deg] -z-9" />
		<!-- Illustration -->
		<img src={Honig} class="flex-1 w-[60rem] md:-mr-48 z-10" />
		<div class="z-10">
			<h1 class="text-4xl md:text-5xl font-bold miami whitespace-nowrap">Hugos Naturhonig</h1>
			<h2 class="text-3xl md:text-4xl ml-20 md:ml-28">aus Montabaur</h2>
			<p class="py-6">Leckerster Honig aus dem Westerwald.</p>
			<!-- <button class="btn btn-primary font-bold">Honig bestellen</button> -->
		</div>
	</div>
</div>
