# Using Anki for VSCode Extension

## Prerequisite Installations

You must have the following installed in order to use this extension:
- **Anki** Version >= 2.1.21 installed and running
- **AnkiConnect** add-on installed in Anki (get it from https://ankiweb.net/shared/info/2055492159)
- **VSCode** Version >= 1.66
-  **Anki for VSCode** extension from https://marketplace.visualstudio.com/items?itemName=jasew.anki

## Why Use Anki for VSCode Extension?

This extension allows you to generate Anki cards from Markdown files (.md) and send them directly to your Anki deck. If you don't know Markdown, or are a card-carrying member of Markdown Haters for Life (MDH4L), there are still compelling reasons to consider making Anki cards this way:

### It enables code syntax highlighting in your Anki cards

In Markdown, you signify a code block by prepending and appending it with three backticks:

```javascript
// As you can see, this is a code block.
const myFunction = (x) => {
  console.log(x);
};
```

Having syntax highlighting is invaluable if you're using Anki to learn programming or computer science, as your cards will often contain code. While there is a great Anki add-on for this, it stopped working when Anki updated. But even if it worked, this extension still has additional benefits.

### A single Markdown file can contain as many cards as you want

This is my preferred workflow. Instead of managing dozens or hundreds of individual files, I maintain **one parent .md file per subject** that I gradually add cards to over time. This allows you to:
- Easily and quickly create, edit, and format multiple cards at once
- Use VSCode features like **multiple cursors** and **find and replace** across all your cards
- Keep related cards together for better context while editing
- Avoid the overhead of managing hundreds of individual files

### You can send all cards in a file to Anki at once

This is much faster than creating each card individually in Anki's card editor. The extension can send an entire file full of cards with a single command.

## How to Format Cards

### Basic Card Format

Cards are created using `##` (level 2) headlines. The headline becomes the **front** of the card, and everything below it (until the next `##`) becomes the **back**:

```markdown
## What's the Markdown?

Markdown is a lightweight markup language with plain-text-formatting syntax.
Its design allows it to be converted to many output formats.

## Who created Markdown?

John Gruber created the Markdown language in 2004 in collaboration with
Aaron Swartz on the syntax.
```

This creates **two cards**.

### Multi-line Front Side

If you want multiple lines on the front of a card, use the `%` symbol to separate front and back:

```markdown
## YAGNI

Describe this acronym and why it's so important.

%

"You aren't gonna need it" (YAGNI) is a principle of extreme programming
(XP) that states a programmer should not add functionality until deemed
necessary.
```

### Cloze Deletions

You can create cloze deletions in the card headline:

```markdown
## A bit like {{c1::this}} and {{c2::that}}
```

Note: Any body content below a cloze headline won't be used (cloze cards only have one side).

### Adding Tags

Add tags to cards using link format at the end of the card content:

```markdown
## Binary tree

In computer science, a binary tree is a tree data structure in which 
each node has at most two children.

[#algorithms]() [#data-structures]() [#computer-science]()
```

### Including Images

Embed images using standard Markdown syntax:

```markdown
## What does a binary tree look like?

![binary tree](../path/to/binary-tree.png)
```

## Sending Cards to Anki

There are three main commands for sending cards, each with different use cases:

### 1. Send to Default Deck
**Command**: `Anki: Send To Deck`

Sends all cards in the current file to your configured default deck (defaults to "notes"). 

**Use case**: Great for a "Daily Notes" or "Inbox" deck where you collect miscellaneous cards before organizing them later. The extension automatically tags each card with the file's title for organization.

### 2. Send to Own Deck
**Command**: `Anki: Send To Own Deck`

Creates a deck named after your file's top-level `#` headline.

**Use case**: When you realize your subject deserves its own dedicated deck. Just add a title to your file:

```markdown
# JavaScript Fundamentals

## What is a closure?
...
```

This creates a deck called "JavaScript Fundamentals".

### 3. Send to Dirname Deck (My Preferred Method)
**Command**: `Anki: Send To DirName Deck`

**My custom hotkey**: Cmd+Shift+S+D ('S' for 'send' and 'D' for 'dirname')
*(Note: This is my personal hotkey - you'll need to set your own in VSCode keyboard shortcuts)*

Creates decks based on your **directory structure**. For example:
- File: `/workspace/programming/javascript/closures.md`
- Deck: `programming::javascript`

**Why this is my preferred method**: It allows you to organize your cards by simply organizing your files and folders. Your file system becomes your deck structure. No need to manually specify deck names or remember to add title headers.

**Pro tip**: Set `anki.saveStrategy` to `useDirStructure` in settings, and then the regular "Send To Deck" command will use the directory structure automatically - no need to use the DirName command every time.

## File Structure Example

Here's how I organize my Anki card files:

```
anki-cards/
├── programming/
│   ├── javascript/
│   │   ├── fundamentals.md
│   │   └── async-patterns.md
│   └── python/
│       └── data-structures.md
└── computer-science/
    ├── algorithms.md
    └── databases.md
```

Using "Send to DirName Deck", each file sends to its corresponding nested deck (e.g., `programming::javascript` or `computer-science`).

## Updating Existing Cards (Beta Feature)

By default, sending cards again creates duplicates. To **update** cards instead:

1. Enable in settings:
   - `anki.md.updateCards: true`
   - `anki.md.insertNewCardID: true`

2. The extension embeds a note ID in each card and uses it to find and update existing cards

**Note**: This feature is currently opt-in but may become default in the future.

## Useful Commands

- `Anki: Sync` - Syncs your Anki collection
- `Anki: Force Re-install` - Fixes extension issues (Anki must be running)

## Key Settings to Know

- `anki.defaultDeck` - Set your default deck name (default: "notes")
- `anki.saveStrategy` - Set to `useDirStructure` to always use file paths as deck names
- `anki.md.createTagForTitle` - Auto-tag cards with the file title (default: true)
- `anki.template` - Choose card template (default: "BasicWithHighlightVSCode")

## Resources

- Official Anki for VSCode docs: https://marketplace.visualstudio.com/items?itemName=jasew.anki
- Markdown Cheatsheet: https://github.com/lifeparticle/Markdown-Cheatsheet
- AnkiConnect: https://ankiweb.net/shared/info/2055492159