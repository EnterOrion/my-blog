<script>
	export let data;
	import '../../../styles/main.scss';
	import { base } from '$app/paths';
</script>

<div>
	<button class="back-button"><a href={`${base}/blog`}>←</a></button>
	<article>
		<header>
			<h1 class="post-header">{data.post.title}</h1>
			<div>Published on {data.post.date}</div>
		</header>
		<!-- render the post -->
		<div class="post-body">
			<svelte:component this={data.component} />
		</div>
	</article>
</div>
