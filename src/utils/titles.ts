// export function processTitles(html: string): string {
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
