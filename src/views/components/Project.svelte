<script>
    import words from '../../../public/assets/images/projects/your-words.png'
    import rate from '../../../public/assets/images/projects/light-rate.png'
    let images = {
        words,
        rate
    } 
    export let project
    function openLink(url) {
        window.open(url, '_blank');
    }
</script>
<div class="project" style="background-image: url('{images[project.image]}')">
    <h3 class="project__title">{project.title}</h3>
    <div class="project__content">
        <p class="project__desc">{project.desc}</p>
        <div class="project__buttons">
            {#each project.links as { icon, url }}
                <div class="project__button" on:click="{() => openLink(url)}">
                    <svelte:component this={icon} />
                </div>
            {/each}
        </div>
    </div>
</div>
<style lang="scss">
.project {
    height: 400px;
    background-color: black;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 3em;
    background: linear-gradient(315deg, #2e2e2e, #373737);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;
    &:hover {
        filter: grayscale(90%);
    }
    &:hover > &__content {
        opacity: 1;
    }
    &__title {
        font-size: 3em;
        font-family: 'Pushster', cursive;
        margin: 0;
        background-color: rgba(51, 51, 51, 0.9);
        width: 100%;
        text-align: center;
    }
    &__content {
        background-color: rgba(51, 51, 51, 0.9);
        text-align: center;
        opacity: 0;
        transition: opacity 0.6s;
        width: 100%;
    }
    &__desc {
        padding: 1em 2em
    }
    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 2em;
    }
    &__button {
        width: 2em;
        margin: 0;
        padding: 0;
        cursor: pointer;
        margin: 0 1em;
        transition: 0.6s;
        &:hover {
            transform: scale(1.1) rotate(10deg);
        }
    }
}
</style>