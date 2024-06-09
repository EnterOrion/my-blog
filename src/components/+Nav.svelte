<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import vajraIcon from '$lib/assets/vajra.png';

	let mobileActive = false;
</script>

<nav>
	<div class="site-title">
		<a href={`${base}/`}
			><img class="site-icon" src={vajraIcon} alt="A vajra" /> On Emptiness and Form</a
		>
	</div>
	<ul>
		<li>
			<a href={`${base}/`} class:active={$page.url.pathname == `${base}/`}
				><span class="special">Home</span></a
			>
		</li>
		<li><a href={`${base}/blog`} class:active={$page.url.pathname == `${base}/blog`}>Blog</a></li>
		<li>
			<a href={`${base}/about`} class:active={$page.url.pathname == `${base}/about`}>About</a>
		</li>
	</ul>

	<div class="hamburger-wrapper">
		<div
			class="hamburger"
			tabindex="1"
			role="button"
			class:mobile-active={mobileActive}
			on:click={() => (mobileActive = !mobileActive)}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</nav>

{#if mobileActive}
	<div class="mobile-menu">
		<ul>
			<li>
				<a href={`${base}/`} class:active={$page.url.pathname == `${base}/`}
					><span class="special">Home</span></a
				>
			</li>
			<li><a href={`${base}/blog`} class:active={$page.url.pathname == `${base}/blog`}>Blog</a></li>
			<li>
				<a href={`${base}/about`} class:active={$page.url.pathname == `${base}/about`}>About</a>
			</li>
		</ul>
	</div>
{/if}
