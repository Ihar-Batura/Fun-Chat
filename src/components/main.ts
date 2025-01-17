import createElement from '../functional/create/create_element'

function createMain(): HTMLElement {
  const main = createElement({ tag: 'main', classes: ['main'] })
  createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  })

  return main
}

export default createMain
