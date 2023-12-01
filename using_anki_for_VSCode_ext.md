# Using Anki for VSCode Extension

## Why use Anki for VSCode Extension?

The main advantage of this extension having access to the editing capabilities of VSCode while making Anki cards.

For example - if you are using Anki to learn programming or computer science concepts, it can be immensely helpful to have formatted code blocks, or syntax highlighting, in your cards.

There are alternate Anki add-ons that accomplish this but I find this one most helpful. When I want to create, edit, or format multiple cards at once, I like to create all of an Anki deck's cards in a single markdown file (.md), using VScode tools to quickly write, edit, or format them. Then you can use a scrip like the awk script featured below to generate .md files from each of your cards, then using the Anki for VSCode extension to send the cards to a deck via a quick hotkey.

## You can make Anki cards in Markdown with VSCode and send them to a deck corresponding to the file structure of this project.

Command Palette:
CMD+Shift+P Anki: Send to Dirname Deck

Hotkey (personal, not default):
Cmd+Shift+S+D ('Send' + 'Dirname')

You can generate Anki cards from a single Markdown file that contains all of the cards and/or answers via the following awk script:
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
