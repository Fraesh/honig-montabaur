<script>
	// Platzhalter-Bild – bitte später durch das richtige ersetzen!
	import Img from '$lib/assets/img/P5292397.jpg';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div
	class="bg-base-200 w-full max-w-full relative overflow-hidden flex gap-10 flex-col md:flex-row items-stretch"
>
	<div class="flex-1 flex justify-end">
		<div
			class="flex flex-col gap-6 flex-1 pt-24 pb-24 md:pb-36 px-8 md:max-w-[40rem] relative shrink-0 w-full"
		>
			<div>
				<h2 class="text-primary font-bold uppercase tracking-widest text-sm mb-2">
					Qualität & Herkunft
				</h2>
				<h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
					Was macht unseren Honig so hochwertig und einzigartig?
				</h1>
			</div>

			<ul class="flex flex-col gap-6 mt-4">
				<li class="flex gap-5 items-start">
					<div
						class="text-primary font-black text-4xl opacity-60
 miami mt-1"
					>
						1
					</div>
					<div>
						<h3 class="font-bold text-xl mb-1 text-base-content">100 % regional</h3>
						<p class="leading-relaxed text-base-content/80">
							Alle unsere Bienenvölker stehen in der Umgebung von Montabaur.
						</p>
					</div>
				</li>
				<li class="flex gap-5 items-start">
					<div
						class="text-primary font-black text-4xl opacity-60
 miami mt-1"
					>
						2
					</div>
					<div>
						<h3 class="font-bold text-xl mb-1 text-base-content">Höchste Qualitätssicherung</h3>
						<p class="leading-relaxed text-base-content/80">
							Von der Wabe bis zum Glas alles in einer Hand.
						</p>
					</div>
				</li>
				<li class="flex gap-5 items-start">
					<div
						class="text-primary font-black text-4xl opacity-60
 miami mt-1"
					>
						3
					</div>
					<div>
						<h3 class="font-bold text-xl mb-1 text-base-content">Nachhaltigkeit</h3>
						<p class="leading-relaxed text-base-content/80">
							Mit jedem Glas unterstützen Sie aktiv den Schutz der Bienen.
						</p>
					</div>
				</li>
				<li class="flex gap-5 items-start">
					<div
						class="text-primary font-black text-4xl opacity-60
 miami mt-1"
					>
						4
					</div>
					<div>
						<h3 class="font-bold text-xl mb-1 text-base-content">Sortenvielfalt</h3>
						<p class="leading-relaxed text-base-content/80">
							Jeder unserer Honige erzählt eine eigene Geschichte.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="relative flex-1 min-h-[24rem] z-10">
		<img src={Img} class="object-cover w-full h-full absolute" alt="Hochwertiger Honig" />
	</div>
	<Hex />
</div>
