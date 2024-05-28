<script>
	import { base } from '$app/paths';
	import '../styles/main.scss';
	import Nav from '../components/+Nav.svelte';
	import Hero from '../components/+Hero.svelte';
	export let data;
</script>

<Nav />
<Hero />
<main class="home">
	<div class="text">
		<h1>Welcome to <em>On Emptiness and Form</em></h1>
		<p>
			This website is home to reflections on Buddhism, experiments with the mind, and musings on
			literature.
		</p>
		<p>
			<a href={`${base}/blog/${data.posts[data.posts.length - 1].slug}`}
				>Read the most recent post now ></a
			>
		</p>
	</div>
</main>

<style>
</style>
