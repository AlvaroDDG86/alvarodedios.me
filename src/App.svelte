<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Aside from './components/Aside.svelte'
	import Home from './views/Home.svelte'
	import About from './views/About.svelte'
	import Work from './views/Work.svelte'
	import Contact from './views/Contact.svelte'
	import Projects from './views/Projects.svelte'
	let name: string = 'world';
	export let url = "";
</script>
<div class="container">
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
.container {
	position: relative;
	max-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
}
// * {
//     outline: 1px solid #f00 !important;
// }
</style>
