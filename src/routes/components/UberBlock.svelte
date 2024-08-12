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
			<h1 class="text-4xl md:text-5xl font-bold miami mb-4">Ein Herz für Bienen</h1>
			<p>
				Wir, Dr. Rudolf und Susanne Schneider, sind Agraringenieure aus dem Westerwald. Beruflich
				haben wir uns nicht nur mit großen, sondern auch mit kleinen Tieren auseinandergesetzt.
			</p>
			<p>
				Über Maßnahmen der Züchtung möchten wir einen aktiven Beitrag zur Gesundheit der
				europäischen Bienen leisten. Durch gezielte Auslese unserer Bienenvölker wollen wir dazu
				beitragen, dass die Bienenvölker resistent gegen die Varroamilbe werden. Dieser in den
				1980ern aus Asien eingeschleppte Parasit ist hauptverantwortlich für das sog.
				„Bienensterben“.
			</p>
			<p>
				Während sich die Asiatische Biene in jahrtausendelanger Auseinandersetzung mit diesem
				Parasiten arrangiert hat, ist er für unsere Westliche Honigbiene derzeit noch meist tödlich.
				Es besteht jedoch Hoffnung, dass sich dieser Anpassungsprozess in absehbarer Zeit
				züchterisch nachholen lässt. Neuere wissenschaftliche Untersuchungen haben gezeigt, dass die
				Erfolgsaussichten dazu günstig sind.
			</p>
			<p>
				Das wichtigste Ziel in der Bienenzucht ist deshalb für uns die Gesundheit unserer Völker und
				die besondere Qualität unseres Honigs.
			</p>
			<p>
				Helfen Sie mit, unsere Zuchtziele zu erreichen und unterstützen unsere Arbeit, indem Sie
				unseren Honig kaufen. Sie tun damit nicht nur etwas Gutes für die Bienen in Ihrer Region,
				sondern auch in ganz Europa.
			</p>
			<img
				src={Line}
				class="object-cover md:hidden -mx-8 h-16 min-w-[100vw] mt-10 object-center"
				style="width:100vw"
			/>
		</div>
	</div>
	<img src={Line} class="absolute left-1/2 bottom-4 min-w-full -translate-x-1/2 hidden md:block" />
</div>
