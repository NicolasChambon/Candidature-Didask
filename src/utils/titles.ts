export function addTitle(divs: NodeListOf<HTMLDivElement>): void {
  for (const div of divs) {
    if (div.textContent?.startsWith('# ')) {
      div.innerHTML = `<h1>${div.textContent.substring(2)}</h1>`;
    }
    if (div.textContent?.startsWith('## ')) {
      div.innerHTML = `<h2>${div.textContent.substring(3)}</h2>`;
    }
    if (div.textContent?.startsWith('### ')) {
      div.innerHTML = `<h3>${div.textContent.substring(4)}</h3>`;
    }
  }
}
