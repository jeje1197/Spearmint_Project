import './CodeEditor.css'
import * as React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


export class CodeEditor extends React.Component {

    constructor(props) {
        super(props)

        this.aceRef = React.createRef()
        this.consoleRef = React.createRef()

        this.run_code = this.run_code.bind(this)
        this.set_editor_code = this.set_editor_code.bind(this)
    }

    communicateWithApi(source_code) {
        fetch('https://jeje1197.pythonanywhere.com/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input: source_code}) // Send body JSON
        })
        .then(res => res.json())
        .then(json => {
            this.consoleRef.current.setState({
                isLoaded: true,
                items: json
            })
        })
    }

    componentDidMount() {
        console.log("mounted")
        this.set_editor_code('print("Spearmint template output")')
        this.communicateWithApi('print("Spearmint template output")')
    }

    // Must bind to context 'this'
    run_code() {
        const source_code = this.aceRef.current.editor.getValue() // Text from ace editor
        this.communicateWithApi(source_code)
    }

    set_editor_code(sample_code) {
        this.aceRef.current.editor.getSession().setValue(sample_code)
    }

    render() {
        return (
            <div>
                <h1>Spearmint Code Editor</h1>
                <section id="introduction">
                    <p>Spearmint is a high-level, dynamically-typed programming language.</p>
                </section>
            
    
                <div className="CodeEditor">
                    <AceEditor
                        ref={this.aceRef}
                        className="editor"
                        placeholder="Enter code here"
                        mode="javascript"
                        theme="twilight"
                        name="blah2"
                        fontSize={20}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={""}
                        setOptions={{
                        showLineNumbers: true,
                        tabSize: 4,
                        }}/>

                    <Console ref={this.consoleRef}/>
                </div>
    
                <div className="options">
                    <label htmlFor="example-selector">Examples:</label>
                    <select name="example-selector" id="example-selector" onChange={(event) => console.log(event.target.value)}>
                        <option value="FizzBuzz">FizzBuzz</option>
                        <option value="Variables">Variables</option>
                        <option value="Loops">Loops</option>
                        <option value="Functions">Functions</option>
                    </select>
                    <button className="run-button" type="button" onClick={this.run_code}>Run</button>
                </div>
            </div>
        )
    }
}

export class Console extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            items: []
        }
    }
    
    render() {
        var { isLoaded, items } = this.state

        return (
            <div className="console">
                <p className="code-output">
                    {isLoaded ? `${items.output}` : 'Loading...'}
                </p>
            </div>
        )
    }
}