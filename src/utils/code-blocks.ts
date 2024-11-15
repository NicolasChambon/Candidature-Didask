export function findTripleBackticksIndexes(str: string): Array<number> {
  const regex = /```/g; // g flag to find all occurences and not stop at the first one
  const indexes: Array<number> = [];

  const matches = str.matchAll(regex); // matches contains all the matches found by the regex

  // and match.index is the index of the match
  for (const match of matches) {
    indexes.push(match.index);
  }

  return indexes;
}

export function insertPreBlockTags(
  buffer: string,
  indexes: Array<number>,
  previewDiv: HTMLDivElement
) {
  // Si pas d'indexes, retourner le texte tel quel
  if (!indexes.length) {
    previewDiv.innerHTML = buffer;
    return;
  }

  const openTag = '<pre class="block">';
  const closeTag = '</pre>';

  let result = '';
  let lastIndex = 0;

  // Traiter les paires d'indexes
  for (let i = 0; i < indexes.length; i++) {
    // Ajouter le texte avant le tag
    result += buffer.slice(lastIndex, indexes[i]);

    // Alterner entre openTag et closeTag
    result += i % 2 === 0 ? openTag : closeTag;

    // Mettre à jour l'index
    lastIndex = indexes[i] + 3;
  }

  // Ajouter le reste du texte
  result += buffer.slice(lastIndex);

  // Si nombre impair d'indexes, ajouter le closeTag final
  if (indexes.length % 2 !== 0) {
    result += closeTag;
  }

  previewDiv.innerHTML = result;
}
