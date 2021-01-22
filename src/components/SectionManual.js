
//import { Component } from 'react';

// style
import '../assets/css/manual.css';

// lang
import TXT from '../lang/manual.json';

function SectionManual(props) {
  const lang = props.lang;
  return (
    <section className="SectionManual row bg-image">
      <div className="bg-image-pa container-content container-md justify-content-lg-start justify-content-md-center">

      <h1 className="col-md-8 btn-outline-primary">{ TXT.welcome[lang] }</h1>
      <h4 className="col-md-8 btn-outline-primary">En este sitio web podrás calcular lo que necesitas para subir el nivel de tus compañeros de batalla! (emoji feliz)</h4>

      <h6 className="col-md-8 btn-outline-primary">Lee las siguientes partes para entender como funciona.</h6>

       <div className="col-lg-10 col-md-11 col-sm-12 container-blur">
        <div className="card card-manual text-dark">
          <div className="card-header">
            <h5 className="card-title">Sección Calculadora (segunda pestaña del menu)</h5>
          </div>
          <div className="card-body">
            <p>Completa los campos con los valores actuales del Eidolon, su nivel y el porcentaje ya adquirido de dicho nivel. El porcentaje es opcional pero en niveles superiores hará una gran diferencia en el resultado final.</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/0wwehDR.png" alt="tuto1_lvl" title="form_level"/>
            <p>Al hacer click en el boton "calcular" verás una lista de items y sus cantidades necesarias para llegar al objetivo deseado.</p>

            <p>Para una simplificación de lectura las cantidades se agrupan un unidades o pack, teniendo en cuenta el modo que estos suelen encontrarse o tradearse en la comunidad dentro el juego. 100 unidades siempre equivale a 1 pack (o stack)</p>

            <p>Dichas cantidades pueden que supere lo que ya tienes en tu mochila. Puedes aumentar o disminuir las cantidades de cada item para que se ajuste a tus posibilidades. Con cada cambio que hagas el sisteme re-calcula según equivalencias entre los cristales por lo que algunas cantidades se verán fuertemente afectadas.</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/qNHZS41.png" alt="tuto2_btn" title="btns_calc"/>

            <p>No tienes o no te interesan los items elejidos? No te preocupes. Puedes elejir que cristales usar en el proceso, seleccionandolos desde las configuraciones en la esquina superior derecha de la pagina.</p>
          </div>
        </div>
       </div>


       <div className="col-lg-10 col-md-11 col-sm-12 container-blur">
        <div className="card card-manual text-dark">
          <div className="card-header">
            <h5 className="card-title">Sección Comparador (tercera pestaña del menu)</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Calcula cuantos cristales necesitas
            </h6>
          </div>
          <div className="card-body">
            <p>Te interesa conocer cuanto equivale la experiencia de un cristal en comparación a otro? Puedes utilizar este comparador</p>
            <p>Ingresa la cantidad, el tipo de unidad (unidades o packs) y el cristal a comparar. Con cada cambio veras reflejado la equivalencia en el cristal elejido en el segundo cuadro.</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/HerFHkG.png" alt="tuto_compare" title="tuto_compare"></img>
          </div>
        </div>
       </div>


      </div>
    </section>
  );
//  }
}

export default SectionManual;
