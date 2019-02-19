import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';





// const data = {
//   menu: [
//     {
//       href: 'index.html',
//       title: 'Home',
//     },
//     {
//       href: '#guitarras',
//       title: 'Guitarras',
//     },
//     {
//       href: 'precios.html',
//       title: 'Precios',
//     },
//     // {
//     //   href: 'Contact.html',
//     //   title: 'Contactenos'
//     // }
//   ],
//   logoPortada: logoPortada,
//   guitarras: [
//     {
//       image: acustica,
//       alt: 'Guitarra Invie Acustica',
//       name: 'Invie Acustica',
//       features:[
//         'Estilo vintage',
//         'Madera pura',
//         'Incluye estuche invisible de aluminio',
//       ]
//     },
//     {
//       image: classic,
//       alt: 'Guitarra Invie Acustica',
//       name: 'Invie Acustica',
//       features:[
//         'Estilo vintage',
//         'Liviana',
//         'Empieza tu camino como rockstart',
//       ]
//     }
    
//   ]
// }
  
class App extends Component {
  render() {
    return (
      <section className= "Invie"> 
        {/*Portada*/}
        {/*<Portada menu={data.menu} logo={data.logoPortada}/>*/}
        <Portada />
        {/*Guitarras*/}
        {/*<Guitarras guitarras = {data.guitarras}/>*/}
        <Guitarras />
        {/*footer*/}
        <Footer/>
      </section>
    );
  }
}

export default App;
