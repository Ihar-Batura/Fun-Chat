function addRoutePath(url: string): void {
  window.location.hash = `${url}`;
}

export default addRoutePath;
