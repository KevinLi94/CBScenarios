import './styles.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
return (
<nav className="nav">
    <Link to="/" className="site-title">C.B.</Link>
    <ul>
        <CustomLink to="/EDTA">EDTA</CustomLink>
        <CustomLink to="/DRIP">DRIP</CustomLink>
        <CustomLink to="/OLD">OLD</CustomLink>
        <CustomLink to="/WBIT">WBIT</CustomLink>
        <CustomLink to="/MISC">MISC</CustomLink>
    </ul>    
</nav>
)
}

function CustomLink({ to, children,...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})

   return(
    <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}