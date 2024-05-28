<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<nav>
	<div><a href={`${base}/`}>⟁ On emptiness and form</a></div>
	<ul>
		<li>
			<a href={`${base}/`} class:active={$page.url.pathname == '/'}
				><span class="special">Home</span></a
			>
		</li>
		<li><a href={`${base}/blog`} class:active={$page.url.pathname == '/blog'}>Blog</a></li>
		<li><a href={`${base}/about`} class:active={$page.url.pathname == '/about'}>About</a></li>
	</ul>
</nav>
