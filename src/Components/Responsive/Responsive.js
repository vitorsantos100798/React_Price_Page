import React from 'react';
import "../Responsive/Responsive.css"

const BoxResponsive = (props) => {
    return (
        <>
        <div className="BoxDiv" >
            
                <div className="Plano_center">
                <span>{props.data.plano}</span>
                </div>
        <div className="BoxContainerTablet">
            <div className="BoxPai">
                <div><span className= "MarginOne"  >Ideal Para</span></div>
                <div><span className= "MarginOne">Valor Por Mês</span></div>
                <div><span>Contrato de</span></div>
                <div><span>Economia De</span></div>
            </div>
            <div className="BoxTio">
                <div><span className= "Ideal_Style">{props.data.ideal_para}</span></div>
                <div><span>{props.valor.mes}</span></div>
                <div><span>{props.valor.contrato}</span></div>
                <div><span className="Economia">{props.valor.economia}</span></div>
            </div>
            </div>
            <div className="BotaoResponsivel">
               <button>CONTRATAR PLANO</button>
            </div>
        </div>
        </>
    );
}
export default BoxResponsive;