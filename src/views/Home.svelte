<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
    import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
    import FaHackerrank from 'svelte-icons/fa/FaHackerrank.svelte'
    import FaCodepen from 'svelte-icons/fa/FaCodepen.svelte'
    function openLink(url) {
        window.open(url, '_blank');
    }
</script>
<section class="home">
    <div class="home__text">
        <div class="home__title">
            <h1 class="home__heading animate animate__down">
                <span>&lt;welcome /&gt;</span><br/> I'm Alvaro de Dios
            </h1>
            <h2 class="home__heading home__heading--small animate animate__rotateY">&lt;front-end-developer /&gt;</h2>
        </div>
        <p class="home__typed">
            <Typewriter interval={50} cursor={'_'} loop={true}>
                <h2>JS, HTML and CSS developer</h2>
                <h2>I code with the last frameworks like Vue, Angular, Svelte and React</h2>
                <h2>Software engineer expecialized in FrontEnd stuff</h2>
                <h2>Clean Code, Test, SOLID, DRY, Agile</h2>
            </Typewriter>
        </p>
    </div>
    <div class="home__rrss animate animate__appear">
        <div class="home__rrss-email">
            <a href="mailto:alvarodediosgarcia1986@gmail.com">Contact me</a>
            <div class="home__rrss-line"></div>
        </div>
        <div class="home__rrss-link">
            <div class="home__rrss-links">
                <div class="home__rrss-item" on:click={_ => openLink('https://github.com/AlvaroDDG86')}><FaGithub /></div>
                <div class="home__rrss-item" on:click={_ => openLink('https://twitter.com/AlvaroDDG86')}><FaTwitter /></div>
                <div class="home__rrss-item" on:click={_ => openLink('http://linkedin.com/in/álvaro-de-dios-garcía')}><FaLinkedinIn /></div>
                <div class="home__rrss-item" on:click={_ => openLink('https://www.hackerrank.com/AlvaroDDG')}><FaHackerrank /></div>
                <div class="home__rrss-item" on:click={_ => openLink('https://codepen.io/alvaroddg86')}><FaCodepen /></div>
            </div>
            <div class="home__rrss-line"></div>
        </div>
    </div>
</section>
<style lang="scss">
.home {
    position: relative;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    &__text {
        position: relative;
        display: grid;
        align-items: end;
        justify-items: start;
        grid-template-rows: 50% 50%;
        z-index: 2;
        padding-left: 1em;
    }
    &__heading {
        color: rgb(26, 26, 26);
        font-size: 4em;
        font-weight: 8em;
        background-color: transparent;
        margin-bottom: .5em;
        text-transform: uppercase;
        background-image: linear-gradient(
            -225deg,
            #231557 0%,
            #41B883 29%,
            #AF2B2D 67%,
            #5ED3F3 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;

        & span {
            font-size: 0.50em;
        }
        &--small {
            @media only screen and (max-width: 600px) { 
                font-size: 2em;
            }
            font-size: 2em;
            color: rgb(26, 26, 26);
            animation-delay: 1s;
        }
    }
    &__title {
        font-family: 'Poppins', sans-serif;
    }

    &__typed {
        color: #000000;
        font-size: 1.5em;
        font-family: 'Poppins', sans-serif;
        @media only screen and (max-width: 600px) { 
            font-size: 1em;
        }
    }
    &__rrss {
        z-index: 3;
        position: absolute;
        right: 0;
        bottom: 6em;
        transform: rotate(90deg);
        transition-delay: 2s;
        @media only screen and (max-width: 600px) {
            z-index: 3;
            position: absolute;
            right: -4em;
            bottom: 2em;
        }
        &-email {
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > a {    
                text-decoration: none;
                color: #31771b;
                &:hover {
                    color:rgb(143, 143, 143);
                }
            }
        }
        &-link, &-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &-item {
            width: 2em;
            height: 2em;
            cursor: pointer;
            transform: rotate(-90deg);
            color: #31771b;
            &:hover {
                color: rgb(143, 143, 143);
            }
        }
        &-line {
            width: 5em;
            height: 1px;
            background-color: #31771b;
            margin: 0 1em;
            flex: 1 1 auto;
        }
    }
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>