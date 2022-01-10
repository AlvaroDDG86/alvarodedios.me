<script>
    import { getIcon } from 'src/services/icons-services';
    import { scale } from 'svelte/transition';
    import IconContent from '../components/IconContent.svelte'
    import { descriptions, skills } from 'src/data/me.json'
</script>
<section class="about">
    <h1 class="about__header animate animate__down">About me</h1>
    <div class="about__desc">
        {#each descriptions as desc}
            <p class="about__p">{desc}</p>
        {/each}
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
                    <svelte:component this={getIcon(item.icon)} />
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
    &__header {
        margin: 0;
        font-size: 3em;
        text-align: center;
        text-shadow: 2px 2px 0px transparent, 4px 4px 0px rgb(10, 86, 185);
    }
    &__desc {
        max-width: 100vw;
        box-sizing: border-box;
    }

    &__p {
        box-sizing: border-box;
        max-width: 100vh;
        padding: 0.3em 2em;
        text-align: justify;
    }

    &__title {
        text-align: center;
    }

    &__skill-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(255, 255, 255, 0.329);
    }

    &__skill-line {
        flex: 1 1 auto;
        background-color: rgba(255, 255, 255, 0.329);
        margin: 0 1em;
        height: 1px;
    }

    &__skills-content {
        margin: 0 auto;
        width: 75%;
        box-sizing: border-box;
        padding: 1em 0;
    }

    &__skills-list {
        list-style-type: none;
        padding-left: 0;
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }

    &__skills-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
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