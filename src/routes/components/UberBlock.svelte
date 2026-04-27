<script>
	import Img from '$lib/assets/img/honig portrait.webp';
	import Line from '$lib/assets/img/line1.svg';
</script>

<div
	class="bg-base-200 w-full max-w-full relative overflow-hidden flex gap-10 flex-col-reverse md:flex-row items-stretch"
	id="uberuns"
>
	<div class="relative flex-1 min-h-[24rem]">
		<img src={Img} class="object-cover w-full h-full absolute" />
	</div>

	<div class="flex-1">
		<div
			class="flex flex-col gap-5 flex-1 pt-24 md:pb-36 px-8 md:max-w-[40rem] relative shrink-0 w-full"
		>
			<h2 class="text-primary font-bold uppercase tracking-widest text-sm mb-2">
				Genuss mit Verantwortung
			</h2>
			<h1 class="text-4xl md:text-5xl font-bold miami mb-6">Ein Herz für Bienen</h1>
			<p class="text-lg leading-relaxed mb-8">
				<b>Dr. Hugo und Susanne Schneider</b>, Agraringenieure aus dem Westerwald, widmen sich mit
				Leidenschaft der Bienenhaltung und Erzeugung von hochwertigem Honig. Als passionierte Imker
				legen wir großen Wert auf eine naturschonende Betriebsweise.
			</p>

			<h3 class="text-primary font-bold uppercase tracking-widest text-sm mb-5">
				Unser Engagement:
			</h3>
			<ul class="flex flex-col gap-5">
				<li
					class="flex gap-4 items-start bg-white/40 p-5 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm"
				>
					<div class="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0 shadow-sm" />
					<div>
						<b class="block text-lg mb-1">Kampf gegen das Bienensterben</b>
						<p class="leading-relaxed">
							Wir setzen auf tierschonende Züchtung ohne Gentechnologie. Durch gezielte Auslese
							stärken wir die Resistenz unserer Bienen.
						</p>
					</div>
				</li>
				<li
					class="flex gap-4 items-start bg-white/40 p-5 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm"
				>
					<div class="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0 shadow-sm" />
					<div>
						<b class="block text-lg mb-1">Lokale Erzeugung</b>
						<p class="leading-relaxed">
							Unser Honig ist ein echtes Geschenk der Natur und spiegelt die Vielfalt des
							Westerwaldes wider. So entsteht Honig von unvergleichlicher Fülle mit einem
							einzigartigen Geschmacksprofil.
						</p>
					</div>
				</li>
				<li
					class="flex gap-4 items-start bg-white/40 p-5 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm"
				>
					<div class="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0 shadow-sm" />
					<div>
						<b class="block text-lg mb-1">Unterstützung der Biodiversität</b>
						<p class="leading-relaxed">
							Durch Bestäuben tragen unsere Bienen zum Erhalt der Artenvielfalt und lokalen
							Pflanzenwelt bei.
						</p>
					</div>
				</li>
			</ul>
			<img
				src={Line}
				class="object-cover md:hidden -mx-8 h-16 min-w-[100vw] mt-10 object-center"
				style="width:100vw"
			/>
		</div>
	</div>
	<img src={Line} class="absolute left-1/2 bottom-4 min-w-full -translate-x-1/2 hidden md:block" />
</div>
