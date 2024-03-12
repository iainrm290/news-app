import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header-container'>
            <h1>The Soap Box</h1>
            <nav>
                <Link to='/'>Home </Link>
                <Link to='/articles'>Articles </Link>
            </nav>

        </div>
    )
}

export default Header