<script lang="ts">
    import me from '../../public/assets/images/me.png'
    import { scale } from 'svelte/transition';
    import SocialList from 'src/components/SocialList.svelte'
    import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
    import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte'
    import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte'
    function downloadCV() {
        window.open('https://drive.google.com/file/d/1Cyg5SyVXk-W_aS48Lf0ZfgTtYMfqXBMz/view?usp=sharing', '_blank');
    }
</script>

<section class="contact">
    <h1 class="contact__header animate animate__down">
        Contact
    </h1>
    <div class="contact__content">
        <SocialList />
        <img transition:scale class="contact__picture" src={me} alt="my picture" />
        <div class="contact__list">
            <div class="contact__item" transition:scale>
                <div class="contact__icon">
                    <FaMapMarkerAlt />
                </div>
                <span>Spain</span>
            </div>
            <div class="contact__item" transition:scale>
                <div class="contact__icon">
                    <FaMailBulk />
                </div>
                <span>alvarodediosgarcia1986@gmail.com</span>
            </div>
        </div>
        <div class="contact__twitter">
            <button class="contact__form-button" on:click={_ => downloadCV()}><div><FaEnvelope /></div>Resume</button>
        </div>
        <form
            class="contact__form"
            action="https://formspree.io/f/xlezdprl"
            method="POST"
            >
            <div class="contact__form-control">
                <label for="email">Email:</label>
                <input type="email" name="_replyto" id="email" placeholder="Email" required>
            </div>
            <div class="contact__form-control">
                <label for="message">Message:</label>
                <textarea name="message" id="message" rows="4" placeholder="Type here..." required/>
            </div>
            <button class="contact__form-button" type="submit"><div><FaEnvelope /></div>Send</button>
        </form>
        <a href="https://app.daily.dev/AlvaroDDG86" target="_blank">
            <img src="https://api.daily.dev/devcards/35906fed01054a54a0400c279d362593.png?r=p4l" width="200" alt="Alvaro de Dios's Dev Card"/>
        </a>
    </div>
</section>
<style lang="scss">
.contact {
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
        text-shadow: 2px 2px 0px transparent, 4px 4px 0px chartreuse;
    }

    &__picture {
        max-width: 30%;
        filter: grayscale(10);
        transition: 0.6s;
        &:hover {
            filter: grayscale(0);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    &__list {
        width: 100%;
        margin: 1em 0;
    }
    &__item {
        padding: 1em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    &__icon {
        width: 2em;
        height: 2em;
        margin: 0 2em;
        color: chartreuse;
    }

    &__form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
        width: 80%;
        box-sizing: border-box;
        background: #333;
        border-radius: 1em;
        margin: 1em;
        & label {
            color: chartreuse;
            font-size: 0.6em;
            font-weight: bold;
            text-transform: uppercase;
            padding: .4em;
        }

        & input, & textarea {
            border: none;
            font-size: 1.2em;
            padding: 0.2em;
            border-radius: 5px;
            box-sizing: border-box;
            background-color: rgb(218, 218, 218);
            
            &:focus {
                outline: none !important;
                background-color: white;
                box-shadow: 0px 0px 8px chartreuse;
            }
        }
    }

    &__form-control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        margin: 1em;
        width: 80%;
    }
    
    &__form-button {
        padding: 0.5em 1em;
        outline: none;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        background-color: chartreuse;
        color: #333;
        border: none;
        transition: 0.6s;
        border-radius: 5px;
        text-transform: uppercase;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &:hover {
            color: chartreuse;
            background-color: #333;
            border-radius: 15px;
            box-shadow: 0px 0px 8px chartreuse;
        }

        & div {
            width: 1em;
            height: 1em;
            margin: 0 0.5em;
        }
    }

    &__twitter {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
@media only screen and (max-width: 992px) { 
    .contact {
        max-width: 100%;
        &__picture {
            max-width: 60%;
        }
    }

}
</style>