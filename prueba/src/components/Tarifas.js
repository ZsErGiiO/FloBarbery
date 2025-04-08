import React from 'react';

const Tarifas = () => {
  return (
    <section className="tarifas-section">
      <div className="tarifas">
        <h2 className="tarifas-heading">Nuestras Tarifas</h2>

        <img className="cuchilla" src="./img/cuchilla.png" alt="Cuchilla Left" />
        <img className="cuchilla2" src="./img/cuchilla2.png" alt="Cuchilla Right" />

        <div className="tarifas-container">
          <div className="tarifa-columna">
            <div className="tarifa">
              <h4>Corte de Pelo</h4>
              <p>Incluye lavado de cabello y peinado</p>
              <span className="tarifa-price">19€</span>
            </div>
            <div className="tarifa">
              <h4>Corte de Pelo Premium</h4>
              <p>Corte de Pelo + Tratamiento facial 'barberchair'</p>
              <span className="tarifa-price">24€</span>
            </div>
            <div className="tarifa">
              <h4>Corte de Pelo Deluxe</h4>
              <p>Corte de Pelo Premium + Masaje o Manicura</p>
              <span className="tarifa-price">38€</span>
            </div>
            <div className="tarifa">
              <h4>Desrizado</h4>
              <p>o tratamiento texturizante</p>
              <span className="tarifa-price">38€</span>
            </div>
          </div>

          <div className="tarifa-columna">
            <div className="tarifa">
              <h4>Arreglo de barba</h4>
              <p>Retoque con máquina o trimming</p>
              <span className="tarifa-price">11€</span>
            </div>
            <div className="tarifa">
              <h4>Afeitado</h4>
              <p>Incluye tratamiento facial</p>
              <span className="tarifa-price">19€</span>
            </div>
            <div className="tarifa">
              <h4>Afeitado Premium</h4>
              <p>Incluye tratamiento de aromaterapia</p>
              <span className="tarifa-price">24€</span>
            </div>
            <div className="tarifa">
              <h4>Afeitado Deluxe</h4>
              <p>Afeitado Premium + Masaje o Manicura Exprés</p>
              <span className="tarifa-price">38€</span>
            </div>
          </div>

          <div className="tarifa-columna">
            <div className="tarifa">
              <h4>Depilación láser de diodo</h4>
              <p>Espalda + hombros</p>
              <span className="tarifa-price">89€</span>
            </div>
            <div className="tarifa">
              <h4>Depilación láser de diodo</h4>
              <p>Piernas completas + ingles (pubis) + axilas</p>
              <span className="tarifa-price">125€</span>
            </div>
            <div className="tarifa">
              <h4>Depilación láser de diodo</h4>
              <p>Ingles (pubis) + axilas</p>
              <span className="tarifa-price">59€</span>
            </div>
            <div className="tarifa">
              <h4>Depilación láser de diodo</h4>
              <p>Tórax + abdomen</p>
              <span className="tarifa-price">89€</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifas;