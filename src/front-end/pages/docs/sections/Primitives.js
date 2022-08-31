import Tab from '../Tab'

export default function PrimitiveSection() {
    return (
        <div>
            <h2><u>Primitives</u></h2>
            <section>
                <p>
                    In Spearmint, a primitive (primitive value, primitive data type) is
                    data that is not an object and has no methods
                    or properties. There are 3 primitive data types:
                </p>
                <ul>
                    <li>string</li>
                    <li>number</li>
                    <li>null</li>
                </ul>

                <p>
                    Most of the time, a primitive value is represented directly at the
                    lowest level of the language implementation.
                </p>

                <p>
                    All primitives are immutable, meaning you cannot change their values
                    or call methods on them. Do not confuse this with assigning a value to
                    a variable.
                </p>

                <h3>Examples</h3>

                <p><Tab/>string</p>
                <Tab/><Tab/><code>var name: "John"</code>

                <p><Tab/>number</p>
                <Tab/><Tab/><code>var age: "28"</code>

                <p><Tab/>null</p>
                <Tab/><Tab/><code>var nullvar: "null"</code>
            </section>
        </div>
    )
}