export function findPreTagsIndexes(
  str: string,
  type: 'open' | 'close'
): Array<number> {
  const regex = type === 'open' ? /<pre/g : /<\/pre/g;
  const indexes: Array<number> = [];

  const matches = str.matchAll(regex);

  for (const match of matches) {
    indexes.push(match.index);
  }

  return indexes;
}

// return a array with pieces of "non tagged text" and pre tags
export function cutArroundPreTags(
  str: string,
  preOpenIndexes: Array<number>,
  preCloseIndexes: Array<number>
): Array<string> {
  const result: Array<string> = [];

  let lastIndex = 0;

  for (let i = 0; i < preOpenIndexes.length; i++) {
    result.push(str.slice(lastIndex, preOpenIndexes[i]));
    result.push(str.slice(preOpenIndexes[i], preCloseIndexes[i] + 6));
    lastIndex = preCloseIndexes[i] + 6;
  }

  result.push(str.slice(lastIndex));

  return result;
}

export function putDivsAroundNonTaggedElements(
  elements: Array<string>,
  buffer: string,
  previewDiv: HTMLDivElement
): string {
  const taggedArray: Array<string> = [];

  for (const element of elements) {
    if (element.startsWith('<')) {
      taggedArray.push(element);
    } else {
      taggedArray.push(`<span class="processing">${element}</span>`);
    }
  }

  const result = taggedArray.join('');

  previewDiv.innerHTML = result;

  return result;
}
