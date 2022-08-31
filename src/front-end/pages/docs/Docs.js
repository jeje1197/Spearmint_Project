import './Docs.css'
import ExpressionSection from './sections/Expressions'
import PrimitiveSection from './sections/Primitives'

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
            <ExpressionSection/>
        </div>
    )
}
