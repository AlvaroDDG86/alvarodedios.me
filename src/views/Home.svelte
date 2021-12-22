<script>
    import Typewriter from 'svelte-typewriter'
    import setup from '../assets/images/setup.jpg'
</script>
<section class="home-section">
    <div class="hero-texts">
        <h1 class="hero-heading">
            I'm Alvaro de Dios <br />
        </h1>
        <p class="hero-typed">
            <Typewriter interval={50} cursor={'_'} loop={true}>
                <h2>Front End Developer</h2>
                <h2>JS, HTML and CSS are my friends</h2>
                <h2>I code with the last frameworks like Vue, Angular, Svelte and React</h2>
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.hero-texts {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    padding-left: 1em;
}

.hero-heading {
    color: white;
    font-size: 8em;
    text-transform: capitalize;
    font-weight: 8em;
    background-color: transparent;
    text-shadow: 2px 2px 0px transparent, 4px 4px 0px rgba(255, 255, 255, 0.404)
}

.hero-typed {
    color: white;
    font-size: 1.5em;
}

.hero-img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background-color: green;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.4;
    z-index: 1;
}
@media only screen and (max-width: 992px) { 
    .hero-heading {
        font-size: 6em;
    }
    .hero-img {
        opacity: 0.1;
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