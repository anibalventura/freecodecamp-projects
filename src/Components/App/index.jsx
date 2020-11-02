import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const marked = require("marked");

class App extends Component {
  state = {
    markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,
  };

  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  render() {
    const { markdown } = this.state;

    //Allows line breaks with return button
    marked.setOptions({
      breaks: true,
    });

    return (
      <div className="container-fluid bg-primary pb-4 pt-4 pl-5 pr-5">
        <h1 className="text-center text-white font-weight-bold mb-4">
          Markdown Previewer
        </h1>
        <div className="row justify-content-md-center">
          <div className="col-md-5 mr-1 mb-3 border border-light rounded bg-info">
            <div className="form-group">
              <h4 className="form-label text-white text-center font-weight-bold pt-3">
                Editor
              </h4>
              <br />
              <textarea
                className="form-control"
                id="editor"
                as="textarea"
                placeholder="Enter markdown"
                rows="15"
                defaultValue={markdown}
                onChange={(event) => this.updateMarkdown(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-md-5 mr-1 mb-3 border border-light rounded bg-info">
            <h4 className="text-white text-center font-weight-bold pt-3 pb-4">
              Previewer
            </h4>
            <div
              className="text-white"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
