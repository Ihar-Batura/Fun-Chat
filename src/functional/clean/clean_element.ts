import { ICleanElement } from '../../types/types'

function cleanElement({ className, id }: ICleanElement): void {
    if (className) {
        const element: HTMLElement | null = document.querySelector(
            `.${className}`
        )
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        }
    }

    if (id) {
        const element: HTMLElement | null = document.getElementById(`${id}`)
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        }
    }
}

export default cleanElement
