<script>
	import Nav from '../../components/+Nav.svelte';
	import BlogCard from '../../components/+BlogCard.svelte';
	import '../../styles/main.scss';
</script>

<Nav />
<main class="blog">
	<div class="blog-content">
		<h1>Recent Posts</h1>
		<BlogCard />
	</div>
</main>
