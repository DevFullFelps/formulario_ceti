import './Header.css';

const Header = () =>{
    return(
        <nav className='navbar'>
            <div className='navbar-search'>
                <input type='text' placeholder='Pesquisar...'/>
            </div>
            <div className='navbar-title'>
                <h1>Catálogo CETI</h1>
            </div>

            <div className='navbar-social'>
                <a href=" " target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-facebook'></i>
                </a>
                <a href=' ' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a href=' ' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-whatsapp'></i>
                </a>
            </div>
        </nav>
    )
}

export default Header;