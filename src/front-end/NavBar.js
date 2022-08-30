import './NavBar.css'

export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Spearmint</a>
        <ul>
            <li className='active'>
                <a href="/docs">Docs</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}