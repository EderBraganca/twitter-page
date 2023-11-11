import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav id="menu">
                    <div class="menuItems" id="paraVoce">Para Você</div>
                    <div class="menuItems" id="seguindo">Seguindo</div>
                    <div class="menuItems" id='menuItemIcon'> 
                        <a href='#'></a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;