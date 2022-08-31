import './Expressions.css'
import { operatorRowData } from './OperatorData'


export default function ExpressionSection() {
    return (
        <div>
            <h2><u>Expressions</u></h2>
            <section>
                <p>
                    At a high level, an expression is a valid unit of code that
                    resolves to a value. There are two types of expressions: those
                    that have side effects (such as assigning values) and those that purely evaluate.
                </p>

                <p>
                    The expression <code>x: 5</code> is an example of the first type.
                    This expression uses the <code>=</code> operator to assign the value seven to
                    the variable <code>x</code>. The expression itself evaluates to <code>5</code>.
                </p>

                <p>
                    The expression <code>x: 3 + 2</code> is an example of the second type. 
                    This expression uses the <code>+</code> operator to add <code>3</code> and 
                    &nbsp;<code>2</code> together and produces a value, <code>5</code>.
                </p>

                <p>
                    As the examples above also illustrate, all complex expressions are joined
                    by operators, such as <code>=</code> and <code>+</code>.
                </p>

                <h3>Operators</h3>
                <p>Here is a list of the operators available in the Spearmint Language:</p>

                <table>
                    <tbody>
                        <tr>
                            <th>Operator</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                        {operatorRowData.map((rowElements, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><code>{rowElements[0]}</code></td>
                                    <td>{rowElements[1]}</td>
                                    <td><code>{rowElements[2]}</code></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <p><code>true</code> is treated as the number <code>1</code> in Spearmint.
                Similarly to the C Language.</p>
            </section>
        </div>
    )
}