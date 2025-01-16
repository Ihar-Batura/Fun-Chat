import createElement from '../functional/create/create_element'
import createLogo from './logo'
import createHeaderBtns from './header_btns'

function createHeader(): HTMLElement {
  const header = createElement({ tag: 'header', classes: ['header'] })
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper', 'header-wrapper'],
    parent: header,
  })
  const logo = createLogo()
  const btns = createHeaderBtns()

  wrapper.append(logo, btns)

  return header
}

export default createHeader
