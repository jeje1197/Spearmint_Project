import './Docs.css'
import ExpressionSection from './sections/Expressions'
import FunctionSection from './sections/Functions'
import IfStatementSection from './sections/IfStatements'
import LoopSection from './sections/Loops'
import PrimitiveSection from './sections/Primitives'
import VariableSection from './sections/Variables'

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
        <div className="Docs">
            <PrimitiveSection/>
            <hr/>
            <ExpressionSection/>
            <hr/>
            <VariableSection/>
            <hr/>
            <IfStatementSection/>
            <hr/>
            <LoopSection/>
            <hr/>
            <FunctionSection/>
        </div>
    )
}
