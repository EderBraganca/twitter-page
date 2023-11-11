import React from 'react';
import './SideBarRight.css';

class SideBarRight extends React.Component {
    render() {
        return (
            <section id='menuLateralR'>
                <nav class="navMenus" id="menuHappens"> 
                    <div className='itensLateralR' id="tituloMenuHappens" >
                        <a className='linksLateralR' >O que está acontecendo</a>
                    </div>
                    <div className='itensLateralR' >
                        <p class='generoTrend'>Esportes</p>
                        <a className='linksLateralR' href="#">Trend 1</a>
                    </div>
                    <div className='itensLateralR' >
                        <p class='generoTrend'>Assuntos do momento</p>
                        <a className='linksLateralR' href="#">Trend 2</a>
                    </div>
                    <div className='itensLateralR'>
                        <p class='generoTrend'>Assuntos do momento</p>
                        <a className='linksLateralR' href="#">Trend 3</a>
                    </div>
                    <div className='itensLateralR'>
                        <p class='generoTrend'>Saude</p>
                        <a className='linksLateralR' href="#">Trend 4</a>
                    </div>
                    <div className='itensLateralR'>
                        <p class='generoTrend'>Esportes</p>
                        <a className='linksLateralR' href="#">Trend 5</a>
                    </div>
                    <div className='itensLateralR' id="mostrarMaisHappens">
                        <a className='linksLateralR' href="#">Mostrar mais</a>
                    </div>
                </nav>
                <nav class="navMenus" id="menuFollow"> 
                    <div className='itensLateralR' id="tituloMenuFollow">
                        <a className='linksLateralR'>Quem Seguir</a>
                    </div >
                    <div className='itensLateralR'>
                        <a className='linksLateralR' href="#">Pessoa 1</a>
                        <p class='arrouba'>@pessoa1</p>
                    </div>
                    <div className='itensLateralR'>
                        <a className='linksLateralR' href="#">Pessoa 2</a>
                        <p class='arrouba'>@pessoa2</p>
                    </div>
                    <div className='itensLateralR'>
                        <a className='linksLateralR' href="#">Pessoa 3</a> 
                        <p class='arrouba'>@pessoa3</p>   
                    </div>
                    <div className='itensLateralR' id="mostrarMaisFollow">
                        <a className='linksLateralR' href="#">Mostrar mais</a>
                    </div>
                </nav>
            </section>
        );
    }
}

export default SideBarRight;