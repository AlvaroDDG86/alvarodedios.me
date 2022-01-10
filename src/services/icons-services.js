import FaAlignJustify from 'svelte-icons/fa/FaAlignJustify.svelte'
import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
import FaHackerrank from 'svelte-icons/fa/FaHackerrank.svelte'
import FaCodepen from 'svelte-icons/fa/FaCodepen.svelte'
import FaJsSquare from 'svelte-icons/fa/FaJsSquare.svelte'
import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte'
import FaHtml5 from 'svelte-icons/fa/FaHtml5.svelte'
import FaVuejs from 'svelte-icons/fa/FaVuejs.svelte'
import FaAngular from 'svelte-icons/fa/FaAngular.svelte'
import FaReact from 'svelte-icons/fa/FaReact.svelte'
import FaGitAlt from 'svelte-icons/fa/FaGitAlt.svelte'
import FaSass from 'svelte-icons/fa/FaSass.svelte'
import FaJira from 'svelte-icons/fa/FaJira.svelte'
import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte'
import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte'
import FaFlask from 'svelte-icons/fa/FaFlask.svelte'
import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte'
export function getIcon(iconName) {
    const icons = {
        FaAlignJustify,
        FaTimes,
        FaGithub,
        FaTwitter,
        FaLinkedinIn,
        FaHackerrank,
        FaCodepen,
        FaJsSquare,
        FaCss3Alt,
        FaHtml5,
        FaVuejs,
        FaAngular,
        FaReact,
        FaGitAlt,
        FaSass,
        FaJira,
        FaEnvelope,
        FaMapMarkerAlt,
        FaMailBulk,
        FaFlask,
        FaExternalLinkAlt
    }
    return icons[iconName]
}