<script lang="ts">
    import SocialList from 'src/components/SocialList.svelte'
    import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
</script>

<section class="contact">
    <h1 class="contact__header">
        Contact
    </h1>
    <div class="contact__content">
        <SocialList />
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
        <div class="contact__twitter">
            <a class="twitter-timeline" data-lang="en" data-theme="dark" href="https://twitter.com/AlvaroDDG86?ref_src=twsrc%5Etfw">Tweets by AlvaroDDG86</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
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
        font-family: 'Pushster', cursive;
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
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
        padding: 0 1em;
        box-sizing: border-box;
        min-height: 100%;
        max-height: 100vh;
        overflow-y: scroll;
    }
}
@media only screen and (max-width: 992px) { 
    .contact {
        max-width: 100%;
    }
}
</style>