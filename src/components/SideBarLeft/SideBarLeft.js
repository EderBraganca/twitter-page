import React from 'react';
import './SideBarLeft.css';

class SideBarLeft extends React.Component {
    render() {
        return (
            <nav id="menuLateralL">
                <a className='itensLateralL' href="#">Página Inicial</a>
                <a className='itensLateralL' href="#">Explorar</a>
                <a className='itensLateralL' href="#">Notificações</a>
                <a className='itensLateralL' href="#">Mensagens</a>
                <a className='itensLateralL' href="#">Listas</a>
                <a className='itensLateralL' href="#">Itens Salvos</a>
                <a className='itensLateralL' href="#">Comunidades</a>
                <a className='itensLateralL' href="#">Premium</a>
                <a className='itensLateralL' href="#">Perfil</a>
                <a className='itensLateralL' href="#">Mais</a>
                <a className='itensLateralL' href="#" id="postarBt">Postar</a>
            </nav>
        );
    }
}

export default SideBarLeft;