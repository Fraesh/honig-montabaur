<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles.css';
	import '@fontsource-variable/nunito';
</script>

<Navbar />
<slot />
<Footer />
