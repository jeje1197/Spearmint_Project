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
                The Spearmint Programming Language is a high-level, imperative
                programming language developed in 2022 by computer scientist Joseph Evans.
                It was inspired by the JavaScript and Python languages as it derives some
                of its syntactical and functional attributes from them, such as its 
                dynamic-typing and evaluation.
            </p>
            <p>
                This project features a full-stack web application with an online code editor
                for users to write and test their code without the need to download the Spearmint 
                development package
            </p>
        </div>
    )
}