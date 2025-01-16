import createElement from '../functional/create/create_element'
import createButton from '../functional/create/create_button'

function createHeaderBtns(): HTMLElement {
    const btnsContainer = createElement({
        tag: 'div',
        classes: ['header-btns__container'],
    })
    createButton({
        classes: ['btn', 'header-btn', 'btn-about'],
        text: 'About',
        parent: btnsContainer,
    })
    createButton({
        classes: ['btn', 'header-btn', 'btn-login'],
        text: 'Login',
        parent: btnsContainer,
    })

    return btnsContainer
}

export default createHeaderBtns
