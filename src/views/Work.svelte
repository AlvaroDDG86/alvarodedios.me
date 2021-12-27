<script lang="ts">
    import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
    const experiences = [
        {
            title: 'FrontEnd Engineer',
            startDate: 'May 2021',
            endDate: 'Present',
            company: 'AtSistemas (Remote)',
            desc: `People and projects management, under Agile, Kanban, Gitflow
                    methodologies, relying on tools such as Jira and Trello for task management, participation in the
                    application architecture, component creation and status management. Unit test using Jest`,
            techs: [
                'Javascript', 'ES6+', 'HTML5', 'CSS3', 'VueJs', 'Jest', 'Git', 'TailwindCSS', 'Jira', 'Agile', '...'
            ],
            logo: 'assets/images/companies/atsistemas.PNG',
            active: false

        },
        {
            title: 'FrontEnd Engineer',
            startDate: 'October 2019',
            endDate: 'May 2021',
            company: 'Minsait (Salamanca/ Remote)',
            desc: `Minsait IOT product (Vue, Vuex, ES6, SASS): FrontEnd Responsible. Vehicle tracking, property
                    management, integration with GIS, development of components that meet the application
                    requirements, introduction of coordinates, multiple selection through drop-down lists, in
                    addition to incident resolution and optimization.<br />
                    Minsait Energy Management Product (Vue, Vuex, ES6, SASS): FrontEnd Responsible. Application
                    which consists of different tables and components, for the purchase / sale of energy, resolution
                    of incidents, creation of new views.<br />
                    Banco Santander Chile Proxy (Angular 8+, Typescript, SASS, Jasmine): User and profile
                    management, attached documentation, developing the components from scratch.<br />
                    Votaciones México (Vue, Vuex, ES6, Jest): FrontEnd team leader, deployment application for
                    voting system in LATAM, in which I was the leader of a 3 members frontend team.<br />
                    Naturgy Project (Angular 6, Typescript): Deployment components to be used as webComponents
                    in an energy sales portal.<br />`,
            techs: [
                'Angular 6+', 'VueJs', 'Bitbucket', 'Swagger'
            ],
            logo: 'assets/images/companies/minsait.PNG',
            active: false

        },
        {
            title: 'FullStack Developer',
            startDate: 'November 2017',
            endDate: 'October 2019',
            company: 'Slclab S.L. (Salamanca)',
            desc: `Development of SPA applications for internal laboratory management using AngularJS, Angular
                and Ionic based on Angular, definition of screens and UX / UI views, composed of components
                using HTML5, CCS3 and typescript, ES6. <br />
                Communication with the backend through HTTP calls (GET, POST, FETCH, DELETE), JSON data
                type, user access control with JWT tokens. <br />
                Use of different libraries such as Angular Material, Bootstrap for layout and form components,
                dropdowns, modals. AgGrid to list content, edit, etc. Angular-charts to display data charts.
                .Net Webapi for CRUD-L actions in the database, the language used by VB.net. <br />
                Version control with Team Foundation Server for the backend and git for the frontend.`,
            techs: [
                'Angular 6+', 'AngularJS', 'Typescript', 'Ionic 2', 'Asp.Net WebApi', 'SqlServer', 'VSCode'
            ],
            logo: 'assets/images/companies/slclab.PNG',
            active: false
        },
        {
            title: 'FullStack Developer',
            startDate: 'October 2016',
            endDate: 'November 2017',
            company: 'Tragsatec (Madrid)',
            desc: `Development of computer applications for public administrations.`,
            techs: [
                '.NET', 'APS.NET MVC', 'VB.net', 'HTML5', 'CSS3', 'JS', 'JQuery', 'Asp.Net WebApi', 'SqlServer', 'Entity Framework'
            ],
            logo: 'assets/images/companies/tragsatec.PNG',
            active: false
        },
        {
            title: 'FullStack Developer',
            startDate: 'March 2016',
            endDate: 'June 2016',
            company: 'Global Exchange (Salamanca)',
            desc: `Web applications development.`,
            techs: [
                '.NET', 'APS.NET MVC', 'C#', 'HTML5', 'CSS3', 'JS', 'AngularJS'
            ],
            logo: 'assets/images/companies/global.PNG',
            active: false
        }
    ]
</script>
<section class="work">
    <h1 class="work__header">Work Exp.</h1>
    <p class="work__present">
        present...
    </p>
    <div class="work__content">
        <div class="work__timeline">
            {#each experiences as experience, i}
                <div class="work__experience {experience.active ? 'active' : ''}" on:click={_ => experience.active = !experience.active} style="top: { `${i * 12}em` }">
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
    </div>
</section>
<style lang="scss">
.work {
    margin: 0 auto;
    max-width: 50%;
    background-color: #333;
    min-height: 100vh;
}

.work__header {
    margin: 0;
    font-size: 3em;
    text-align: center;
}

.work__present {
    text-align: center;
}
.work__content {
    margin-top: 2em;
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
}

.work__timeline {
    width: 2px;
    height: calc(100% - 2em);
    background-color: rgba(255, 255, 255, 0.473);
}

.work__experience {
    height: 4em;
    width: 8em;
    border: solid 2px rgba(0, 0, 0, 0.37);
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    position: absolute;
    left: calc(50% - 4em);
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.6s;
    &.active {
        padding-top: 5em;
        min-height: 100vh;
        width: 100vw;
        overflow-y: scroll;
        position: fixed;
        left: 0;
        top: 0 !important;
        border-radius: 0;
        z-index: 10;
        gap: 1em;
        background-color: rgba(0, 0, 0, 0.849);
        color: white;
    }
}

.active > .work__close {
    display: initial;
}

.work__close {
    display: none;
    position: absolute;
    top: 1em;
    right: 1em;
    color: white;
    z-index: 11;
    width: 1em;
    height: 1em;
}

.work__logo {
    position: absolute;
    top: -2em;
    right: -2em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    border: solid 2px rgba(0, 0, 0, 0.37);
    background-size: cover;
    background-position: center;
    transition: 0.6s;
}

.active .work__logo {
    position: relative;
    top: initial;
    right: initial;
    min-width: 7em;
    min-height: 7em;
}
.work__experience-title {
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
}

.work__experience-company {
    font-size: 1.3em;
    font-weight: bold;
}

.active > .work__experience-title {
    font-size: 3em;
}

.work__experience-dates {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.work__experience-dates--small {
    font-size: 0.5em;
    font-family: 'Poppins', sans-serif;
}

.work__experience-content {
    text-align: justify;
    padding: 1em;
}

.work__experience-techs {
    padding: 1.5em;
    & > ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
}
.work__experience:not(.active):hover {
    transform: scale(1.5) skewY(10deg);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
}
@media only screen and (max-width: 992px) { 
    .work {
        max-width: 100%;
        margin: initial;
    }
    .work__experience:not(.active):hover {
        transform: scale(1) skewY(0);
    }
}
</style>