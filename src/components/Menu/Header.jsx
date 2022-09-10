import React from "react";
import Logo from '../img/LOGO.png'
import '../Style.css'


function Header(){
    return(
  <header className="nav"> 
      <img src={Logo} className='img'/>
      <ul className="nav__menu">

    <b/>  <li className="nav__item"><a href="#" className="nav__link">HOME</a></li>  
            
       <li className="nav__item"><a href="#" className="nav__link">DÚVIDAS</a></li>

       <li className="nav__item"><a href="#" className="nav__link">CONTATO</a></li>

       <li className="nav__item"><a href="#" className="nav__link">ORÇAMENTO</a></li>
    </ul>
       <input type="text" placeholder="   Clique para pesquisar" />
               
 </header>
        
    );
}
export default Header;