<script>
	import Hex from '$lib/components/ornaments/Hex.svelte';
	import Bild from '$lib/assets/img/P5292329.jpg';
</script>

<div class="bg-base-200 w-full max-w-full relative px-8 overflow-hidden" />

<div class="bg-base-100 w-full max-w-full relative py-36 px-8 overflow-hidden">
	<div class="max-w-7xl w-full m-auto flex flex-col gap-5 relative z-10 text-lg">
		<h1 class="text-3xl md:text-5xl font-bold miami mb-10 leading-[3rem] md:leading-normal">
			Die Kunst der Königinnenzucht: Wie wir gesunde Bienenvölker heranziehen
		</h1>

		<p>
			In der Imkerei spielt die Königin eines Bienenstockes eine entscheidende Rolle. Sie ist das
			Herz des Volkes und bestimmt durch ihre Gene die Eigenschaften und die Überlebenschancen von
			30.000 – 50.000 Bienen. Außerdem steuert sie über Duftstoffe das Sozialverhalten im
			Bienenstaat und legt damit den Charakter eines Volkes fest. Unsere Königinnenzucht ist deshalb
			keine Nebensächlichkeit, sondern eine sorgfältige Wissenschaft und Kunst zugleich, um das
			Überleben und die Gesundheit unserer Population zu sichern.
		</p>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4 leading-[3rem] md:leading-normal">
			Die Rolle der Königin
		</h2>
		<p>
			Eine durchschnittliche Königin legt während ihrer zweieinhalb- bis dreijährigen Lebensdauer
			bis zu 2.000 Eier täglich. Das bedeutet, dass sie im Laufe ihres Lebens mehrere hunderttausend
			Nachkommen produzieren kann. Jedes dieser Eier trägt die gesamte genetische Information und
			potenzielle Charakteristik des Volkes in sich. Von der Friedfertigkeit über die
			Sammelleidenschaft bis hin zur Widerstandsfähigkeit gegen Krankheiten – alles wird durch die
			Gene der Königin bestimmt.
		</p>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4 leading-[3rem] md:leading-normal">
			Unser Zuchtansatz: Wissenschaft und Sorgfalt
		</h2>
		<p>
			Unsere Königinnenzucht folgt den strengen Richtlinien der AGT (Arbeitsgemeinschaft
			Toleranzzucht), einer Organisation, die sich der Züchtung von Bienen mit bestmöglicher
			Resistenz gegen die Varroamilbe verschrieben hat. Diese Milbe ist eine der größten Bedrohungen
			für Bienenvölker weltweit und nur durch gezielte Zucht lässt sich langfristig etwas gegen
			ihren verheerenden Einfluss ausrichten.
		</p>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4 leading-[3rem] md:leading-normal">
			Der komplexe Zuchtprozess: Ein Blick hinter die Kulissen
		</h2>
		<div class="flex lg:flex-row flex-col gap-6">
			<ol class="list-decimal list-outside ml-6 space-y-6 flex-1">
				<li>
					<strong>Selektion der Ausgangslinien:</strong> Unser Prozess beginnt mit der sorgfältigen
					Auswahl der künftigen Elternvölker. Diese werden auf folgende Kriterien getestet und
					überprüft:
					<ul class="list-disc list-outside ml-6 mt-3 space-y-1">
						<li>Sammelleistung an Honig</li>
						<li>Krankheitsresistenz</li>
						<li>Sanftmut</li>
						<li>Überwinterungsfähigkeit</li>
						<li>Schwarmverhalten</li>
					</ul>
				</li>
				<li>
					<strong>Larventransfer:</strong> Die Zucht beginnt bereits im Bienenvolk. Königinnenzellen,
					die deutlich größer als normale Brutzellen sind, werden sorgfältig identifiziert. Bereits zwei
					bis drei Tage nach der Eiablage sind diese Zellen deutlich erkennbar. Mit mikrochirurgischer
					Präzision werden jungen Larven mit einem winzigen Spatel in künstliche Näpfchen umgesiedelt.
					Etwa zwei Dutzend dieser Näpfchen werden in einen speziellen Zuchtrahmen verbracht, wo die
					Arbeiterinnen sie innerhalb von vier Tagen verdeckeln.
				</li>
				<li>
					<strong>Geschützte Aufzucht:</strong> In der Natur entwickeln Bienenvölker einen brutalen,
					aber effektiven Mechanismus zur Königinnennachfolge. Wenn eine neue Generation von Königinnen
					heranwächst, kommt es zu einem erbarmungslosen Überlebenskampf. Die Erstgeschlüpfte nimmt durch
					hörbares Piepsen sofort Kontakt zu ihren noch ungeschlüpften Schwestern auf und eliminiert
					dann alle Konkurrentinnen durch gezielte Stiche. Diese natürliche Selektion garantiert, dass
					nur die stärkste und am besten angepasste Königin überlebt. Wir ziehen deshalb unsere Königinnen
					in einem kontrollierten Umfeld auf und versehen die verdeckelten Königinnenzellen mit speziellen
					Käfigen.
				</li>
				<li>
					<strong>Markierung und Identifikation:</strong> Nach dem Schlüpfen erhält jede Königin eine
					individuelle Nummer und eine Farbmarkierung auf ihrem Thorax. Im Jahr 2026 verwenden wir z.B.
					weiße Markierungen. Diese Kennzeichnung ermöglicht es uns, eine Königin inmitten von tausenden
					Bienen mühelos zu identifizieren.
				</li>
			</ol>
			<img
				src={Bild}
				class="object-cover flex-1 lg:w-1/2 aspect-square lg:aspect-auto rounded-3xl"
			/>
		</div>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4 leading-[3rem] md:leading-normal">
			Begattung auf den Ostfriesischen Inseln
		</h2>
		<p>
			Unsere Spitzenköniginnen werden auf den Ostfriesischen Inseln begattet – ein einzigartiges
			Konzept genetischer Isolation, das sich die deutschen Zuchtverbände geschaffen haben. Alle
			Inseln beherbergen jeweils mehrere Drohnenvölker der gleichen genetischen Abstammung. Da
			Drohnen nicht weiter als 10 km fliegen, ist eine Vermischung mit den Drohnen anderer Inseln
			ausgeschlossen. Eine Bienenkönigin wird dann je nach Wetterlage von mehreren (15 – 18)
			Drohnen, die von derselben Drohnenmutter abstammen, begattet. Der Zuchtwert jedes
			Drohnenvolkes ist genau dokumentiert, was eine präzise Vorhersage der Eigenschaften künftiger
			Generationen ermöglicht.
		</p>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4 leading-[3rem] md:leading-normal">
			Unsere Vision: Das Überleben der Westlichen Honigbiene
		</h2>
		<p>
			Wir züchten nicht nur Bienen – wir sichern damit ein Ökosystem. Unser Ziel ist es, Völker zu
			entwickeln, die:
		</p>
		<ul class="list-disc list-outside ml-6 space-y-2">
			<li>friedlich und leicht zu bewirtschaften sind</li>
			<li>eine geringe Schwarmtendenz aufweisen</li>
			<li>ausreichend Nektar sammeln</li>
			<li>intensive Brutpflege betreiben und</li>
			<li>widerstandsfähig gegen Krankheiten sind, insbesondere gegen die Varroamilbe</li>
		</ul>

		<h2 class="text-2xl md:text-3xl font-bold miami mt-8 mb-4">Ein Blick in die Zukunft</h2>
		<p>
			Ohne die kontinuierliche Arbeit von Bienenzüchtern wäre die Westliche Honigbiene bereits vor
			Jahrzehnten ausgestorben. Unsere Arbeit ist deshalb mehr als ein Hobby – sie liefert einen
			aktiven Beitrag zum Erhalt einer der wichtigsten Tierarten unseres Planeten.
		</p>
		<p>
			Jede Königin in unserem Zuchtprogramm ist mehr als ein gewöhnliches Insekt. Sie stellt ein
			unermüdliches Zeugnis der Vollendung und Anpassungsfähigkeit in Verbindung mit
			Überlebenswillen dar.
		</p>
	</div>
	<Hex />
</div>
