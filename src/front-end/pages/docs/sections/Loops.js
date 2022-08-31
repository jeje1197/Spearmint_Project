import Tab from '../Tab'

export default function LoopSection() {
    return (
        <div>
            <h2><u>Loops</u></h2>
            <section>
                <p>
                    Loops are used to execute a block of statements repeatedly while
                    a given condition is satisfied. 
                </p>

                <h3>For Loops</h3>
                
                <Tab/><code>{"for (var i: 0; i < 5; i : i + 1) {"}</code><br/>
                <Tab/><code><Tab/>{"// statements"}<Tab/><Tab/><Tab/><Tab/>&nbsp;</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/><Tab/><Tab/><Tab/><Tab/>&nbsp;</code>

                <h3>While Loops</h3>

                <Tab/><code>{"while (i < 5) {"}&nbsp;&nbsp;</code><br/>
                <Tab/><code><Tab/>{"// statements"}</code><br/>
                <Tab/><code>{"}"}<Tab/><Tab/><Tab/><Tab/></code>
            </section>
        </div>
    )
}