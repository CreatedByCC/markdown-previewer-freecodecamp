export const DEFAULT_MARKDOWN = `
# H1
## H2
### H3

Heres some code, \`<div>Hello World</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == 'hello' && lastLine == 'there!') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Name   | Age |
| ------ | --- |
| Kealan | 25  |
| Jake   | 28  |


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![cat image](https://avatars.mds.yandex.net/i?id=bfda14988ca3eb5f6e6ee92186f8e9500502d11a-4468494-images-thumbs&n=13)

foo  
baz
`;

