<script>
	import Nav from '../../components/+Nav.svelte';
	import meImg from '../../lib/assets/me.jpg';
	import '../../styles/main.scss';
</script>

<Nav />
<main class="about">
	<div class="about-content">
		<h1>About</h1>
		<div class="photo-text">
			<div class="frame">
				<img src={meImg} alt="Orion Wesson" />
			</div>
			<p>
				My name is Orion and I've always been interested in the true nature of reality. I've been
				studying Buddhism for the past several years and before I got into Buddhism, I had a
				interest in enacting change in reality through the act of ritual. Now, I strive to put those
				two interests together in the form of studying vajrayana. Furthermore, I believe that
				literature can be a way of shaping the mind and transforming the way we see reality as well,
				so I aim to explore the theories about books that I've read recently.
			</p>
		</div>
	</div>
</main>
