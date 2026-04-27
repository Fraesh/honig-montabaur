<script>
	import Fruh from '$lib/assets/img/fruhtracht.webp';
	import Sommer from '$lib/assets/img/sommertracht.png';
	import IconFruh from '$lib/assets/img/icons/cloudy-day.svg';
	import IconSommer from '$lib/assets/img/icons/sunny.svg';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div
	class="bg-base-100 w-full max-w-full relative py-24 px-8 overflow-hidden"
	style="background: linear-gradient(115deg, rgba(255,229,0,.2) 0%, rgba(255,229,0,0) 20%, rgba(255,151,0,0) 80%, rgba(255,151,0,.2) 100%);"
>
	<div class="max-w-7xl w-full m-auto flex gap-10 md:gap-32 relative z-10 flex-col md:flex-row">
		<div class="flex flex-col items-center flex-1">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconFruh} class="h-12 mb-7" />
				<h1 class="text-4xl md:text-5xl font-bold miami" style="line-height:1rem">Frühtracht</h1>
			</div>
			<img src={Fruh} class="mb-10 w-96 max-w-full" />
			<div class="mb-6 w-full flex flex-col gap-6 text-left">
				<div
					class="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/70 flex flex-col gap-5"
				>
					<div>
						<h3 class="text-primary font-bold uppercase tracking-widest text-xs mb-1 opacity-80">
							Aussehen
						</h3>
						<p class="font-medium text-lg leading-snug">
							Hellere Farbe, cremige bis feinkörnige Konsistenz
						</p>
					</div>
					<div>
						<h3 class="text-primary font-bold uppercase tracking-widest text-xs mb-1 opacity-80">
							Geschmack
						</h3>
						<p class="font-medium text-lg leading-snug">
							Mild und weniger süß, mit leichter Frische
						</p>
					</div>
				</div>

				<div class="px-2 md:px-4 mt-2">
					<h3 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">
						Hauptnektarquellen
					</h3>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Obstbäume (Äpfel, Birnen, Kirschen, Pflaumen):</b> Verleihen dem Honig eine fruchtige
								Note.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed"><b>Löwenzahn:</b> Sorgt für ein feines, blumiges Aroma.</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed"><b>Ahorn:</b> Fügt eine subtile Karamellnote hinzu.</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Raps:</b> Hauptlieferant, sorgt für eine cremige Textur.
							</p>
						</li>
					</ul>
				</div>

				<div class="px-2 md:px-4 mt-2">
					<h3 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">
						Besonderheiten
					</h3>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								Kristallisiert relativ schnell aufgrund des hohen Glucosegehaltes. Durch Rühren bei
								der Kristallisation bleibt der Honig stets feincremig.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">Ideal für Menschen, die es weniger süß mögen.</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">Perfekt als Brotaufstrich.</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center flex-1">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconSommer} class="h-12 mb-6" />
				<h1 class="text-4xl md:text-5xl font-bold miami" style="line-height:1rem">Sommertracht</h1>
			</div>
			<img src={Sommer} class="mb-10 w-96 max-w-full" />
			<div class="mb-6 w-full flex flex-col gap-6 text-left">
				<div
					class="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/70 flex flex-col gap-5"
				>
					<div>
						<h3 class="text-primary font-bold uppercase tracking-widest text-xs mb-1 opacity-80">
							Aussehen
						</h3>
						<p class="font-medium text-lg leading-snug">Dunklere Farbe, flüssigere Konsistenz</p>
					</div>
					<div>
						<h3 class="text-primary font-bold uppercase tracking-widest text-xs mb-1 opacity-80">
							Geschmack
						</h3>
						<p class="font-medium text-lg leading-snug">
							Intensiver, süßer und komplexer im Geschmacksprofil
						</p>
					</div>
				</div>

				<div class="px-2 md:px-4 mt-2">
					<h3 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">
						Hauptnektarquellen
					</h3>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Linde:</b> Verleiht dem Honig eine charakteristische, leicht minzige Note.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Edelkastanie:</b> Sorgt für eine angenehme Bitternote mit leicht herbem Geschmack.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Klee-Arten:</b> Ergeben eine Balance zwischen Süße und einem zarten, nicht aufdringlichen
								Aroma.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								<b>Himbeere und Brombeere:</b> Fügen fruchtige, beerige Noten hinzu.
							</p>
						</li>
					</ul>
				</div>

				<div class="px-2 md:px-4 mt-2">
					<h3 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">
						Besonderheiten
					</h3>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								Kann Anteile von Waldhonig enthalten, was zu einem kräftigeren Geschmack führt.
							</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">Kristallisiert langsamer als Frühtracht-Honig.</p>
						</li>
						<li class="flex gap-4 items-start">
							<div class="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 shadow-sm" />
							<p class="leading-relaxed">
								Zum Süßen von Tee und Joghurt, vielseitig einsetzbar in der Küche, ideal zum Backen
								und für Marinaden.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<Hex />
</div>
