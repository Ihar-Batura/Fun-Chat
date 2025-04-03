function addClassToElement(className: string, newClass: string): void {
  const element: Element | null = document.querySelector(`.${className}`);

  if (element !== null) {
    element.classList.add(newClass);
  }
}

export default addClassToElement;
