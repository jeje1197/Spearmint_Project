import './Docs.css'

export default function Docs() {
    return (
        <>
            <Intro/>
            <hr/>
            <Body/>  
        </>
    )
}

function Intro() {
    return (
        <div>
            <h1>Docs</h1>
            <section className="introduction">
                <p> This is the official documentation for the Spearmint programming
                    Language.
                </p>
            </section>
        </div>
    )
}

function Body() {
    return (
        <div className="body">
            <PrimitiveSection/>
        </div>
    )
}

function PrimitiveSection() {
    return (
        <div>
            <h2>Primitives</h2>
            <section>
                <p>
                    In Spearmint, a primitive (primitive value, primitive data type) is
                    data that is not an object and has no methods
                    or properties. There are 3 primitive data types:
                    <ul>
                        <li>number</li>
                        <li>string</li>
                        <li>null</li>
                    </ul>
                </p>

                <p>
                    Most of the time, a primitive value is represented directly at the
                    lowest level of the language implementation.
                </p>

                <p>
                    All primitives are immutable, meaning you cannot change their values
                    or call methods on them. Do not confuse this with assigning a value to
                    a variable.
                </p>
            </section>
        </div>
    )
}
