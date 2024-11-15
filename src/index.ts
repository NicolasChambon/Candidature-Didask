import {
  findTripleBackticksIndexes,
  insertPreBlockTags,
} from './utils/code-blocks';

import {
  findBackticksIndexes,
  insertInlineCodeTags,
} from './utils/inline-code';

import './styles/index.scss';

const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

let buffer = '';

function renderMarkdown(chunk: string) {
  buffer += chunk;

  // Code blocks
  const codeBlocksIndexes = findTripleBackticksIndexes(buffer);
  const codeBlocksHTML = insertPreBlockTags(
    buffer,
    codeBlocksIndexes,
    previewDiv
  );

  // console.log(codeBlocksHTML);

  // Inline code
  const inlineCodeIndexes = findBackticksIndexes(codeBlocksHTML);
  const inlineCodeHTML = insertInlineCodeTags(
    codeBlocksHTML,
    inlineCodeIndexes,
    previewDiv
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
    rawMarkdown.textContent += chunk;
    renderMarkdown(chunk);
    i += chunkSize;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

(window as unknown as { start: () => void }).start = start;
