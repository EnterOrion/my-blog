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
				My name is Orion and I've always been curious about the nature of reality and mind. Before
				studying and practicing Buddhism, I had an interest in Western Occultism, ritual, and
				philosophy. I've always be drawn to the unknown, the esoteric, to what lies underneath the
				veil of the mundane. I then came across Buddhism and I fell in love with its practical
				approach to spirituality. It inspired me to work towards liberation within this very life.
				When I discovered Vajrayana, I was happy to have a practice that combined both the
				compassionate goal of eliminating suffering with the power and art of ritual. Similarly, I
				believe that literature can similarly be a transformative way of shaping the mind and
				opening it up to a broader horizon previously unknown.
			</p>
		</div>
	</div>
</main>
