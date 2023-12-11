import { useState } from "react";
import {
  faUpRightAndDownLeftFromCenter,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import "./App.css";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`&lt;div&gt;&lt;/div&gt;\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' &amp;&amp; lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
&gt; Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <section
        id="editor"
        className={
          toggle === "editor"
            ? "full-screen"
            : toggle === "previewer"
            ? "no-content"
            : "editor-section"
        }
      >
        <div className="title-bar">
          <h3>Editor</h3>
          <button
            onClick={() => {
              toggle === "editor" ? setToggle(0) : setToggle("editor");
            }}
          >
            <FontAwesomeIcon
              icon={toggle === 0 ? faUpRightAndDownLeftFromCenter : faMinimize}
            />
          </button>
        </div>
        <textarea
          id="editor"
          type="text"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        >
          {markdownText}
        </textarea>
      </section>
      <section
        id="previewer-section"
        className={
          toggle === "previewer"
            ? "full-screen"
            : toggle === "editor"
            ? "no-content"
            : "previewer-section"
        }
      >
        <div className="title-bar">
          <h3>Previewer</h3>
          <button
            onClick={() => {
              toggle === "previewer" ? setToggle(0) : setToggle("previewer");
            }}
          >
            <FontAwesomeIcon
              icon={toggle === 0 ? faUpRightAndDownLeftFromCenter : faMinimize}
            />
          </button>
        </div>
        <ReactMarkdown className="markdown-text">{markdownText}</ReactMarkdown>
      </section>
    </>
  );
}

export default App;
