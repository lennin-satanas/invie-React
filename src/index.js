import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
/*Provider es un administrador de contenido interactivo de redux.*/
import { Provider } from 'react-redux';
/*Para esto hay que importar un ‘almacen’ de datos desde redux. Es un método llamado createStore() 
que recibe dos parámetros; una función y un objeto. 
El objeto es el conjunto de elementos de mi aplicación y la función reducer será la que administra el dinamismo.*/
import { createStore } from 'redux';



 const initialState = {
   menu: [
     {
       href: 'index.html',
       title: 'Home',
     },
     {
       href: '#guitarras',
       title: 'Guitarras',
     },
     {
       href: 'precios.html',
       title: 'Precios',
     },
     // {
     //   href: 'Contact.html',
     //   title: 'Contactenos'
     // }
   ],
   logoPortada: logoPortada,
   guitarras: [
     {
       image: acustica,
       alt: 'Guitarra Invie Acustica',
       name: 'Invie Acustica',
       features:[
         'Estilo vintage',
         'Madera pura',
         'Incluye estuche invisible de aluminio',
       ]
     },
     {
       image: classic,
       alt: 'Guitarra Invie Acustica',
       name: 'Invie Acustica',
       features:[
         'Estilo vintage',
         'Liviana',
         'Empieza tu camino como rockstart',
       ]
     }
     
   ]
 }

 function reducer(state, action){
   switch(action.type){
      // analizo el caso que recibo en action.type
      case 'UPDATE_PROPS': {
         // convierto los datos que recibo en constante
         const newProps = action.payload.props;
         // convierto los datos que recibo en constante
         return { ...state, ...newProps }
      }
      default: 
         return state
      
   }
 } 

 const store = createStore(reducer, initialState);

 const easter = {
   menu: [
      {
        href: 'index.html',
        title: 'Home',
      },
   ],
 }

 cheet('i n v i e',()=>{
   // Para cambiar lo que hay dentro de store usamos el método .dispatch()
   store.dispatch({
      //tipo de la acción
      type: 'UPDATE_PROPS',
      //los datos que van a llegar
      payload:{
         //propiedades nuevas
         props: easter
      }
   })
   /*console.log('lo lograste, descubriste el easter egg');*/  
 })
 
 cheet('g o b a c k', ()=>{
   /*console.log('regresaste');*/
   store.dispatch({
      type: 'UPDATE_PROPS',
      payload:{
         props: initialState
      }
   })
 })


ReactDOM.render(
   /*<Provider> recibe un objeto con los elementos para repartir a los diferentes componente de nuestra aplicación.*/
   <Provider store={store}>
      <Invie />
   </Provider>,
   document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
