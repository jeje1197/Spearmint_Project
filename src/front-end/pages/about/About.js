import './About.css'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <hr/>
            <AboutBody/>
        </>
    )
}

function AboutBody() {
    return (
        <div className="About">
            <p>
                The Spearmint Programming Language is a imperative, dynamically-typed
                programming language developed in 2022 by computer scientist Joseph Evans.
                It was inspired by the JavaScript and Python languages as it derives some
                of its syntactical and functional attributes from them.
            </p>
        </div>
    )
}