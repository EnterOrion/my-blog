<script>
	export let data;
	import '../../../styles/main.scss';
	import Nav from '../../../components/+Nav.svelte';
</script>

<Nav />
<article>
	<header>
		<h1 class="post-header">{data.post.title}</h1>
		<div class="post-date">Published on {data.post.date}</div>
	</header>
	<!-- render the post -->
	<div class="post-body">
		<svelte:component this={data.component} />
	</div>
</article>
