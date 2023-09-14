<script>
	import Img from '$lib/assets/img/filler1.webp';
	import Line from '$lib/assets/img/line1.svg';
	import Schloss from '$lib/components/ornaments/Schloss.svelte';
</script>

<div class="bg-base-200 w-full max-w-full relative py-24 px-8 overflow-hidden">
	<div class="max-w-7xl w-full m-auto flex gap-8">
		<!-- <Schloss /> -->
		<img src={Img} class="z-10" />
		<img src={Line} class="absolute left-1/2 bottom-24 min-w-full -translate-x-1/2" />
		<div class="flex flex-col">
			<h1 class="text-5xl font-bold miami mb-10 mt-6" style="line-height:5rem">
				Unser Honig ist Weltklasse!
			</h1>
			<p class="mb-6">
				Glaubt es uns, einen Besseren hattet ihr noch nie! Unsere Bienen sind alle Hausgemacht im
				heimischen Westerwald. Von der Könnigen bis hin zum Knappen, schmückt der Westerwald ihr
				Wappen.
			</p>
			<p>
				Einst traf ich einen Fürst dem man nachsagte, dass er sich ausschließlich von Honig
				ernährte. Man nannte ihn auch den "Honigmann". Er kostet unser Bienengold und nach einem
				kurzen, bedenklichen Blick in die Ferne schlang er halbe Glas als hätte ihn gar der Teufel
				geritten. Es bedarf keiner weiteren Worte, sein Appetit ist unser Gütesiegel
			</p>
		</div>
	</div>
</div>
