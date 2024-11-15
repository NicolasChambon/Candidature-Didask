# Exercice stagiaires

Pour cet exercice, tu dois réaliser un parseur de markdown fonctionnant en streaming.

Ce parseur doit être capable de parser des bouts de texte au fur et à mesure et afficher le rendu markdown dans une page HTML.

Pour simplifier la tâche, seuls les éléments markdown suivant doivent être gérés:

- ligne de texte
- titres h1, h2 et h3
- bloc de code inline
- bloc de code multi-lignes

Concrètement, on te demande de coder en Typescript une fonction `renderMarkdown(chunk: string)` qui va manipuler le DOM pour afficher le texte markdown partiel sur une page HTML.

Tu peux coder d’autres fonctions, avoir des variables d’état globale, bref tout ce que tu veux tant que la fonction `renderMarkdown` est présente.

- Code de l’exercice

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello World</title>
    </head>
    <body>
      <button onclick="start()">Start</button>

      <br />
      <br />

      <div>Raw Markdown:</div>
      <div>
        <pre id="markdown"></pre>
      </div>

      <br />
      <br />

      <div>Rendered Markdown:</div>
      <div id="markdown-output"></div>

      <script>
        function renderMarkdown(chunk) {
          // Your code here
        }

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
          const rawMarkdown = document.getElementById('markdown');

          for (let i = 0; i < markdownString.length; ) {
            const chunkSize = Math.floor(Math.random() * 5) + 1;
            const chunk = markdownString.slice(i, i + chunkSize);
            rawMarkdown.textContent += chunk;
            renderMarkdown(chunk);
            i += chunkSize;
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      </script>
    </body>
  </html>
  ```

Les règles de rendu sont les suivantes:

**Ligne de texte**

```markdown
Ceci est une ligne de texte avec un espace à la fin.
On ne saute donc pas de ligne.

Ceci est une ligne de texte avec deux espaces à la fin.  
On saute donc une ligne.
```

```html
<div>
  Ceci est une ligne de texte avec un seul espace à la fin. On ne saute donc pas
  de ligne.
</div>
<div>Ceci est une ligne de texte avec deux espaces à la fin.</div>
<div>On saute donc une ligne</div>
```

**Titre h1, h2 et h3**

```markdown
# Titre 1

Du texte

## Titre 2

### Titre 3
```

```html
<h1>Titre 1</h1>
<div>Du texte</div>
<h2>Titre 2</h2>
<h3>Titre 3</h3>
```

Le parseur doit être optimistique pour les titres, c’est à dire qu’il doit commencer à afficher le contenu du titre même si il ne l’a pas reçu en entier.

Par exemple, si le parseur reçoit le chunk suivant `# Titr` alors il doit rendre le HTML suivant `<h1>Titr</h1>`

**Bloc de code inline**

```markdown
Ceci est du code: `const foobar = 42`
```

```html
<div>
  Ceci est du code:
  <pre>const foobar = 42</pre>
</div>
```

Le parseur doit être optimistique pour les blocs de code inline, c’est à dire qu’il doit commencer à afficher le contenu du bloc de code même si il ne l’a pas reçu en entier.

Par exemple, si le parseur reçoit le chunk suivant: `Ceci est du code: `con`alors il doit rendre le HTML suivant`<div>Ceci est du code: <pre>con</pre></div>`

**Bloc de code multi-lignes**

```markdown
Ceci est du code sur plusieurs lignes:
```

const foobar = 42

const barfoo = 24

```

```

```html
<div>Ceci est du code sur plusieurs lignes:</div>
<pre>
const foobar = 42

const barfoo = 24
</pre>
```

Le parseur doit être optimistique pour les blocs de code multi-lignes.

**BONUS**: Es-tu assez attentif pour trouver l’erreur qui s’est glissée dans l’énoncé ?
