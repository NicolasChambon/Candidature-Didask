import {
  findTripleBackticksIndexes,
  insertPreBlockTags,
} from './utils/code-blocks';

import './styles/index.scss';

const previewDiv: HTMLDivElement = document.querySelector(
  '.main-preview-result'
)!;

let buffer = '';

function renderMarkdown(chunk: string) {
  buffer += chunk;

  // console.log(buffer);

  // Code blocks
  const indexes = findTripleBackticksIndexes(buffer);

  console.log(indexes);

  insertPreBlockTags(buffer, indexes, previewDiv);

  // if (indexes.length === 1) {
  //   const firstPart = buffer.slice(0, indexes[0]);
  //   const secondPart = buffer.slice(indexes[0] + 3);

  //   const html = firstPart + openTag + secondPart + closeTag;

  //   previewDiv.innerHTML = html;
  // }
  // if (indexes.length === 2) {
  //   const firstPart = buffer.slice(0, indexes[0]);
  //   const secondPart = buffer.slice(indexes[0] + 3, indexes[1]);
  //   const thirdPart = buffer.slice(indexes[1] + 3);

  //   const html = firstPart + openTag + secondPart + closeTag + thirdPart;

  //   previewDiv.innerHTML = html;
  // }
  // if (indexes.length === 3) {
  //   const firstPart = buffer.slice(0, indexes[0]);
  //   const secondPart = buffer.slice(indexes[0] + 3, indexes[1]);
  //   const thirdPart = buffer.slice(indexes[1] + 3, indexes[2]);
  //   const fourthPart = buffer.slice(indexes[2] + 3);

  //   const html =
  //     firstPart +
  //     openTag +
  //     secondPart +
  //     closeTag +
  //     thirdPart +
  //     openTag +
  //     fourthPart +
  //     closeTag;

  //   previewDiv.innerHTML = html;
  // }
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
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

(window as unknown as { start: () => void }).start = start;
