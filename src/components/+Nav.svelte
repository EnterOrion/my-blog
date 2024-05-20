<script>
	import { page } from '$app/stores';
</script>

<nav>
	<div><a href="/">⟁ On emptiness and form</a></div>
	<ul>
		<li>
			<a href="/" class:active={$page.url.pathname == '/'}><span class="special">Home</span></a>
		</li>
		<li><a href="/blog" class:active={$page.url.pathname == '/blog'}>Blog</a></li>
		<li><a href="/about" class:active={$page.url.pathname == '/about'}>About</a></li>
	</ul>
</nav>
