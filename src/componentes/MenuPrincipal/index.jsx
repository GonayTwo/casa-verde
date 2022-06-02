import React from "react";
import './style.css';

const MenuPrincipal = () =>(
    <div className="MenuPrincipal">
        <div>
            <img className="MenuPrincipal__img" src="assets/logo.png" alt="" />
        </div>
    
        <nav className="MenuPrincipal__nav">
             <li className="MenuPrincipal__li">
                <a className="MenuPrincipal__li-a" href="/">Como fazer</a>
                /
            </li>
            <li className="MenuPrincipal__li">
                <a className="MenuPrincipal__li-a" href="/">Ofertas</a>
                /
            </li>
            <li className="MenuPrincipal__li">
                <a className="MenuPrincipal__li-a" href="/">Depoimentos</a>
                /
            </li>
            <li className="MenuPrincipal__li">
                <a className="MenuPrincipal__li-a" href="/">Vídeos</a>
                /
            </li>
            <li className="MenuPrincipal__li">
                <a className="MenuPrincipal__li-a" href="/">Meu Carrinho</a>
                
            </li>    
        </nav>
    </div>
);
export default MenuPrincipal;