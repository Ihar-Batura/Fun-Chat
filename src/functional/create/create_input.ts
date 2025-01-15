import { ICreateInput } from '../../types/types'

function createInput(options: ICreateInput): HTMLInputElement {
    const {
        classes = [],
        id,
        type,
        title,
        required,
        placeholder,
        minLength,
        pattern,
        addRules,
        onInput,
        parent,
    } = options

    const input = document.createElement('input')

    input.setAttribute('type', type)
    if (classes.length > 0) {
        input.classList.add(...classes)
    }
    if (id) {
        input.id = id
    }
    if (title) {
        input.setAttribute('title', title)
    }
    if (required) {
        input.setAttribute('required', '')
    }
    if (placeholder) {
        input.setAttribute('placeholder', placeholder)
    }
    if (minLength) {
        input.setAttribute('minlength', minLength)
    }
    if (pattern) {
        input.setAttribute('pattern', pattern)
    }
    if (addRules) {
        input.setAttribute('aria-describedby', addRules)
    }
    if (onInput) {
        input.oninput = onInput
    }
    if (parent != null) {
        parent.append(input)
    }

    return input
}

export default createInput
