<script>
    import { scale } from 'svelte/transition';
    import { jobs } from 'src/data/me.json'
    import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
</script>
<section class="work">
    <h1 class="work__header animate animate__down">Work Exp.</h1>
    <p class="work__present">
        PRESENT...
    </p>
    <div class="work__content">
        <span class="work__timeline">
        </span>
        {#each jobs as experience, i}
            <div class="work__experience {experience.active ? 'active' : ''}"  transition:scale on:click={_ => experience.active = !experience.active} style="top: { `${i * 12}em` }">
                <span class="work__experience-link">

                </span>
                <span class="work__close">
                    <FaTimes />
                </span>
                <div class="work__experience-title">
                    { experience.title }
                </div>
                <div class="work__logo" style="background-image: url('{experience.logo}')">
                </div>
                {#if experience.active}
                    <div class="work__experience-dates">
                        { experience.startDate} - { experience.endDate}
                    </div>
                    <div class="work__experience-company">
                        { experience.company}
                    </div>
                    <div class="work__experience-content">
                        {@html experience.desc}
                    </div>
                    <div class="work__experience-techs">
                        <ol>
                            {#each experience.techs as exp}
                            <li>
                                { exp }
                            </li>
                            {/each}
                        </ol>
                    </div>
                {:else}
                    <span class="work__experience-dates--small">
                        { experience.startDate} - { experience.endDate}
                    </span>
                {/if}
            </div>
        {/each}
    </div>
    <div class="work__present">
        2016...
    </div>
</section>
<style lang="scss">
.work {
    margin: 0 auto;
    max-width: 50%;
    background-color: rgba(41, 41, 41, 0.788);
    min-height: 100vh;
    box-sizing: border-box;
    &__header {
        margin: 0;
        font-size: 3em;
        text-align: center;
        text-shadow: 2px 2px 0px transparent, 4px 4px 0px #31771b;
    }
    
    &__present {
        text-align: center;
    }
    &__content {
        margin: 3em 0em;
        position: relative;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }
    
    &__timeline {
        width: 2px;
        height: calc(100% - 2em);
        background-color: white;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
    }
    
    &__experience {
        height: 4em;
        width: 8em;
        // border: solid 2px rgba(0, 0, 0, 0.37);
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 0.5em;
        position: absolute;
        box-sizing: border-box;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
        cursor: pointer;
        &.active {
            padding-top: 5em;
            min-height: 100vh;
            width: 100vw;
            overflow-y: scroll;
            position: fixed;
            left: 0 !important;
            top: 0 !important;
            border-radius: 0;
            z-index: 10;
            gap: 1em;
            background-color: rgba(0, 0, 0, 0.849);
            color: white;
            & > &__experience-link {
                display: none;
            }
        }
    }
    &__experience:nth-child(even) {
        left: calc(50% - 16em);
    }
    &__experience:nth-child(odd) {
        left: calc(50% + 8em);
    }
    
    .active > &__close {
        display: initial;
    }
    
    &__close {
        display: none;
        position: absolute;
        top: 1em;
        right: 1em;
        color: white;
        z-index: 11;
        width: 1em;
        height: 1em;
    }
    
    &__logo {
        position: absolute;
        top: -2em;
        right: -2em;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        background-size: cover;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
        background-position: center;
    }
    
    .active &__logo {
        position: relative;
        top: initial;
        right: initial;
        min-width: 7em;
        min-height: 7em;
    }
    &__experience-link {
        height: 2px;
        width: 8em;
        position: absolute;
        top: 50%;
        background-color: white;
        z-index: 9;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
    }
    &__experience:nth-child(even) > &__experience-link {
        left: 100%;
    }
    &__experience:nth-child(odd) > &__experience-link {
        left: -100%;
    }
    &__experience-title {
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    &__experience-company {
        font-size: 1.3em;
        font-weight: bold;
        color:#31771b;
    }
    
    .active > &__experience-title {
        font-size: 3em;
        text-shadow: 2px 2px 0px transparent, 3px 3px 0px #31771b;
    }
    
    &__experience-dates {
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }
    
    &__experience-dates--small {
        font-size: 0.5em;
        font-family: 'Poppins', sans-serif;
    }
    
    &__experience-content {
        text-align: justify;
        padding: 1em 3em;
    }
    
    &__experience-techs {
        padding: 1.5em;
        & > ol {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
    }
}

@media only screen and (max-width: 992px) { 
    .work {
        max-width: 100%;
        margin: initial;
    }
    .work__experience:nth-child(even) {
        left: calc(50% - 11em);
    }
    .work__experience:nth-child(odd) {
        left: calc(50% + 3em);
        & > .work__experience-link {
            left: -3em;
        }
    }
    .work__experience-link {
        width: 3em;
    }
}
</style>