import { IChangeDisableButton } from '../../types/types'

function changeDisableElement({
    className,
    id,
    action,
}: IChangeDisableButton): void {
    if (className) {
        const element: HTMLElement | null = document.querySelector(
            `.${className}`
        )
        if (element) {
            if (action) {
                element.setAttribute('disabled', `${action}`)
            } else {
                element.removeAttribute('disabled')
            }
        }
    }

    if (id) {
        const element: HTMLElement | null = document.getElementById(`${id}`)
        if (element) {
            if (action) {
                element.setAttribute('disabled', `${action}`)
            } else {
                element.removeAttribute('disabled')
            }
        }
    }
}

export default changeDisableElement
