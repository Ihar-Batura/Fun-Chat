import { ICreateElement } from '../../types/types'

function createElement(options: ICreateElement): HTMLElement {
    const { tag = 'div', classes = [], id, text, parent } = options

    const element = document.createElement(tag)

    if (classes.length > 0) {
        element.classList.add(...classes)
    }
    if (id) {
        element.id = id
    }
    if (text) {
        element.textContent = text
    }
    if (parent != null) {
        parent.append(element)
    }

    return element
}

export default createElement
