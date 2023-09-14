<script>
	import Footer from './components/Footer.svelte';
	import Navbar from './components/Navbar.svelte';
	import '../styles.css';
	import '@fontsource-variable/nunito';
</script>

<Navbar />
<slot />
<Footer />
