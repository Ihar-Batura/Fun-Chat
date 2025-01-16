import { IAddOrRemoveElementClass } from '../../types/types'

function addOrRemoveElementClass({
  className,
  id,
  changeClassName,
  action,
}: IAddOrRemoveElementClass): void {
  if (className) {
    const element: HTMLElement | null = document.querySelector(`.${className}`)

    if (element && action === 'add') {
      element.classList.add(`${changeClassName}`)
    }
    if (element && action === 'remove') {
      element.classList.remove(`${changeClassName}`)
    }
  }

  if (id) {
    const element: HTMLElement | null = document.getElementById(`${id}`)

    if (element && action === 'add') {
      element.classList.add(`${changeClassName}`)
    }
    if (element && action === 'remove') {
      element.classList.remove(`${changeClassName}`)
    }
  }
}

export default addOrRemoveElementClass
