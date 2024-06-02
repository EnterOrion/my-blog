<script>
	import Nav from '../../components/+Nav.svelte';
	import BlogCard from '../../components/+BlogCard.svelte';
	import '../../styles/main.scss';
	export let data;
</script>

<Nav />
<main class="blog">
	<div class="blog-content">
		<h1>Posts</h1>
		{#each data.posts.sort(function (a, b) {
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(b.date) - new Date(a.date);
		}) as post}
			<BlogCard
				postTitle={post.title}
				postDate={post.date}
				postSlug={post.slug}
				postSummary={post.summary}
			/>
		{/each}
	</div>
</main>
