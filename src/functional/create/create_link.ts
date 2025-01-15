import { ICreateLink } from '../../types/types'

function createLink(options: ICreateLink): HTMLAnchorElement {
    const { classes = [], id, text, href, target, parent } = options

    const link = document.createElement('a')

    link.href = href
    if (classes.length > 0) {
        link.classList.add(...classes)
    }
    if (id) {
        link.id = id
    }
    if (text) {
        link.textContent = text
    }
    if (target) {
        link.setAttribute('target', target)
    }
    if (parent != null) {
        parent.append(link)
    }

    return link
}

export default createLink
