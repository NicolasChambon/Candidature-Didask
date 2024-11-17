# Exercice stagiaires

Mon rendu de l'exercice est consultable sur le [repository GitHub suivant](https://github.com/NicolasChambon/Candidature-Didask).

Vous pourrez directement trouver la fonction `renderMarkdown` [ici](https://github.com/NicolasChambon/Candidature-Didask/blob/main/src/index.ts) ainsi que les fonctions annexes dans le dossier [utils](https://github.com/NicolasChambon/Candidature-Didask/tree/main/src/utils).

Je vous conseille aussi de consulter le rendu de mon travail directement sur ce [lien](https://nc-streaming-markdown-parser.vercel.app/), ou bien à cette adresse https://nc-streaming-markdown-parser.vercel.app/.

Au sujet de l'erreur glissée dans l'énoncé j'ai noté le point suivant :

- la balise `<pre>` par defaut va provoquer un retour à la ligne car elle est de type `display = bloc`. Le code cible fournit dans l'énoncé pour le bloc de code inline `<div>Ceci est du code: <pre>const foobar = 42</pre></div>` ne rend du coup pas le résultat attendu. On peu gérer cela soit en remplaçant les balises `<pre>`par des `<span>` soit en ajoutant une classe et du style pour passer la propriété "display" en "inline" (solution pour laquelle j'ai opté).

# Questions stagiaires

Voici 4 questions qui nous aideront à mieux cerner ta manière de penser et tes motivations :

### 1. Qu'est-ce qui te plaît dans la programmation ?

> J'ai un vrai penchant pour l'algorithmie. Je trouve cela très ludique, bien que parfois cela crée quelques nœuds au cerveau (comme ça a été le cas lors de la résolution de cet exercice).

> D'autre part, je trouve cette activité très satisfaisante dans le sens où l'on obtient rapidement et régulièrement des résultats très concrets de nos actions. Par exemple, lorsqu'on met en place une fonctionnalité, on est très vite récompensé par ses efforts. Dans ma précédente carrière, j'ai souvent recherché cela sans forcément l'obtenir, car je travaillais sur des projets à très long terme où le fruit concret de mon travail arrivait trop souvent à retardement (quelques mois, voire années plus tard).

> Enfin, la programmation laisse entrevoir des possibilités qui semblent infinies. Il est difficile de définir les limites de cet univers qui est toujours en perpétuelle progression. Quand je m'y projette, j'ai du mal à imaginer vire une routine plus tard (ce que je souhaiterais éviter).

### 2. Explique à quoi servent les promises en Javascript, apporte le plus de précisions possible

> Les promesses permettent de répondre à la problématique des tâches asynchrones, c'est-à-dire des tâches qui prennent du temps à s'exécuter. Parmi ces tâches, celles que je rencontre personnellement le plus souvent sont les requêtes vers des APIs pour récupérer des informations. Le but d'une promesse est donc de ne pas bloquer la suite de l'exécution du programme pendant l'exécution de la tâche asynchrone.

> Une promesse est un objet qui garantit que l'on aura accès à un résultat dans le futur. Ce résultat peut être : une valeur spécifique, null, undefined ou encore un message d'erreur.

> La promesse a 3 états possibles :

> - pending : par exemple l'état en attendant qu'une API nous réponde.
> - fulfilled : si tout s'est bien passé. On peux ensuite accéder aux données (grâce à .then() ou bien async/await)
> - rejected : en cas d'erreur. On peux ensuite accéder à un éventuel message (grâce à .catch())

### 3. Ta meilleure idée pour révolutionner le monde du LMS

> Après avoir découvert Didask au travers de son site et de certaines vidéos de présentation, je constate que l'entreprise propose déjà un concept innovant par rapport aux autres LMS (auxquels je me suis intéressé en préparant cette candidature). Le fait d'utiliser les sciences cognitives pour élaborer les formations, le tout couplé avec le concept d'IA pédagogique, semble très prometteur et surtout très singulier dans cet univers.

> Ne connaissant pas tous les détails et fonctionnalités existantes sur le LMS Didask, voici une idée :

> > Les apprenants pourraient avoir accès à un chatbot en permanence qui permettrait de livrer avec spontanéité des retours sur la formation qu'ils suivent, avec par exemple :
> >
> > > - les difficultés à assimiler certaines notions,
> > > - la volonté d'approfondir certaines thématiques,
> > > - des questions diverses pour préciser ou confirmer une idée développée dans le contenu pédagogique
> > > - etc...

> > En fonction de ces retours, le chatbot pourrait :
> >
> > > - reformuler le contenu pour qu'il soit personnalisé au mode de pensée identifié de l'apprenant,
> > > - fournir des informations plus pointues,
> > > - répondre aux questions spécifiques,
> > > - remonter à l'équipe Didask des besoins jusqu'alors non identifiés.

### 4. Parle-nous de ton projet informatique dont tu tires le plus de fierté (on adore les détails)

> Etant en reconversion pofessionnelle depuis maintenant 13 mois je cumule encore assez peu de projet. Mais en voici un pour lequel je suis assez fier car il cumule la pression temporelle, les aspects humains, quelques challenges techniques et l'écriture d'un concept.

> Ce projet s'appelle WePeak (un aperçu visuel [ici](https://www.youtube.com/watch?v=8VLv32U0A9Q)). Il a été réalisé dans le cadre de ma formation chez O'Clock lors du dernier mois. L'objectif était de constituer une équipe de 4 à 6 développeurs (nous étions 4), d'écrire un projet d'application web et d'aller le plus loin possible dans la mise en place des fonctionnalités en l'espace de 3 semaines.

> WePeak est une plateforme de mise en relation où des personnes peuvent créer des sorties sportives auxquelles d'autres utilisateurs peuvent s’inscrire et participer. Elle permet aux utilisateurs de planifier et d'organiser des activités sportives en fonction de leurs préférences et de leurs besoins spécifiques : que ce soit pour une randonnée en montagne, une séance de course à pied en ville ou une session de surf sur la côte. Les utilisateurs peuvent filtrer les sorties disponibles selon le type de sport, la localisation, la difficulté, la durée, et la taille du groupe, leur permettant ainsi de trouver rapidement et facilement l'activité qui leur convient le mieux. C'est une sorte de Blablacar pour les sports outdoor.

> Je suis fier de l'excellente entente et organisation de l'équipe, qui nous a permis de rendre un MVP en 3 semaines (après 5 mois de formation).

> À l'époque (avril 2024), les principaux challenges techniques portaient sur les calculs des distances entre les activités et la position des utilisateurs, et nous étions particulièrement fiers de mettre en place ce type de fonctionnalité. L'application est encore largement perfectible, mais au vu des contraintes et du contexte, c'est une énorme satisfaction de l'avoir co-développée.
