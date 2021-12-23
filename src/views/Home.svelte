<script>
    import Typewriter from 'svelte-typewriter'
    import setup from '../assets/images/setup.jpg'
</script>
<section class="home-section">
    <div class="hero-texts">
        <div class="hero-title">
            <h1 class="hero-heading">
                I'm Alvaro de Dios
            </h1>
            <h2 class="hero-heading--small">Front End Developer</h2>
        </div>
        <p class="hero-typed">
            <Typewriter interval={50} cursor={'_'} loop={true}>
                <h2>JS, HTML and CSS are my friends</h2>
                <h2>I code with the last frameworks like Vue, Angular, Svelte and React</h2>
                <h2>Software engineer expecialized in FrontEnd stuff</h2>
            </Typewriter>
        </p>
    </div>
    <div class="hero-img" style="background-image: url('{setup}')">
    </div>
</section>
<style lang="scss">
.home-section {
    position: relative;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.hero-texts {
    position: relative;
    display: grid;
    align-items: end;
    justify-items: start;
    grid-template-rows: 50% 50%;
    z-index: 2;
    padding-left: 1em;
}

.hero-heading {
    color: white;
    font-size: 8em;
    text-transform: capitalize;
    font-weight: 8em;
    background-color: transparent;
    text-shadow: 2px 2px 0px transparent, 4px 4px 0px rgba(255, 255, 255, 0.404);
    margin-bottom: .5em;
}

.hero-heading--small {
    font-size: 2em;
    text-shadow: 1px 1px 0px transparent, 2px 2px 0px rgba(255, 217, 0, 0.534);
}
.hero-typed {
    color: rgba(255, 217, 0, 0.76);
    font-size: 1.5em;
    font-family: 'Special Elite', cursive;
}

.hero-img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.1;
    z-index: 1;
}
@media only screen and (max-width: 992px) { 
    .hero-heading {
        font-size: 6em;
    }
    .hero-img {
        width: 100%;
    }
}
@media only screen and (max-width: 600px) {
    .hero-heading {
        font-size: 4em;
    }
    .hero-typed {
        font-size: 1em;
    }
}
</style>