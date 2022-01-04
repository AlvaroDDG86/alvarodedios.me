<script lang="ts">
    import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
    import { IExperience } from 'src/models/IExperience';
    const experiences: IExperience[] = [
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
        PRESENT...
    </p>
    <div class="work__content">
        <span class="work__timeline">
        </span>
        {#each experiences as experience, i}
            <div class="work__experience {experience.active ? 'active' : ''}" on:click={_ => experience.active = !experience.active} style="top: { `${i * 12}em` }">
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
}

.work__header {
    margin: 0;
    font-size: 3em;
    text-align: center;
    font-family: 'Pushster', cursive;
}

.work__present {
    text-align: center;
}
.work__content {
    margin: 3em 0em;
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
}

.work__timeline {
    width: 2px;
    height: calc(100% - 2em);
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
}

.work__experience {
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
        & > .work__experience-link {
            display: none;
        }
    }
}
.work__experience:nth-child(even) {
    left: calc(50% - 16em);
}
.work__experience:nth-child(odd) {
    left: calc(50% + 8em);
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
    background-size: cover;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
    background-position: center;
}

.active .work__logo {
    position: relative;
    top: initial;
    right: initial;
    min-width: 7em;
    min-height: 7em;
}
.work__experience-link {
    height: 2px;
    width: 8em;
    position: absolute;
    top: 50%;
    background-color: white;
    z-index: 9;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
}
.work__experience:nth-child(even) > .work__experience-link {
    left: 100%;
}
.work__experience:nth-child(odd) > .work__experience-link {
    left: -100%;
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
    color: gold;
    text-shadow: 2px 2px 0px transparent, 3px 3px 0px rgb(197, 197, 197);
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
    padding: 1em 3em;
}

.work__experience-techs {
    padding: 1.5em;
    & > ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
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