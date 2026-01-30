# Commit Messages

<!------------------------------------------------------------------------------------------- -->

## What are the two separate parts that make up an effective commit?
%
A subject and a body.

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What should the subject, or first line, of an an effective commit message include?
%
A brief summary of the change you made to the project.

Example:
`Add missing link and alt text to the company's logo.`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What should the body of an an effective commit message include?
%
A concise and clear explanation of why the commit needed to be made; essentially  The body of a commit message should describe the problem your commit solves. 

Example:
Example:
```
Add missing link and alt text to the company's logo.

Screen readers won't read the images to users with disabilities without this information.
```

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What's the simplest way to write a multi-line commit with a subject and body?
%
By typing command `git commit` into the terminal and pressing enter.

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## When you are writing a commit in an editor window you opened via command `git commit` + enter, how do you save it and exit?
%
By closing the editor window. 

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## When is it okay to write a single line commit message?
%
When your changes are simple and don't require further explanation.

Example: `Fix typo in introduction to user guide.`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## How can you quickly write a simple, single line commit message?
%
By using the command `git commit -m "<message here>"`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What command displyas the history of commits, including the subjects and bodies of commit messages? 
%
`git log`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## ## What command displays the history of commits, and shows only the subject and not body of commit messages? 
%
`git log --oneline`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What command displays commit history grouped by author?
%
`git shortlog`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## Should commit messages start with lowercase or uppercase letters?
%
Always start a commit message by capitalizing the first letter of the first word. 

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## 
%


[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## Should the subject line of Git commit messages end in a period?
%
No, never end a commit message subject line with a period. 

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What voice or mood should be used in Git commit message subject lines?
%
The imperative mood, meaning speak or write as if commanding someone.

Example: 
`Delete redundant files` is good, `Deleted redundant files` is not.
`Format directory files via Prettier` good, `Formatting directory files via Prettier` is not. 
`Update getting started documentation`

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## Why should the imperative mood be used in Git commit messages?
%
Because Git uses the imperative mood when it automatically creates commit message subject lines for `git merge`, `git revert`, and other commands.

Example:
Merging a branch via `git merge`creates an automatic commit: `Merge branch <branchName>`
Merging a pull request by clicking the 'merge' button on Github.com creates an auto commit: `Merge pull request #123 from suser/branch`
Reverting a commit creates the following type of auto commit:
```
Revert "Add the thing with the stuff"

This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d.
```

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## Should the imperative mood be used in Git commit subject lines and bodies?
%
No, the use of the imperative mood is crucial in commit message subject lines, but it is not necessary in the body of commit messages. 

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## How can you ensure that commit messages 
%


[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## Should the body of commit messages explain how you changed things?
%
No, commit messages should explain what you changed and why you changed it, now how. How code changed is obvious from looking at a diff, and if it is complex enough to warrant comment, the comments should be made inline in code.

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## How many charaters should a commit message's subject line be?
%
<= 50 characters ideally, 72 char absolute limit. 

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->

## What are the seven rules of a good git commit message?
%
- Separate subject and body via blank line 
- Subject line <= 50 chars
- Capitalized subject line
- Periodless subject line
- Imperative mood in subject line
- Wrap body at 72 chars
- Body explains *what* and *why*, not *how*

[#Git]() [#commits]() [#commit message]()

<!------------------------------------------------------------------------------------------- -->