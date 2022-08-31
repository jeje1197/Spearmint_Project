import Tab from '../Tab'

export default function IfStatementSection() {
    return (
        <div>
            <h2><u>If Statements</u></h2>
            <section>
                <p>
                    If statements are conditional statements that only execute the code
                    inside of the following block if the condition is true.
                </p>
                
                <Tab/><code>if (1) {"{"}<Tab/><Tab/>&nbsp;</code><br/>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/></code>

                <p>
                    You can also chain else if and else statements after an if statement.
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