export interface ICreateElement {
    tag: string
    classes?: string[]
    id?: string
    text?: string
    parent?: HTMLElement
}

export interface ICreateButton extends ICreateElement {
    disabled?: boolean
    onClick?: () => void
}

export interface ICreateInput {
    type: string
    classes?: string[]
    id?: string
    title?: string
    required?: string
    placeholder?: string
    minLength?: string
    pattern?: string
    addRules?: string
    onInput?: () => void
    parent?: HTMLElement
}
