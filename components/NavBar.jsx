import Link from "next/link";


const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/bio">Bio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" href="/blog">Blog</Link>
            </li>
        </ul>
    )
};

export default NavBar;