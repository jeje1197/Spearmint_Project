import Tab from '../Tab'

export default function VariableSection() {
    return (
        <div>
            <h2><u>Variables</u></h2>
            <section>
                <p>Variables are containers for storing data values.</p>

                <p>
                    In Spearmint, variables are dynamically-typed. This means that variables do not
                    need to be declared with any particular type, and can even change type after 
                    they have been set.
                </p>

                <p>
                    Variables must be declared before they can be used or reassigned a value.
                </p>

                <Tab/><code>var myVar: "Hello"</code><br/>
                <Tab/><code>print(myVar)<Tab/>&nbsp;&nbsp;</code>

                <p>
                    Once a variable has been declared, you can reassign values to it.
                </p>

                <Tab/><code>myVar: "Greetings"</code><br/>
            </section>
        </div>
    )
}