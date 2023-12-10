# Using Anki for VSCode Extension

## Why use Anki for VSCode Extension?

This extension allows you to generate Anki cards from Markdown files (.md), and send them directly to your Anki deck. If you don't know Markdown, or are a card carrying member of Markdown Haters for Life (MDH4L), there are still reasons to consider making Anki cards this way:

## It enables you to have code syntax highlighting in your Anki Cards.

In Markdown, you signify a code block by prepending and appending it with three backticks, like so:

```javascript
// As you can see, this is a code block.
const myFunction = (x) => {
  console.log(x);
};
```

Having syntax highlighting is helpful if you're using Anki to learn programming or computer science, as your cards will often contain code. While there is a great Anki add-on for this, it stopped working when Anki updated. But even if it worked, this extension still has the following benefits.

## A single Markdown file can contain as many cards as you want.

This allows you to easily and quickly create, edit, and format multiple cards at once by using vsCode features like **multiple cursors** and **find and replace**.

## You can send all of the cards in a single Markdown file to an Anki deck at once.

This is much faster than creating each card individually in Anki's card editor. Just make sure your file structure corresponds to your deck structure, and use the syntax defined by the extension at https://marketplace.visualstudio.com/items?itemName=jasew.anki.

## You can make Anki cards in Markdown with VSCode and send them to a deck corresponding to the file structure of this project.

Command Palette:
CMD+Shift+P Anki: Send to Dirname Deck

Hotkey (personal, not default):
Cmd+Shift+S+D ('S' for 'send' and 'D' for 'dirname')

## If you wanted each of your Anki cards to have it's own file, you can create them in a single Markdown file and use a script to generate individual files for each.

For example, the following awk script:
awk '
/^# banki_technical/ {
if (filename) {
close(filename)
print "Closed file: " filename
}
filename = substr($0, 3) ".md"
print "Opening new file: " filename
next
}
{
if (filename == "") {
print "Error: filename not set for the line:", $0
} else {
print $0 > filename
}
}
' yourFilenameHere.md

#Markdown Cheatsheet
https://github.com/lifeparticle/Markdown-Cheatsheet
