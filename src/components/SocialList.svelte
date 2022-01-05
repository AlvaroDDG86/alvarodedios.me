<script>
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
    import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
    import FaHackerrank from 'svelte-icons/fa/FaHackerrank.svelte'
    import FaCodepen from 'svelte-icons/fa/FaCodepen.svelte'
    function openLink(url) {
        window.open(url, '_blank');
    }
</script>
<div class="rrss">
    <div class="rrss__line">

    </div>
    <div class="rrss__item animate animate__rotateY" on:click={_ => openLink('https://github.com/AlvaroDDG86')}>
        <FaGithub />
    </div>
    <div class="rrss__item animate animate__rotateY" on:click={_ => openLink('https://twitter.com/AlvaroDDG86')}>
        <FaTwitter />
    </div>
    <div class="rrss__item animate animate__rotateY" on:click={_ => openLink('http://linkedin.com/in/álvaro-de-dios-garcía')}>
        <FaLinkedinIn />
    </div>
    <div class="rrss__item animate animate__rotateY" on:click={_ => openLink('https://www.hackerrank.com/AlvaroDDG')}>
        <FaHackerrank />
    </div>
    <div class="rrss__item animate animate__rotateY" on:click={_ => openLink('https://codepen.io/alvaroddg86')}>
        <FaCodepen />
    </div>
    <div class="rrss__line">

    </div>
</div>
<style lang="scss">
.rrss {
    padding: 1em 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__item {
        height: 30px;
        width: 30px;
        cursor: pointer;
        &:hover {
            transform: scale(1.5) rotate(25deg);
            color: chartreuse;
        }
    }
    &__line {
        height: 1px;
        background-color: chartreuse;
        width: 4em;
    }
}

</style>