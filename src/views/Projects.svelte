<script>
    import FaVuejs from 'svelte-icons/fa/FaVuejs.svelte'
    import FaAngular from 'svelte-icons/fa/FaAngular.svelte'
    import FaReact from 'svelte-icons/fa/FaReact.svelte'
    import FaFlask from 'svelte-icons/fa/FaFlask.svelte'
    import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte'
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import Project from './components/Project.svelte'
    const buttons = [
        {
            text: 'Vue',
            icon: FaVuejs
        },
        {
            text: 'Angular',
            icon: FaAngular
        },
        {
            text: 'React',
            icon: FaReact
        },
        {
            text: 'Others...',
            icon: FaFlask
        }
    ]
    const projects = [
        {
            title: 'Your words!',
            desc: 'Place where you can save your words, anotations, examples, etc... ',
            cat: 'Vue',
            image: 'words',
            links: [
                {
                    icon: FaGithub,
                    url: 'https://github.com/AlvaroDDG86/your-words'
                },
                {
                    icon: FaExternalLinkAlt,
                    url: 'https://your-words.netlify.app/'
                }
            ]
        },
        {
            title: 'Light rate',
            desc: 'Query the price of the ligth in Spain',
            cat: 'Vue',
            image: 'rate',
            links: [
                {
                    icon: FaGithub,
                    url: 'https://github.com/AlvaroDDG86/light-rate'
                },
                {
                    icon: FaExternalLinkAlt,
                    url: 'https://precioluzespana.netlify.app/#/'
                }
            ]
        }
    ]
    $: filteredProjects = projects.filter(proj => !active || active.text === proj.cat);
    let active = null
</script>

<section class="lab">
    <h1 class="lab__header">Lab</h1>
    <nav class="lab__select">
        <ul class="lab__frameworks">
            {#each buttons as button}
                <li class="{ active === button ? 'lab__framwork active' : 'lab__framwork' }" on:click="{() => active = active ? null : button}">
                    <div class="lab__framwork-icon">
                        <svelte:component this={button.icon} />
                    </div>
                    <span class="lab__framework-name">
                        {button.text}
                    </span>
                </li>
            {/each}
        </ul>
    </nav>
    <div class="lab__projects">
        {#each filteredProjects as project}
            <Project project={project} />
        {/each}
    </div>
</section>
<style lang="scss">
.lab {
    margin: 0 auto;
    max-width: 50%;
    background-color: #333;
    min-height: 100vh;
    padding-bottom: 1em;
    &__header {
        margin: 0;
        font-size: 3em;
        text-align: center;
        font-family: 'Pushster', cursive;
    }
    &__select {
        width: 100%;
        padding: 3em 0;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }
        
    &__frameworks {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    &__framwork {
        min-width: 3em;
        padding: 0.5em 1em;
        color: white;
        background: black;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.2em;
        text-align: center;
        position: relative;
        transition: transform .25s ease-out;
        border-radius: 10px;
        font-weight: bold;
        transition: 0.6s;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover, &.active {
            background: white;
            color: black;
        }
        &:hover::after {
            transform: translateY(5px);
            width: 100%;
        }
        &::after, &.active::after {
            content: '';
            display: block;
            position: relative;
            width: 0;
            margin: 0 auto;
            height: 2px;
            background-color: black;
            transition: all .75s;
        }
    }
    &__framwork-icon {
        height: 22px;
    }
    .lab__projects {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(274px, 1fr));
        grid-gap: 3em;
        align-content: start;
        padding: 0;
        margin: 2em;
        box-sizing: border-box;
    }
}
@media only screen and (max-width: 992px) { 
    .lab {
        max-width: 100%;
    }
    .lab__framwork{
        min-width: 2em;
        padding: 0.5em 0.5em;
    }
    .lab__framework-name {
        display: none;
    }
    .lab__framwork-icon {
        height: 32px;
        display: block;
    }
}
</style>