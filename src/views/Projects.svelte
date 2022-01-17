<script>
    import { scale } from 'svelte/transition';
    import { getIcon } from 'src/services/icons-services';
    import Project from './components/Project.svelte'
    const buttons = [
        {
            text: 'Vue',
            icon: getIcon('FaVuejs')
        },
        {
            text: 'Angular',
            icon: getIcon('FaAngular')
        },
        {
            text: 'React',
            icon: getIcon('FaReact')
        },
        {
            text: 'Others...',
            icon: getIcon('FaFlask')
        }
    ]
    import { apps } from 'src/data/me.json'
    $: filteredProjects = apps.length ? apps.filter(proj => !active || active.text === proj.cat) : [];
    let active = null
    function setType(button) {
        active = !active ? button : active.text === button.text ? null : button
    }
</script>

<section class="lab">
    <h1 class="lab__header animate animate__down">Lab</h1>
    <nav class="lab__select">
        <ul class="lab__frameworks">
            {#each buttons as button}
                <li class="{ active === button ? 'lab__framwork active' : 'lab__framwork' }" on:click="{() => setType(button)}">
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
    {#if filteredProjects.length}
        <div class="lab__projects">
            {#each filteredProjects as project}
                <Project project={project} />
            {/each}
        </div>
    {:else}
        <div class="lab__notfound" transition:scale>
            Working on it...
        </div>
    {/if}
    
</section>
<style lang="scss">
.lab {
    margin: 0 auto;
    max-width: 50%;
    background-color: rgba(41, 41, 41, 0.788);
    min-height: 100vh;
    padding-bottom: 1em;
    box-sizing: border-box;
    &__header {
        margin: 0;
        font-size: 3em;
        text-align: center;
        text-shadow: 2px 2px 0px transparent, 4px 4px 0px #31771b;
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
            background: #31771b;
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
    &__projects {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
        grid-gap: 3em;
        align-content: start;
        padding: 0;
        margin: 2em;
        box-sizing: border-box;
    }
    &__notfound {
        min-height: 5em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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