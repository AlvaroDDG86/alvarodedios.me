<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Aside from './components/Aside.svelte'
	import Home from './views/Home.svelte'
	import About from './views/About.svelte'
	import Work from './views/Work.svelte'
	import Contact from './views/Contact.svelte'
	import Projects from './views/Projects.svelte'
	import video from '../public/assets/videos/video.mp4'
	import bg from '../public/assets/images/bg.jpg'
	import Particles from "svelte-particles";
	import conf from 'src/data/particles.js'
	let name: string = 'world';
	export let url = "";
</script>
<div class="container" style="background-image: url({bg})">
	<Particles
		id="tsparticles"
		options="{conf}"
		/>
	<!-- <video id="background-video" autoplay loop muted poster={video}>
		<source src={video} type="video/mp4">
	</video> -->
	<Router url="{url}">
		<Aside />
		<Route path="about" component="{About}" />
		<Route path="work" component="{Work}" />
		<Route path="contact" component="{Contact}" />
		<Route path="projects" component="{Projects}" />
		<Route path="/"><Home /></Route>
	</Router>
</div>

<style lang="scss">
// #background-video {
//   width: 100vw;
//   height: 100vh;
//   object-fit: cover;
//   position: fixed;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   z-index: -1;
// }
.container {
	position: relative;
	max-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
// * {
//     outline: 1px solid #f00 !important;
// }
</style>
