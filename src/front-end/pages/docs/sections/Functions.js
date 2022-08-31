import Tab from '../Tab'

export default function FunctionSection() {
    return (
        <div>
            <h2><u>Functions</u></h2>
            <section>
                <p>
                    A function is a block of code which only runs when it is called.
                    You can pass it values, as arguments. You can also have it return a result/
                </p>

                <p>
                    Functions must be declared before they can be used.
                </p>
                
                <Tab/><code>if (1) {"{"}<Tab/><Tab/>&nbsp;</code><br/>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/></code>

                <p>
                    Once you've declared a function, you can then call it
                    in the following way:
                </p>

                <Tab/><code>{"if (0) {"}<Tab/><Tab/>&nbsp;</code><br/>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"} else if (2) {"}&nbsp;&nbsp;</code><br/>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"} else {"}<Tab/><Tab/>&nbsp;<br/></code>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/></code>
            </section>
        </div>
    )
}