import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnReturnBack from '../utils/click_btn_return_back';
import addTextToAbout from './about_text';

function createAbout(): HTMLElement {
  const aboutContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['about-container'],
  });

  createElement({
    tag: 'h2',
    classes: ['about-container-title'],
    text: 'Welcome',
    parent: aboutContainer,
  });
  createElement({
    tag: 'h3',
    classes: ['about-container-title', 'about-container-title-h3'],
    text: 'My dear friend',
    parent: aboutContainer,
  });

  addTextToAbout(aboutContainer);

  createButton({
    classes: ['btn', 'about-container-btn-return'],
    text: 'Return Back',
    onClick: () => clickBtnReturnBack(),
    parent: aboutContainer,
  });

  return aboutContainer;
}

export default createAbout;
