import React from 'react'
import '../Style.css'
import Redondo from '../img/redondo.webp'
import Escada from '../img/escada.png'
import Porta from '../img/area.jpg'

export default function cards() {
  return (

     
   <main className='cards'>
      <section class="container">
         <div class="card">
              <img src={Redondo}/>

                <b><h2>Espelho Redondo</h2></b>

                 <br/><a href=""></a><p>Espelho, Reduna, Adnet Redondo 50cm Preto com Alça Preta</p>
        
            <br/><a href="#" title="valor"><button>R$ 379,79</button></a>
        </div>
    </section>

    <section class="container">
            <div class="card">
                 <img src={Escada}/>

                    <b><h2>Para Peito</h2></b>
           
                      <br/><p>Proteção de escadas em vidro temperado 10mm com fixação com bolachas em inox aos degraus.</p>
        
            <br/><a href="#" title="Saiba Mais"><button>R$ 520,00</button></a>
        </div>
    </section>

    <section class="container">
         <div class="card">
                <img src={Porta}/>

                 <b> <h2>Porta de vidros</h2></b>
           
                  <br/><p>As portas de vidro são uma solução que costumam combinar com projetos mais arrojados e está com alta na decoração.</p>
        
                 <br/><a href="#" title="Saiba Mais"><button>R$ 1.999,99</button></a>
         </div>
    </section>

    
    <section class="container">
        <div class="card">
            <img src={Porta}/>

                 <b> <h2>Porta de vidros</h2></b>
           
                  <br/><p>As portas de vidro são uma solução que costumam combinar com projetos mais arrojados e está com alta na decoração.</p>
        
                  <br/><a href="#" title="Saiba Mais"><button>R$ 1.999,99</button></a>
             </div>
        </section>
    </main>


  );
}
