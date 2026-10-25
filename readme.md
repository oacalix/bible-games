# 🎲 Bible Games

A small hub of classroom Bible games for kids (around 5th grade), made for Sunday school and Religious Education classes. Play on a projector, a laptop or a phone. Everything is **English**/**Spanish** bilingual, no build step, no dependencies.

Open `index.html` to get the hub with links to every game, or jump straight into one:

| Game | Folder | What it is |
| --- | --- | --- |
| 🎣 Bible Jeopardy | [`jeopardy/`](jeopardy/) | 5-topic board, 25 questions, steals, a double-value tile |
| ⚡ True or False | [`true-false/`](true-false/) | Lightning review round — fast true/false statements |
| 🎡 Wheel of Trivia | [`wheel/`](wheel/) | Spin for a category, then answer multiple choice |
| 🗂️ Speed Sort | [`speed-sort/`](speed-sort/) | Teams race to sort cards into the right category |

All four games share the same team/turn/scoring engine: pick 2–4 teams, name them, and the app tracks turns, scores (with manual +100/-100 adjustment), and autosaves progress to the browser so a refresh won't lose a game in progress.

### Setup / Menú inicial

![Setup screen](screenshots/sc1.png)

### Game board / Tablero

![Game board](screenshots/sc2.png)

### Question with choices / Pregunta con opciones

![Question with choices](screenshots/sc3.png)

---

## 🎣 Bible Jeopardy

### Features

- **5 topics, 25 questions each:** The Life of Jesus, Genesis, Moses and the Exodus, Old Testament Heroes, The Early Church.
- **Automatic turns:** the game picks who starts and tells each team when it's their turn.
- **Steals:** if a team misses, the next team gets one chance to steal the points.
- **Full net! 🎣:** one hidden tile on each board is worth double.
- **3 difficulty levels:**
  - **Easy:** A/B/C choices shown right away.
  - **Normal:** choices only if the team asks.
  - **Hard:** no choices, kids answer from memory.
- **Optional timer:** play with a countdown or at your own pace. You can switch it on or off mid-game.
- **Auto-save:** the game survives a page refresh, even with a question open.
- **Every answer includes its Bible reference**, so the teacher can check it.
- Works on big screens and phones.

### How to play

1. Choose language, topic, difficulty, timer and number of teams (2–4).
2. The team whose turn it is picks a tile.
3. Read the question aloud. Mark **Correct** or **Wrong**, or tap the choice the team picked.
4. A wrong answer gives the next team a chance to steal.
5. When all 25 tiles are used, the team with the most points wins.

### Keyboard shortcuts

| Key     | Action            |
| ------- | ----------------- |
| `O`     | Show choices      |
| `C`     | Correct           |
| `X`     | Wrong             |
| `Enter` | Next turn         |
| `Esc`   | Back to the board |

Each team has **+100 / −100** buttons to fix the score if needed.

*(Juego de trivia bíblica estilo Jeopardy, bilingüe español/inglés.)*

### Qué incluye

- **5 temas con 25 preguntas cada uno:** La vida de Jesús, Génesis, Moisés y el Éxodo, Héroes del Antiguo Testamento y La iglesia primitiva.
- **Turnos automáticos:** el juego sortea quién empieza y avisa a quién le toca.
- **Robo:** si un equipo falla, el siguiente tiene una oportunidad de robar los puntos.
- **¡Red llena! 🎣:** una casilla escondida en cada tablero vale el doble.
- **3 niveles de dificultad:**
  - **Fácil:** las opciones A/B/C aparecen de una vez.
  - **Normal:** las opciones salen solo si las piden.
  - **Difícil:** sin opciones, responden de memoria.
- **Reloj opcional:** se juega con cuenta regresiva o con calma, y se puede cambiar a mitad del juego.
- **Guardado automático:** si recargás la página, el juego sigue donde iba, aunque haya una pregunta abierta.
- **Cada respuesta trae su cita bíblica** para que el maestro la pueda verificar.

### Cómo jugar

1. Elegí idioma, tema, dificultad, reloj y número de equipos (2 a 4).
2. El equipo en turno escoge una casilla.
3. Leé la pregunta en voz alta. Marcá **Correcto** o **Incorrecto**, o tocá la opción que dijo el equipo.
4. Si fallan, el siguiente equipo puede robar.
5. Cuando se usan las 25 casillas, gana el equipo con más puntos.

---

## ⚡ True or False

A fast bilingual review round. The teacher reads a statement aloud, the team on turn calls out "true" or "false," and the teacher taps the matching button. Right away it scores +100 and shows the correct answer with its reference.

- **7 decks:** The Trinity & Creation, Prayer, The Life of Jesus, Genesis Stories, Moses & the Exodus, Old Testament Heroes, The Early Church.
- **3 difficulty levels** (control how much time each team gets to answer): Easy (20s), Normal (15s), Hard (10s).

## 🎡 Wheel of Trivia

Spin an 11-category wheel; whichever category the wheel lands on pulls a random multiple-choice question from that topic.

- **11 categories:** Trinity, Creation, Prayer, Common Prayers, Scripture & Prayer, God the Father, The Life of Jesus, Genesis Stories, Moses & the Exodus, Old Testament Heroes, The Early Church.
- **3 difficulty levels:** Easy/Normal show the 3 answer choices (20s/15s to answer); Hard hides the choices entirely — kids answer from memory and the teacher marks it Correct/Wrong (12s).

## 🗂️ Speed Sort

Teams race to classify short cards into the right bucket.

- **4 decks:** Persons of the Trinity (Father/Son/Holy Spirit), the Five Forms of Prayer (blessing & adoration, petition, intercession, thanksgiving, praise), Miracle or Parable?, and Old or New Testament?.
- **3 difficulty levels** (time to answer): Easy (20s), Normal (15s), Hard (10s). Good as a kinesthetic change of pace mid-lesson.

---

## Adding or editing questions

Every game is a single self-contained HTML file — no build step. Open the relevant file and edit its data array directly:

| Game | File | Data array |
| --- | --- | --- |
| Jeopardy | `jeopardy/index.html` | `THEMES` |
| True or False | `true-false/index.html` | `DECKS` |
| Wheel of Trivia | `wheel/index.html` | `CATS` |
| Speed Sort | `speed-sort/index.html` | `DECKS` |

**Jeopardy** questions look like this:

```js
[
  "Spanish question",
  "English question",
  ["Correct ES", "Wrong ES", "Wrong ES"],
  ["Correct EN", "Wrong EN", "Wrong EN"],
  "Libro ES / Book EN 1:1",
  "Optional note ES",
  "Optional note EN",
];
```

**The first option is always the correct one.** The game shuffles the choices on screen. Each theme needs exactly **5 categories with 5 questions each**, ordered from easiest (100) to hardest (500).

**True or False** statements look like this:

```js
["Spanish statement.", "English statement.", true /* or false */, "Optional note/reference ES", "Optional note/reference EN"];
```

**Wheel of Trivia** questions look like this (same shuffle rule — first option is correct):

```js
["Spanish question", "English question", ["Correct ES", "Wrong ES", "Wrong ES"], ["Correct EN", "Wrong EN", "Wrong EN"], "Optional combined reference"];
```

**Speed Sort** cards look like this (the number is the index into that deck's `buckets` array):

```js
["Spanish card text.", "English card text.", 0 /* bucket index */, "Optional note/reference"];
```

## Notes

- Saved games are stored in the browser (`localStorage`). They don't carry over between devices or browsers, or into private/incognito windows.
- No build step or dependencies. Just open `index.html` or host it on GitHub Pages.
- **Language:** every page detects the visitor's browser language on first visit (English/Spanish, defaulting to Spanish for anything else) and remembers it once you use the language toggle — the toggle always wins over auto-detection after that.

## Analytics (optional)

Page-view tracking is wired up but off by default. To turn it on:

1. Create a free [Google Analytics 4](https://analytics.google.com/) property for the site (Admin → Create Property), then add a **Web** data stream for `https://oacalix.github.io/bible-games/`.
2. Copy the stream's **Measurement ID** (looks like `G-XXXXXXXXXX`).
3. Open [`analytics.js`](analytics.js) at the repo root and replace the placeholder `G-XXXXXXXXXX` with your real ID. That one file is loaded by every page (hub + all 4 games), so this is the only edit needed.
4. Commit and push — traffic should start showing up in GA within a few minutes of someone opening a page.

## SEO / AI discoverability

Each page has a description, Open Graph/Twitter tags, a canonical URL and `WebApplication`/`WebSite` structured data (JSON-LD). The repo root also has `sitemap.xml`, a permissive `robots.txt` (explicitly open to AI crawlers like GPTBot/ClaudeBot, not just search engines), and an [`llms.txt`](llms.txt) summarizing the site for AI assistants. After pushing to GitHub Pages, submit the site in [Google Search Console](https://search.google.com/search-console) (Add property → `https://oacalix.github.io/bible-games/` → verify via the HTML tag or DNS method → Sitemaps → submit `sitemap.xml`) to get it indexed faster — Claude can't do that step for you since it requires your Google account.

## License

[MIT](LICENSE). Feel free to use, adapt and share it with your church or school.

Made by [Oscar Calix](https://otdev.io/).
