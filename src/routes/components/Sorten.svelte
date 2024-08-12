<script>
	import Fruh from '$lib/assets/img/fruhtracht.webp';
	import Sommer from '$lib/assets/img/sommertracht.png';
	import IconFruh from '$lib/assets/img/icons/cloudy-day.svg';
	import IconSommer from '$lib/assets/img/icons/sunny.svg';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div class="bg-base-100 w-full max-w-full relative py-24 px-8 overflow-hidden">
	<div class="max-w-7xl w-full m-auto flex gap-32 relative z-10 flex-col md:flex-row">
		<div class="flex flex-col items-center flex-1">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconFruh} class="h-12 mb-7" />
				<h1 class="text-5xl font-bold miami" style="line-height:1rem">Frühtracht</h1>
			</div>
			<img src={Fruh} class="mb-10 w-96 max-w-full" />
			<p class="mb-6">
				»Frühtracht«-Honige setzen sich aus dem Nektar von Blüten zusammen, die im Frühjahr (von
				Ende April bis Anfang Juni) blühen. Dieser stammt vor allem von Schlehen und Obstbäumen
				(Äpfel, Birnen, Kirschen, oder Pflaumen) sowie von Ahorn. Haupttrachtlieferant ist jedoch
				Raps. »Frühtracht«-Honig sind farblich heller, geschmacklich eher mild und fallen nicht ganz
				so süß wie später geerntete Honige aus.
			</p>
		</div>
		<div class="flex flex-col items-center flex-1">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconSommer} class="h-12 mb-6" />
				<h1 class="text-5xl font-bold miami" style="line-height:1rem">Sommertracht</h1>
			</div>
			<img src={Sommer} class="mb-10 w-96 max-w-full" />
			<p class="mb-6">
				»Sommertracht«-Honige bestehen hauptsächlich aus dem Blütennektar der Linde, Himbeere,
				Brombeere, Sonnenblume und von Lavendel. »Sommertracht«-Honige sind in der Regel dunkler,
				flüssiger und süßer als »Frühtracht«-Honige. Gelegentlich sind auch Anteile von Waldhonig in
				„Sommertracht“-Honigen mit enthalten. Je nach Anteil schmeckt der Honig dann kräftiger. Alle
				unsere Bienenvölker stehen in der Umgebung von Montabaur. Wir garantieren Ihnen stets
				erstklassige Honige von der Wabe bis zum Glas.
			</p>
		</div>
	</div>
	<Hex />
</div>
