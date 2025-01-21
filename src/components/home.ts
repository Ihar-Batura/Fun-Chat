import createElement from '../functional/create/create_element'
import createUserListContainer from './user_list_container'
import createDialogueContainer from './dialogue_container'

function createHomePage(): HTMLElement {
  const homePageContainer = createElement({
    tag: 'div',
    classes: ['home-page__container'],
  })

  createElement({
    tag: 'h4',
    classes: ['home-page__user-name'],
    text: 'User name: Ihar',
    parent: homePageContainer,
  })

  const chatContainer = createElement({
    tag: 'div',
    classes: ['home-page__chat-container'],
    parent: homePageContainer,
  })

  const userListContainer = createUserListContainer()
  const dialogueContainer = createDialogueContainer()
  chatContainer.append(userListContainer, dialogueContainer)

  return homePageContainer
}

export default createHomePage
