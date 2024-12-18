// Utils
import { findBackticksIndexes, insertPreTags } from './utils/code';
import {
  cutArroundPreTags,
  findPreTagsIndexes,
  putDivsAroundNonTaggedElements,
} from './utils/other';
import {
  findDoubleLineBreaksIndexes,
  putDivsAroundCuttedLines,
  cutArroundDoubleLineBreaks,
} from './utils/lines';
import { addTitle } from './utils/titles';

// Styles
import './styles/index.scss';

// HTML elements
const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

// Variables
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

  //// Cut inlineCodeHTML in pieces of "non tagged text" or pre tags
  const openTagIndexes = findPreTagsIndexes(codeBlocksHTML, 'open');
  const closeTagIndexes = findPreTagsIndexes(codeBlocksHTML, 'close');
  const cutedHTML = cutArroundPreTags(
    codeBlocksHTML,
    openTagIndexes,
    closeTagIndexes
  );

  //// Add divs around non-tagged pieces
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
    putDivsAroundCuttedLines(cuttedLines, div);
  }

  //// Titles
  // We select all divs inside the divs with class "processing"
  const divs: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.processing div');
  addTitle(divs);
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

async function start() {
  const rawMarkdown: HTMLDivElement =
    document.querySelector('.main-editor-div')!;

  for (let i = 0; i < markdownString.length; ) {
    const chunkSize = Math.floor(Math.random() * 5) + 1;
    const chunk = markdownString.slice(i, i + chunkSize);
    rawMarkdown.textContent += chunk;
    renderMarkdown(chunk);
    i += chunkSize;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(window as unknown as { start: () => void }).start = start;
