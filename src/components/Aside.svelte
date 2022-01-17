<script lang="ts">
    import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
    import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
    import SocialList from 'src/components/SocialList.svelte'
    interface MenuLink {
        to: string;
        link: string;
    }
    import { link, navigate } from 'svelte-routing';
    const menu: Array<MenuLink> = [
        { to: '/', link: 'Home' },
        { to: 'about', link: 'About' },
        { to: 'work', link: 'Work' },
        { to: 'projects', link: 'Lab' },
        { to: 'contact', link: 'Contact' },
    ]
    let open: Boolean = false
    function navigateNewPage(link) {
        open = false
        navigate(link)
    }
</script>
<span class="{open ? 'aside__mobile aside__mobile--open' : 'aside__mobile'}" on:click="{() => open = true}">
    <FaAlignJustify />
</span>
<aside class="{open ? 'aside aside--open' : 'aside'}">
    <span class="aside__burguer" on:click="{() => open = true}">
        <FaAlignJustify />
    </span>
    <span class="aside__close" on:click="{() => open = false}">
        <FaTimes />
    </span>
    <div class="aside__menu">
        <div class="aside__mobilename animate animate__down" on:click="{() => navigateNewPage('/')}">
            alvarodedios.me
        </div>
        {#each menu as item}
            <div on:click="{() => navigateNewPage(item.to)}" class="aside__link animate animate__rotateY"><span class="aside__link-text">{item.link}</span></div>
        {/each}
        <SocialList />
    </div>
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
    border-left: 2px solid #31771b;
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
        z-index: 3;
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
        position: relative;

        .aside__link {
            font-weight: bold;
            position: relative;
            overflow: hidden;
            padding: 15px 10px;
            width: 100%;
            font-size: 2em;
            color: white;
            text-decoration: none;
            cursor: pointer;
            transition: 0.6s;

            &:hover {
                color: #333;
            }
            
            &::after {
                content: '';
                width: 0;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: white;
                left: 50%;
                transition: 0.6s;
                z-index: 0;
            }
    
            &:hover::after {
                width: 100%;
                left: 0;
            }

            &-text {
               z-index: 1;
               position: relative;
            }
        }
    }

    &__mobilename {
        display: none;
        position: absolute;
        top: 0em;
        left: 0.5em;
        color: white;
        font-size: 2em;
        cursor: pointer;
        text-shadow: 1px 1px 0px transparent, 2px 2px 0px #31771b;
    }
    & > .aside__burguer {
        cursor: pointer;
        padding: 0 3px;
        color: rgb(148, 191, 248);
        opacity: 1;
        transition: 0.6s;
    }

    &.aside--open {
        width: 50vw;
        box-shadow: -9px 11px 7px rgb(0 0 0 / 16%);
        border-left: transparent;
        & > .aside__burguer {
            display: none;
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
        
        &__mobilename {
            display: initial;
        }
    }
}
.aside__mobile {
    display: none;
    height: 1em;
    width: 1em;
    position: fixed;
    top: 3px;
    right: 3px;
    cursor: pointer;
    color: rgb(143, 143, 143);
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