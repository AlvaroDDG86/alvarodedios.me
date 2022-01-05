<script>
    import { scale } from 'svelte/transition';
    import FaJsSquare from 'svelte-icons/fa/FaJsSquare.svelte'
    import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte'
    import FaHtml5 from 'svelte-icons/fa/FaHtml5.svelte'
    import FaVuejs from 'svelte-icons/fa/FaVuejs.svelte'
    import FaAngular from 'svelte-icons/fa/FaAngular.svelte'
    import FaReact from 'svelte-icons/fa/FaReact.svelte'
    import FaGitAlt from 'svelte-icons/fa/FaGitAlt.svelte'
    import FaSass from 'svelte-icons/fa/FaSass.svelte'
    import FaJira from 'svelte-icons/fa/FaJira.svelte'
    import IconContent from '../components/IconContent.svelte'
    const skills = [
        {
            title: 'BASIC',
            list: [
                {
                    icon: FaJsSquare,
                    color: 'yellow',
                    text: 'JS, ES6, TS'
                },
                {
                    icon: FaCss3Alt,
                    color: '#2EA3D5',
                    text: 'CSS3, Flex, Grid, Responsible'
                },
                {
                    icon: FaHtml5,
                    color: '#E84D31',
                    text: 'HTML5'
                }
            ]
        },
        {
            title: 'FRAMEWORKS',
            list: [
                {
                    icon: FaVuejs,
                    color: '#3FB27F',
                    text: 'VueJS [2, 3], Vuex, Pinia, VeeValidate, Jest'
                },
                {
                    icon: FaAngular,
                    color: '#C3002F',
                    text: 'Angular [6+], Typescript, Rxjs, Material, Jasmine'
                },
                {
                    icon: FaReact,
                    color: '#5ED4F4',
                    text: 'React'
                }
            ]
        },
        {
            title: 'TOOLS',
            list: [
                {
                    icon: FaGitAlt,
                    color: '#E84D31',
                    text: 'Git, GitFlow, GitHub, Sourcedest, Bitbucket'
                },
                {
                    icon: FaSass,
                    color: '#C76494',
                    text: 'Sass, TailwindCSS, Bootstrap, Prime'
                },
                {
                    icon: FaJira,
                    color: '#0076ED',
                    text: 'Jira, Vite, Agile, Kanbam, Scrum, EsLint, Sonar, Swagger'
                }
            ]
        }
    ]
</script>
<section class="about">
    <h1 class="about__header animate animate__down">About me</h1>
    <div class="about__desc">
        <p class="about__p">Hey everyone, My name is Álvaro, and I'm from Spain. In the last five years, I've been working as a software developer. In my opinion, technology is here to help us, and I am trying to make software that is easy to use, reusable, fast, and easy to understand.</p>
        <p class="about__p">As a programmer, I have had the opportunity to work with the latest technologies such as .net, angular 6+, vue 2 and 3 and more.</p>
        <p class="about__p">From the very beginning, I've always tried to improve my skills through courses, practices, and enjoying the journey.</p>
        <p class="about__p">I am always willing to communicate, assist, ask, learning and be part of a team.</p>
    </div>
    <h2 class="about__title" transition:scale >Skills</h2>
    <div class="about__skills-content">
    {#each skills as skill}
        <div class="about__skill-title">
            <h3 class="poppins">{skill.title}</h3>
            <div class="about__skill-line"></div>
        </div>
        <ul class="about__skills-list">
        {#each skill.list as item}
            <li class="about__skills-item" transition:scale>
                <IconContent --text-color={item.color}>
                    <svelte:component this={item.icon} />
                </IconContent>
                {item.text}
            </li>
        {/each}
        </ul>
	{/each}
    </div>
</section>

<style lang="scss">
.about {
    margin: 0 auto;
    max-width: 50%;
    background-color: rgba(41, 41, 41, 0.788);
    box-sizing: border-box;
    min-height: 100vh;
}

.about__header {
    margin: 0;
    font-size: 3em;
    text-align: center;
    text-shadow: 2px 2px 0px transparent, 4px 4px 0px chartreuse;
}
.about__desc {
    max-width: 100vw;
    box-sizing: border-box;
}

.about__p {
    box-sizing: border-box;
    max-width: 100vh;
    padding: 0.3em 2em;
    text-align: justify;
}

.about__title {
    text-align: center;
}

.about__skill-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.329);
}

.about__skill-line {
    flex: 1 1 auto;
    background-color: rgba(255, 255, 255, 0.329);
    margin: 0 1em;
    height: 1px;
}

.about__skills-content {
    margin: 0 auto;
    width: 75%;
    box-sizing: border-box;
}

.about__skills-list {
    list-style-type: none;
    padding-left: 0;
    font-family: 'Poppins', sans-serif;
}

.about__skills-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

@media only screen and (max-width: 992px) { 
    .about {
        max-width: 100%;
        margin: initial;
    }
    .about__p {
        padding: 0.2em 1em;
    }
    .about__skills-content {
        width: 100vw;
        padding-left: 1em;
    }
}
</style>