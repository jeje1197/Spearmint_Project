import Tab from '../Tab'

export default function FunctionSection() {
    return (
        <div>
            <h2><u>Functions</u></h2>
            <section>
                <p>
                    A function is a block of code which only runs when it is called.
                    You can pass it values, as arguments. You can also have it return a result.
                </p>

                <p>
                    Functions must be declared before they can be used.
                </p>
                
                <Tab/><code>{"fun sayHello() {"}<Tab/></code><br/>
                <Tab/><code><Tab/>{'print("Hello")'}&nbsp;&nbsp;</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/>&nbsp;&nbsp;&nbsp;</code>

                <p>
                    Once you've declared a function, you can then call it
                    in the following way:
                </p>

                <Tab/><code>{"sayHello()"}</code><br/>
            </section>
        </div>
    )
}