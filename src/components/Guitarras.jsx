import React, {Component} from 'react'
class Guitarras extends Component{
  render(){
    return(
      <section id="guitarras" className="guitarras contenedor"> 
      <h2>Nuestras guitarras</h2> 
      {
        this.props.guitarras.map((guitarra, index)=>{
          return(
            <article className="guitarra"> 
              <img className="guitarra-image" src={guitarra.image}  alt={guitarra.alt} width="350"/>
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
export default Guitarras;