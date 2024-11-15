import './styles/index.scss';

const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

///
let accumulatedMd = '';

function renderMarkdown(chunk: string) {
  accumulatedMd += chunk;

  previewDiv.innerHTML = accumulatedMd;
}

const rawMarkdown: HTMLTextAreaElement = document.querySelector(
  '.main-editor-textarea'
)!;

rawMarkdown.addEventListener('input', () => {
  renderMarkdown(rawMarkdown.value.slice(-1));
});
///

/* Do not modify the code below */

const markdownString = `# Hello World

Let's start with simple
things.  
Some code: \`console.log('Hello World')\`

### Getting harder

Some more code:
\`\`\`js
const foobar = 42

const barfoo = 24
\`\`\`
`;

async function start() {
  for (let i = 0; i < markdownString.length; ) {
    const chunkSize = Math.floor(Math.random() * 5) + 1;
    const chunk = markdownString.slice(i, i + chunkSize);
    rawMarkdown.textContent += chunk;
    renderMarkdown(chunk);
    i += chunkSize;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

(window as unknown as { start: () => void }).start = start;
