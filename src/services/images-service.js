import words from '../../public/assets/images/projects/your-words.png'
import rate from '../../public/assets/images/projects/light-rate.png'
import notFound from '../../public/assets/images/projects/not-found.png'
export function getImage(imageName) {
    const images = {
        words,
        rate,
        notFound
    }
    return images[imageName] ? images[imageName] : images.notFound
}