import './NavBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Spearmint</Link>
        <ul>
            <CustomLink to="/">Code Editor</CustomLink>
            <CustomLink to="/docs">Docs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <li>
                <a href='https://github.com/jeje1197'>
                    <AiFillGithub size={50}/>
                </a>
            </li>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}