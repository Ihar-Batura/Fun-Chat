import { IFindElementInDOM } from '../../types/types'

function findElementInDOM({
    className,
    id,
}: IFindElementInDOM): HTMLElement | undefined {
    if (className) {
        const element: HTMLElement | null = document.querySelector(
            `.${className}`
        )
        if (element) {
            return element
        }
    }

    if (id) {
        const element: HTMLElement | null = document.getElementById(`${id}`)
        if (element) {
            return element
        }
    }
}

export default findElementInDOM
