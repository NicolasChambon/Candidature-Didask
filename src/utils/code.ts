export function findBackticksIndexes(
  str: string,
  type: 'block' | 'inline'
): Array<number> {
  const regex = type === 'block' ? /```/g : /`/g; // "g" flag to find all occurences and not stop at the first one
  const indexes: Array<number> = [];

  const matches = str.matchAll(regex); // "matches" contains all the matches found by the regex...

  // ...and match.index is the index of the match
  for (const match of matches) {
    indexes.push(match.index);
  }

  return indexes;
}

export function insertPreTags(
  buffer: string,
  indexes: Array<number>,
  previewDiv: HTMLDivElement,
  type: 'block' | 'inline'
) {
  // if no indexes, return the original text
  if (!indexes.length) {
    previewDiv.innerHTML = buffer;
    return buffer;
  }

  const openTag =
    type === 'block' ? '<pre class="block">' : '<pre class="inline">';
  const closeTag = '</pre>';

  let result = '';
  let lastIndex = 0;

  // Work on pairs of indexes
  for (let i = 0; i < indexes.length; i++) {
    // Ajouter le texte avant le tag
    result += buffer.slice(lastIndex, indexes[i]);

    // Alterner entre openTag et closeTag
    result += i % 2 === 0 ? openTag : closeTag;

    // Mettre à jour l'index
    const offset = type === 'block' ? 5 : 1;
    lastIndex = indexes[i] + offset;
  }

  // Add the rest of the text
  result += buffer.slice(lastIndex);

  // If number of indexes is odd, add the final closeTag
  if (indexes.length % 2 !== 0) {
    result += closeTag;
  }

  previewDiv.innerHTML = result;

  return result;
}
