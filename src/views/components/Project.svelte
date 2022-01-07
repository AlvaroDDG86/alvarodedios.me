<script lang="ts">
    import { scale } from 'svelte/transition';
    import { getImage } from 'src/services/images-service';
    import { IProject } from 'src/models/IProject';
    export let project: IProject
    function openLink(url) {
        window.open(url, '_blank');
    }
    $: src = getImage(project.image)
    
</script>
<div class="project" transition:scale style="background-image: url('{src}')">
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
    position: relative;
    background: linear-gradient(315deg, #2e2e2e, #373737);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;
    filter: grayscale(90%);
    &:hover {
        filter: grayscale(0);
    }
    &:hover > &__content {
        opacity: 1;
    }
    &:hover > &__title {
        transform: rotate(0deg);
        font-size: 2.5em;
        box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.534);
    }
    &__title {
        position: absolute;
        font-size: 2em;
        margin: 0;
        padding: 0.4em;
        width: fit-content;
        text-align: center;
        background-color: white;
        overflow: hidden;
        color: rgb(10, 86, 185);
        top: -.4em;
        left: -.3em;
        transform: rotate(-7deg);
        box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.534);
        transition: 0.2s;
    }
    &__content {
        background-color: rgba(51, 51, 51, 0.9);
        text-align: center;
        opacity: 0;
        transition: opacity 0.6s;
        width: 100%;
        position: absolute;
        bottom: 0;
        box-shadow: 0px -6px 7px rgba(0, 0, 0, 0.452);
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