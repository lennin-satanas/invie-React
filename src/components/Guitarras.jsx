import React, {Component} from 'react';
import { connect } from 'react-redux';
// import CSSTransitionGroup from 'react-css-transition-group';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


function mapStateToProps(state){
  return{
    guitarras: state.guitarras,
  }
}

class Guitarras extends Component{
  render(){
    return(
      <section id="guitarras" className="guitarras contenedor"> 
      <h2>Nuestras guitarras</h2> 
      {
        this.props.guitarras.map((guitarra, index)=>{
          return(
            <article className="guitarra"> 
              <CSSTransitionGroup
              transitionName="flicker"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              >
                <img className="guitarra-image" 
                key={guitarra.image} 
                src={guitarra.image}  
                alt={guitarra.alt} 
                width="350"/>
              </CSSTransitionGroup>
              <div className="contenedor-guitarra">
                <h3 className="guitarra-name">{guitarra.name}</h3>
                <ol>
                  {
                    guitarra.features.map((feature, index)=>{
                      return(
                        <li>{feature}</li>
                      )
                    })
                  } 
                </ol>
              </div>
            </article>
          )
        })
      }
      
      
    </section>
    )
  }
}
export default connect(mapStateToProps) (Guitarras);