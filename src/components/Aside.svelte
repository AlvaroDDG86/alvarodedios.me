<script lang="ts">
    import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
    import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
	import { Link } from "svelte-routing";
    const menu = [
        { to: '/', link: 'Home' },
        { to: 'about', link: 'About' },
        { to: 'work', link: 'Work' },
        { to: 'projects', link: 'Projects' },
        { to: 'contact', link: 'Contact' },
    ]
    let open: Boolean = false
</script>
<span class="{open ? 'aside__mobile aside__mobile--open' : 'aside__mobile'}"on:click="{() => open = true}">
    <FaAlignJustify />
</span>
<aside class="{open ? 'aside aside--open' : 'aside'}">
    <span class="aside__burguer" on:click="{() => open = true}">
        <FaAlignJustify />
    </span>
    <span class="aside__close" on:click="{() => open = false}">
        <FaTimes />
    </span>
    <ul class="aside__menu">
        {#each menu as item}
            <li on:click="{() => open = false}" class="aside__link"><Link to={item.to}>{item.link}</Link></li>
        {/each}
    </ul>
</aside>
<style lang="scss">
.aside {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 2em;
    background-color: rgba(51, 51, 51, 0.95);
    transition: 0.5s;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-left: 2px solid white;
    z-index: 10;

   

    .aside__close {
        display: none;
        width: 1em;
        height: 1em;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    
    .aside__menu {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        display: none;
        transition: 1s;
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;

        .aside__link {
            font-weight: bold;
            position: relative;
            overflow: hidden;
            padding: 5px 10px;
            width: 100%;
            
            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: white;
                left: 100%;
                transition: 0.6s;
                z-index: 1;
            }
    
            &:hover::after {
                left: 0;
            }

            &:hover > :global(a) {
                color: #333;
            }

            & > :global(a) {
                position: relative;
                text-decoration: none;
                text-transform: uppercase;
                z-index: 2;
                color: white;
                width: 100%;
            }
        }
    }
    & > .aside__burguer {
        cursor: pointer;
        padding: 0 3px;
        color: white;
        opacity: 1;
        transition: 0.6s;
    }

    &.aside--open {
        width: 50vw;
        box-shadow: -9px 11px 7px rgb(0 0 0 / 16%);
        border-left: transparent;
        & > .aside__burguer {
            transform: scale(4);
            position: absolute;
            top: 50%;
            opacity: 0;
        }
        & .aside__menu {
            display: flex;
        }
        .aside__close {
            display: initial;
        }
        
    }

    @media only screen and (max-width: 992px) {
        & {
            right: -2em;
            border: transparent
        }
        &.aside--open {
            right: 0;
            width: 100vw;
            .aside__close {
                right: 10px !important;
                left: initial;
            }
        }
    }
}
.aside__mobile {
    display: none;
    height: 1em;
    width: 1em;
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
    color: white;
    width: 2em;
    height: 2em;
    z-index: 10;
    transition: 0.6s;
    @media only screen and (max-width: 992px) {
        & {
            display: initial;
        }
    }
    &--open {
        right: -2em;
    }
}
</style>