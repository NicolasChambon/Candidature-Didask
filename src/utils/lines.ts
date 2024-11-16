export function findDoubleLineBreaksIndexes(str: string): Array<number> {
  const regex = /\n\n/g;
  const indexes: Array<number> = [];

  const matches = str.matchAll(regex);

  for (const match of matches) {
    indexes.push(match.index);
  }

  return indexes;
}

// Si on a un double saut de ligne, on encapsule le texte entre les deux sauts de ligne dans un div

// export function processHeadings(html: string): string {
//   const lines = html.split('\n');

//   return lines.map(line => {
//     if (line.startsWith('# ')) {
//       return <h1>${line.substring(2)}</h1>;
//     }
//     if (line.startsWith('## ')) {
//       return <h2>${line.substring(3)}</h2>;
//     }
//     if (line.startsWith('### ')) {
//       return <h3>${line.substring(4)}</h3>;
//     }
//     return line;
//   }).join('\n');
// }
