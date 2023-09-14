<script>
	import Fruh from '$lib/assets/img/fruhtracht.webp';
	import Sommer from '$lib/assets/img/sommertracht.png';
	import IconFruh from '$lib/assets/img/icons/cloudy-day.svg';
	import IconSommer from '$lib/assets/img/icons/sunny.svg';
	import Hex from '$lib/components/ornaments/Hex.svelte';
</script>

<div class="bg-base-100 w-full max-w-full relative py-24 px-8 overflow-hidden">
	<div class="max-w-7xl w-full m-auto flex gap-32 relative z-10">
		<div class="flex flex-col items-center">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconFruh} class="h-12 mb-7" />
				<h1 class="text-5xl font-bold miami" style="line-height:1rem">Frühtracht</h1>
			</div>
			<img src={Fruh} class="mb-10 w-96 max-w-full" />
			<p class="mb-6">
				Im Frühling kommen die Bienen frisch aus dem Winterschlaf und machen sich an ihr Werk. Der
				Westerwald ist reich an Nektar aber die Bienen sind noch nicht ganz auf der Höhe. Die
				Qualität der Zutaten ist daher hervorragend, die Verarbeitung nur mäßig. Der Honig hat ein
				vielfältiges, sanftes Aroma.
			</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex mb-4 mt-16 items-center gap-8">
				<img src={IconSommer} class="h-12 mb-6" />
				<h1 class="text-5xl font-bold miami" style="line-height:1rem">Sommertracht</h1>
			</div>
			<img src={Sommer} class="mb-10 w-96 max-w-full" />
			<p class="mb-6">
				Gegen Ende der Saison folgt die so genannte Sommertracht. Die Flora ist weniger divers und
				die Temperaturen steigen. Die Bienen Schwitzen bei der Arbeit, aber sie genißen den
				Feierabend nach getaner Arbeit. Die Sommertracht ist simpler im Aroma, dafür kräftiger und
				würziger mit einer leicht salzigen Note.
			</p>
		</div>
	</div>
	<Hex />
</div>
