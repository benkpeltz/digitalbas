# Book of Alternative Services (BAS) – Interactive Liturgy Builder & Service Sequencer (v2)

An interactive, modular liturgical web application modeled on *The Book of Alternative Services (1985)* of the Anglican Church of Canada. Built for clergy, Lay Pastoral Assistants (LPAs), lay readers, music directors, and parish administrators to plan services aligned with the liturgical occasion, customize and reorder every liturgical block, and generate a clean single-page service for officiating or printing parish bulletins.

---

## Key Features in Version 2

### 1. Multiple BAS Rites & Liturgical Forms
Switch seamlessly between five liturgical archetypes, each pre-configuring the proper sequence of blocks, greetings, canticles, and concluding rites:
- **The Holy Eucharist (BAS p. 185)**: Full standard celebration of Word and Table.
- **Penitential / Lenten Eucharist (BAS p. 188)**: Places the Penitential Rite (Confession & Absolution) and *Kyrie / Trisagion* in the Gathering Rite and uses the Lenten Gospel Tract.
- **Service of the Word / Lay-Led Liturgy (BAS p. 130)**: Tailored for Lay Pastoral Assistants and lay readers when no priest is present, using lay-appropriate pardon phrasing (*"have mercy upon us"*) and *The Grace*.
- **Morning Prayer: The Daily Office (BAS p. 47)**: Includes Opening Sentence, Penitential Introduction, *Venite* or *Jubilate*, Psalmody, Lessons, *Benedictus*, Affirmation (*Hear, O Israel* or Apostles' Creed), Litany, Collect, Lord's Prayer, and Dismissal.
- **Evening Prayer: Service of Light (BAS p. 62)**: Includes the *Service of Light* greeting, *Phos Hilaron ("O Gracious Light")*, Psalmody, Lessons, *Magnificat*, Evening Litany, Collects, Lord's Prayer, and Dismissal.

### 2. Dynamic Service Order & Block Sequencer
- **Reorder Any Element (`↑` / `↓`)**: Move any block up or down in the service order—either from the **Service Order & Sequencer** panel in the left sidebar or by hovering directly over any block in the live preview.
- **Toggle or Remove Elements**: Check/uncheck built-in elements or remove custom blocks with a single click.
- **Insert Contextual Elements (`+ Insert Element`)**: Insert pre-built or custom blocks at any point in the service:
  - *Hymn / Congregational Song / Anthem* (*Common Praise*)
  - *Territorial Land Acknowledgement* (pre-populated for Treaty 20 / Williams Treaties / Michi Saagiig Anishinaabeg territory, fully editable)
  - *Welcome & Parish Announcements*
  - *Children's Focus / All-Age Homily*
  - *Laying on of Hands & Anointing (Healing Rite, BAS p. 555)*
  - *Renewal of Baptismal Covenant (BAS p. 158)*
  - *Pastoral Blessing (Birthdays, Anniversaries, Commissioning)*
  - *Publication of the Banns of Marriage (BAS p. 549)*
  - *Additional Scripture Lesson, Canticle, or Custom Parish Collect*
- **Inline Editing (`✎`)**: Click the edit icon on any built-in or custom block to customize its heading, speaker label, crimson rubric, prayer text, or congregational response.

### 3. Complete BAS Propers & Textual Variants
- **Full Appointed Propers per Occasion**: Includes the **Collect of the Day**, **BAS Psalter Psalm Prayer**, **Prayer over the Gifts**, **Prayer after Communion**, and **Seasonal Proper Prefaces (BAS pp. 218–226)** across Ordinary Time, Advent, Christmas, Epiphany, Ash Wednesday/Lent, Good Friday, Easter, Pentecost, Trinity Sunday, Reign of Christ, All Saints' Day, and Pastoral Healing.
- **Six BAS Eucharistic Prayers (1–6)**: Supports Eucharistic Prayers 1 through 6 alongside Fractions 1, 2, 3, 5, and 6.
- **Canticles, Creeds & Litanies**: Choose between *Gloria in Excelsis*, *Kyrie*, *Trisagion*, *Venite*, *Jubilate*, *Phos Hilaron*, *Benedictus*, *Magnificat*, Nicene Creed, Apostles' Creed, *Hear, O Israel (The Shema, p. 53)*, Litanies 1, 2, 3, 4, 14, and Pastoral Intercessions, plus Contemporary or Traditional *Lord's Prayer (p. 211)*.
- **Officiant & Bulletin Tools**: Toggle rubrics on/off, toggle hover controls on/off, scale typography (`A-`, `Standard`, `A+ Lectern`), export your customized service configuration as `.json`, copy formatted plain text, or print a clean bulletin via `@media print`.

---

## Repository File Structure

```text
bas-interactive-liturgy/
├── index.html                          # Main application entry point (GitHub Pages ready)
├── bas_service_builder_standalone.html # Single-file self-contained version (portable offline copy)
├── css/
│   └── styles.css                      # Liturgical rubric styling, lectern font sizes, and print rules
├── js/
│   ├── lectionary-data.js              # Lectionary database, Proper Prefaces, Rite templates, Custom blocks
│   └── app.js                          # Dynamic block sequencer, modal editor, and rendering engine
├── LICENSE                             # MIT License
├── .gitignore                          # Standard Git ignore rules
└── README.md                           # Project documentation & deployment guide
```

---

## How to Test Locally & Deploy on GitHub Pages

### Testing Locally
1. Unzip `bas-interactive-liturgy-v2.zip`.
2. Double-click `index.html` (or `bas_service_builder_standalone.html`) to open it directly in any modern browser (Chrome, Safari, Firefox, Edge)—no `npm install` or build server required.

### Uploading to GitHub & Publishing on GitHub Pages
1. Create a new repository on GitHub (for example, `bas-interactive-liturgy`).
2. Upload the contents of the `bas-interactive-liturgy/` folder (`index.html`, `css/`, `js/`, `README.md`, `LICENSE`, `.gitignore`) to the root of your repository's `main` branch.
3. Go to **Settings → Pages** in your GitHub repository.
4. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and `/ (root)` directory, and click **Save**.
5. Within 1–2 minutes, your app will be live at `https://<your-github-username>.github.io/bas-interactive-liturgy/`.
