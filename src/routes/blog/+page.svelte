<script>
	import Nav from '../../components/+Nav.svelte';
	import BlogCard from '../../components/+BlogCard.svelte';
	import '../../styles/main.scss';
	export let data;
</script>

<Nav />
<main class="blog">
	<div class="blog-content">
		<h1>Recent Posts</h1>
		{#each data.posts.reverse() as post}
			<BlogCard
				postTitle={post.title}
				postDate={post.date}
				postSlug={post.slug}
				postSummary={post.summary}
			/>
		{/each}
	</div>
</main>
