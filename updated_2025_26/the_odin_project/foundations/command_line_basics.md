# Foundations: Command Line Basics

!------------------------------------------------------------------------------------------- -->"

## What is a shell?

A shell is a command interpreter and scripting environment for interacting with the OS via CLI (Command Line Interface).

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the distinction between a CLI and a shell?

A CLI (Command Line Interface) is any text or command based computer interface; whereas a shell is a program that, while used via CLI, is specifically for interacting with Operating Systems via commands and scripts.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the advantages of a shell?

The main advatages of using a shell are a high keystroke-to-action ratio, support for automating repetitive tasks via scripts, and the capacity to access networked machines.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the two meanings of the / character?

When "/" appears at the front of a file or dir name, it refers to the root directory. When "/" appears within a path, however, it is simply a separator.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the short abbreviated versions of shell command options (or 'flags'), versus the long or full ones?

Use short abbreviated command options when working in the shell and long or full command options when writing scripts.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the two common methods for figuring out the use and options for a specific command?

Adding `--help` to a command will display helpful information, while adding `man` will display a scrollable manual for that command in the CLI; for example `ls --help` or `man ls`

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you navigate the man pages or --help information for a command? Specifically, how do you: navigate line-by-line, skip up or down full pages, search for a string, navigate string search matches, and quit the man page to return to shell prompt?

%

- Navigate line-by-line: up and down keys
- Skip up or down full pages: b and space keys
- Search for a string: `/<search string>`
- Navigate string search matches: N (forward) and Shift+N (backward).

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How can you use the ls (list) command to view the contents of directories other than the CWD?

Simply add the directory path to the command after ls; for example `ls Desktop/dev/projects` will list the contents of `Desktop/dev/projects` no matter the current working directory.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the meaning of the ~ character if it is at the start of a path shell?

The tilde character at the start of a path indicates the home directory of the current user; for example `~/Desktop/dev/projects` is the same as `/Users/doug/Desktop/dev/projects`.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What shell command can be used to efficiently move between two directories?

The dash character can be used to navigate between current and previous directory via `cd -`.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between commands `cd ..` and `cd -`?

Command `cd ..` shifts up a directory, while `cd -` shifts back to whatever the previous working directory was.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference in syntax between short and long shell command options?

Short shell command options are preceded by a single dash, whereas long shell command options are preceded by two dashes; for example `npm -v` versus `npm --version`.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between and absolute path and a relative path?

An absolute path specifies a location from the root of the file system, whereas a relative path specifies a location from the current working directoy.

[#]() [#command line basics]() [#shell]()

<!------------------------------------------------------------------------------------------- -->

## What do . and .. signify?

. signifies 'the current directory' whereas .. signifies 'the directory above the current dir'.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## If you need to refer to files or directories that are named with spaces or other special characters, how can you do so?

By surrounding the file or directory name with single quotes.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What option (or 'flag') can be used with the list command ``ls` to view all nested subdirectories within a directory?

The `-R` option or flag can be used with the list command `ls` to display all nested subdirs.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What flag must be used with the `mkdir` commans if making multiple directories via a single defined path? For example, if dir `dev` was empty and you wanted to create the nested sub directories `project` and `personal` via `nkdir dev/projects/personal`what option or flag would be necessary?

The `-p` flag is necessary when using command `mkdir` to create nested intermediary sub directories.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you rename a file or directory in shell?

Using the move command: `mv path/<filename> /path/<newfilename>` and the

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ## How do you move files or directories in shell?

Using the move command: ``mv path/<filename> /new_path/<filename>`.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What shell command can be used to copy a file?

The copy command, or `cp`, is used to copy a file, with the following syntax `cp <filename>.ext <destination/<new filename if desired>`

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What option or flag is necessary to copy a directory's nested structure when using the copy or `cp` shell command?

The recursive flag, `-r`, must be used with the `cp` command when copying a directory with nested structure.

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What UNIX command can be used in shell to delete a file?

The remove, or `rm` command can be used to delete files; for example., `rm filenmae.ext`

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

[#]() [#command line basics]() [#]()

<!------------------------------------------------------------------------------------------- -->

\*\*\* ADD TO

**_: A way to filter out low quality rhetoric and sustain high quality conversation and critical and or substantive dialogue; for example, repeated rhetorical devices and or argument tropes and debate tactic cliches. Could it be an upvote/downvote system? Too easuly gameable for tribes in its simplest form. What about ... a bot or hardcoded dict that assesses language and categorizes part of sentences/,essages/responses, assessing for those lowest quality things, that could actually be encodeable? New words and language would have to be regularly added. THAT'S AN INTERESTING PROJECT. _**
