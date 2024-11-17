export function findDoubleLineBreaksIndexes(str: string): Array<number> {
  const regex = /\n\n/g;
  const indexes: Array<number> = [];

  const matches = str.matchAll(regex);

  for (const match of matches) {
    indexes.push(match.index);
  }

  return indexes;
}

export function cutArroundDoubleLineBreaks(
  str: string,
  indexes: Array<number>
): Array<string> {
  const result: Array<string> = [];

  let lastIndex = 0;

  for (let i = 0; i < indexes.length; i++) {
    result.push(str.slice(lastIndex, indexes[i]));
    lastIndex = indexes[i] + 2;
  }

  result.push(str.slice(lastIndex));

  return result;
}

export function putDivsAroundCuttedLines(
  elements: Array<string>,
  previewDiv: HTMLDivElement
): string {
  const taggedArray: Array<string> = [];

  for (const element of elements) {
    taggedArray.push(`<div>${element}</div>`);
  }

  const result = taggedArray.join('');
  previewDiv.innerHTML = result;

  return result;
}
