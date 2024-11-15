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
