import { findBackticksIndexes, insertPreTags } from './utils/code';
import {
  cutArroundPreTags,
  findPreTagsIndexes,
  putDivsAroundNonTaggedElements,
} from './utils/addDivTags';
import { findDoubleLineBreaksIndexes } from './utils/lines';

import './styles/index.scss';
import { cutArroundDoubleLineBreaks } from './utils/lines';

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

  //// Add divs around non-tagged elements
  const openTagIndexes = findPreTagsIndexes(codeBlocksHTML, 'open');
  const closeTagIndexes = findPreTagsIndexes(codeBlocksHTML, 'close');
  // cut inlineCodeHTML in pieces of "non tagged text" and pre tags
  const cutedHTML = cutArroundPreTags(
    codeBlocksHTML,
    openTagIndexes,
    closeTagIndexes
  );
  // add divs around non-tagged pieces
  const taggedHTML = putDivsAroundNonTaggedElements(cutedHTML, previewDiv);

  //// Inline code
  const inlineCodeIndexes = findBackticksIndexes(taggedHTML, 'inline');
  insertPreTags(taggedHTML, inlineCodeIndexes, previewDiv, 'inline');

  //// Lines
  const nonTreatedDivs: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.processing');

  for (const div of nonTreatedDivs) {
    const doubleLineBreaksIndexes = findDoubleLineBreaksIndexes(div.innerHTML);
    const cuttedLines = cutArroundDoubleLineBreaks(
      div.innerHTML,
      doubleLineBreaksIndexes
    );
    putDivsAroundNonTaggedElements(cuttedLines, div);
  }
}

//////////////////////////////////
//////////////////////////////////
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

// salut

// \`\`\`js
// const foobar = 42
// \`\`\`

// dqkdfhkseqhfkls
// Some more code:
// \`\`\`js
// const foobar = 42
// `;

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
