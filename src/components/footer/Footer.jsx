import React from 'react'
import Media from '../img/media.png'

export default function Footer() {
  return (
    <div className='footer'>
        <footer>
            <h3 className='linha'>Vidraçaria Vitrelli</h3>
                <ul className='footer'>
                    <li>vidraçariaVitreli@gmail.com.br</li>
                    <li> (11) 4782-8922 </li>
                    <li>Atendimento de Seg a Sáb</li>
                    <li>Das 08:00 ás 12:00 e da 14:00 ás 18:00</li>
                </ul> <img src={Media}/>
        </footer>
    </div>
  )
}
