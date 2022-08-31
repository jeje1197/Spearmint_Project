import './CodeEditor.css'
import * as React from 'react'
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';

import { examples } from './examples'; // Map containing the example code


export default class CodeEditor extends React.Component {

    constructor(props) {
        super(props)

        this.aceRef = React.createRef()
        this.consoleRef = React.createRef()

        this.run_code = this.run_code.bind(this)
        this.set_editor_code = this.set_editor_code.bind(this)
        this.set_example = this.set_example.bind(this)
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
        // console.log("mounted")
        const first_example = examples.get('FizzBuzz')
        this.set_editor_code(first_example)
        this.communicateWithApi(first_example)
    }

    // Must bind to context 'this'
    run_code() {
        // console.log("clicked run")
        const source_code = this.aceRef.current.editor.getValue() // Text from ace editor
        this.communicateWithApi(source_code)
    }

    set_editor_code(sample_code) {
        this.aceRef.current.editor.getSession().setValue(sample_code)
    }

    set_example(event) {
        // console.log("Example changed:", event.target.value, examples.get(event.target.value))
        this.set_editor_code(examples.get(event.target.value))
    }

    render() {
        return (
            <div>
                <h1>Spearmint Code Editor</h1>
                <section className="introduction">
                    <p>Write code and test it here!</p>
                </section>
                <hr/>
            
                <div className="CodeEditor">
                    <AceEditor
                        ref={this.aceRef}
                        height="100%"
                        className="editor"
                        placeholder="Enter code here"
                        mode="javascript"
                        theme="twilight"
                        fontSize={16}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        setOptions={{
                            showLineNumbers: true,
                            tabSize: 4,
                        }}
                    />

                    <Console ref={this.consoleRef}/>
                </div>

                <Options set_example={this.set_example} run_code={this.run_code}/>
            </div>
        )
    }
}


class Console extends React.Component {
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
                <MultiLineText text={isLoaded ? items.output : "Loading..."}></MultiLineText>
                </p>
            </div>
        )
    }
}

class MultiLineText extends React.Component {
    render() {
        var { text } = this.props

        return (<span style={{ whiteSpace: "pre" }}>{text}</span>
        )
    }
}

class Options extends React.Component {
    render() {
        var { set_example, run_code } = this.props

        return (
            <div className="options">
                <label htmlFor="example-selector">Examples: </label>
                <select name="example-selector" onChange={set_example}>
                    <option value="FizzBuzz">FizzBuzz</option>
                    <option value="Variables">Variables</option>
                    <option value="Loops">Loops</option>
                    <option value="Functions">Functions</option>
                </select>
                <button type="button" onClick={run_code}>Run</button>
            </div>
        )
    }
}