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
