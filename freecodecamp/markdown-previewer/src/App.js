import React, { Component } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import "./App.css";

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
      <div className="App container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <FormGroup>
              <FormLabel>Editor</FormLabel>
              <br />
              <FormControl
                id="editor"
                as="textarea"
                placeholder="Enter Markdown"
                rows="15"
                cols="80"
                defaultValue={markdown}
                onChange={(event) => this.updateMarkdown(event.target.value)}
              ></FormControl>
            </FormGroup>
          </div>
          <div className="col-md-6 mx-auto">
            <p>Previewer</p>
            <div
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
