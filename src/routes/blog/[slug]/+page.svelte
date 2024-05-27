<script>
	export let data;
	import '../../../styles/main.scss';
</script>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
		</header>
		<!-- render the post -->
		<div class="post-body">
			<svelte:component this={data.component} />
		</div>
	</article>
</div>

<style>
	h1 {
		font-size: 2.5rem;
		text-align: center;
	}

	.post-body {
		width: clamp(23rem, 60%, 50rem);
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 400px) {
		.post-body {
			max-width: 18rem;
		}
	}
</style>
