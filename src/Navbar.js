import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>Online Shop</h1>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to = "/Shop">Shop</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;