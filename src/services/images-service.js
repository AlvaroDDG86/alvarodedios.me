import words from '../../public/assets/images/projects/your-words.png'
import rate from '../../public/assets/images/projects/light-rate.png'
import player from '../../public/assets/images/projects/player.png'
import voices from '../../public/assets/images/projects/voices.png'
import pinia from '../../public/assets/images/projects/pinia.png'
import alg from '../../public/assets/images/projects/alg.png'
import football from '../../public/assets/images/projects/football.png'
import alvaro from '../../public/assets/images/projects/alvaro.png'
import color from '../../public/assets/images/projects/color.png'
import hero from '../../public/assets/images/projects/hero.png'
import calc from '../../public/assets/images/projects/calc.png'
import fifty from '../../public/assets/images/projects/fifty.png'
import rick from '../../public/assets/images/projects/rick.png'
import users from '../../public/assets/images/projects/users.png'
import ip from '../../public/assets/images/projects/ip.png'
import notFound from '../../public/assets/images/projects/not-found.png'
export function getImage(imageName) {
    const images = {
        words,
        rate,
        player,
        voices,
        pinia,
        alg,
        football,
        alvaro,
        color,
        hero,
        calc,
        fifty,
        rick,
        users,
        ip,
        notFound
    }
    return images[imageName] ? images[imageName] : images.notFound
    // force push
}