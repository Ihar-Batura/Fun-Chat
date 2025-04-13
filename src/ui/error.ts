import createElement from '../create/create_element';
import createButton from '../create/create_button';
import clickBtnReturnBack from '../utils/click_btn_return_back';

function createError(): HTMLElement {
  const aboutContainer: HTMLElement = createElement({
    tag: 'div',
    classes: ['error-container'],
  });

  createElement({
    tag: 'h3',
    classes: ['error-container-title-h3'],
    text: 'Error 404 Not Found',
    parent: aboutContainer,
  });

  createElement({
    tag: 'p',
    classes: ['error-container-description'],
    text: 'Please enter the correct page address.',
    parent: aboutContainer,
  });

  createButton({
    classes: ['btn', 'error-container-btn-return'],
    text: 'Return Back',
    onClick: () => clickBtnReturnBack(),
    parent: aboutContainer,
  });

  return aboutContainer;
}

export default createError;
