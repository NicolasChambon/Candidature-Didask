import { findBackticksIndexes, insertPreTags } from './utils/code';

import './styles/index.scss';

const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

let buffer = '';

function renderMarkdown(chunk: string) {
  buffer += chunk;

  // Code blocks
  const codeBlocksIndexes = findBackticksIndexes(buffer, 'block');
  const codeBlocksHTML = insertPreTags(
    buffer,
    codeBlocksIndexes,
    previewDiv,
    'block'
  );

  // Inline code
  const inlineCodeIndexes = findBackticksIndexes(codeBlocksHTML, 'inline');
  const inlineCodeHTML = insertPreTags(
    codeBlocksHTML,
    inlineCodeIndexes,
    previewDiv,
    'inline'
  );

  console.log(inlineCodeHTML);
}

//////////////////////////////////
//////////////////////////////////
/* Do not modify the code below */

// const markdownString = `# Hello World

// Let's start with simple
// things.
// Some code: \`console.log('Hello World')\`

// ### Getting harder

// Some more code:
// \`\`\`js
// const foobar = 42

// const barfoo = 24
// \`\`\`
// `;

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

salut

\`\`\`js
const foobar = 42
\`\`\`

dqkdfhkseqhfkls
Some more code:
\`\`\`js
const foobar = 42
`;

async function start() {
  for (let i = 0; i < markdownString.length; ) {
    const rawMarkdown: HTMLDivElement =
      document.querySelector('.main-editor-div')!;
    const chunkSize = Math.floor(Math.random() * 5) + 1;
    const chunk = markdownString.slice(i, i + chunkSize);
    rawMarkdown.innerText += chunk;
    renderMarkdown(chunk);
    i += chunkSize;
    await new Promise((resolve) => setTimeout(resolve, 63));
  }
}

(window as unknown as { start: () => void }).start = start;
