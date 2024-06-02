<script>
	import '../styles/main.scss';
	import { base } from '$app/paths';
	export let postDate;
	export let postTitle;
	export let postSlug;
	export let postSummary;
</script>

<div class="box">
	<h2><a href={`${base}/blog/${postSlug}`}>{postTitle}</a></h2>
	<p>
		{postSummary}
	</p>
	<p class="date">{postDate}</p>
</div>
