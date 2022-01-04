<script>
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
    import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
    import FaHackerrank from 'svelte-icons/fa/FaHackerrank.svelte'
    function openLink(url) {
        window.open(url, '_blank');
    }
</script>
<div class="rrss">
    <div class="rrss__item" style="color: violet" on:click={_ => openLink('https://github.com/AlvaroDDG86')}>
        <FaGithub />
    </div>
    <div class="rrss__item" style="color: rgb(29, 155, 240)" on:click={_ => openLink('https://twitter.com/AlvaroDDG86')}>
        <FaTwitter />
    </div>
    <div class="rrss__item" style="color: #0A66C2" on:click={_ => openLink('http://linkedin.com/in/álvaro-de-dios-garcía')}>
        <FaLinkedinIn />
    </div>
    <div class="rrss__item" style="color: #2EC866" on:click={_ => openLink('https://www.hackerrank.com/AlvaroDDG')}>
        <FaHackerrank />
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
        transition: 0.6s;
        &:hover {
            transform: scale(1.5) rotate(25deg);
        }
    }
}

</style>