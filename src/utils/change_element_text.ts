function changeElementText(className: string, newText: string): void {
  const element: Element | null = document.querySelector(`.${className}`);

  if (element !== null) {
    element.textContent = newText;
  }
}

export default changeElementText;
