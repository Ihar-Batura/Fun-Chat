function clearElement(className: string): void {
  const element: Element | null = document.querySelector(`.${className}`);

  if (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

export default clearElement;
