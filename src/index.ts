import { findBackticksIndexes, insertPreTags } from './utils/code';
import {
  cutArroundPreTags,
  findPreTagsIndexes,
  putDivsAroundNonTaggedElements,
} from './utils/addDivTags';

import './styles/index.scss';

const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

let buffer = '';

function renderMarkdown(chunk: string) {
  buffer += chunk;

  //// Code blocks
  const codeBlocksIndexes = findBackticksIndexes(buffer, 'block');
  const codeBlocksHTML = insertPreTags(
    buffer,
    codeBlocksIndexes,
    previewDiv,
    'block'
  );

  //// Inline code
  const inlineCodeIndexes = findBackticksIndexes(codeBlocksHTML, 'inline');
  const inlineCodeHTML = insertPreTags(
    codeBlocksHTML,
    inlineCodeIndexes,
    previewDiv,
    'inline'
  );

  //// Add divs around non-tagged elements
  const openTagIndexes = findPreTagsIndexes(inlineCodeHTML, 'open');
  const closeTagIndexes = findPreTagsIndexes(inlineCodeHTML, 'close');

  // cut inlineCodeHTML in pieces of "non tagged text" and pre tags
  const cutedHTML = cutArroundPreTags(
    inlineCodeHTML,
    openTagIndexes,
    closeTagIndexes
  );

  // add divs around non-tagged pieces
  const taggedHTML = putDivsAroundNonTaggedElements(
    cutedHTML,
    inlineCodeHTML,
    previewDiv
  );

  ////

  console.log(taggedHTML);
  console.log(document.querySelectorAll('.processing'));
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
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

(window as unknown as { start: () => void }).start = start;
