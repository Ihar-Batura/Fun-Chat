import { ICreateButton } from '../../types/types'

function createButton(options: ICreateButton): HTMLElement {
    const {
        tag = 'button',
        classes = [],
        id,
        text,
        disabled,
        onClick,
        parent,
    } = options

    const button = document.createElement(tag)

    if (classes.length > 0) {
        button.classList.add(...classes)
    }
    if (id) {
        button.id = id
    }
    if (text) {
        button.textContent = text
    }
    if (disabled) {
        button.setAttribute('disabled', `${disabled}`)
    }
    if (onClick) {
        button.onclick = onClick
    }
    if (parent != null) {
        parent.append(button)
    }

    return button
}

export default createButton