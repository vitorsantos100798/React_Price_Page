import React from 'react';
import "./Coluna.css"
const CardColuna = (props) => {
    
    const handlerIcon = (value)=>{
        return value === true ? <i id="Success" class=" fa-solid fa-circle-check"></i> : <i id="Error" class="fa-solid fa-xmark"></i>
    }
    return(
        <>
       <div className="ContainerInformacaoo" >
            <div className="BoxPrice">
                <div className="Text_Headerr">
                    <span>{props.data.plano}</span>
                </div>
                <span className="Text_plan" >{props.data.ideal_para}</span>
                <span>{props.valor.mes}</span>
                <span>{props.valor.contrato} </span>
                <span className="Economia" >{props.valor.economia}</span>
                <div className="Text_Bottom"></div>
            </div>
            <div className="Boxdois">
                <ul>
                    <li className="Cinza">{props.data.estudio_criação}</li>
                    <li className="Azul" >
                    <i class="fa-brands redesSociais fa-instagram"></i>
                    <i class="fa-brands redesSociais fa-facebook-f"></i>
                    <i class="fa-brands redesSociais fa-whatsapp"></i>
                        
                    </li>{" "}
                    <li className="Cinza">{props.data.artes} </li>
                    <li className="Azul" >{props.data.canal_wats}  </li>{" "}
                    <li className="Cinza">{props.data.açoes_impu}  </li>{" "}
                    <li className="Azul">{handlerIcon(props.data.radio_personalizada)}  </li>{" "}
                </ul>
                <div>
                    <p className="Text_Bottom" ></p>
                </div>
            </div>
            <div className="Boxtres">
                <ul>
                    <li className="Azul">{handlerIcon(props.data.site_personalizado)}</li>{" "}
                    <li className="Cinza"> {handlerIcon(props.data.receber_ofertas)} </li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                        
                    </p>
                </div>
            </div>
            <div className="Boxquatro">
                <ul>
                  <li className="Azul"  >{props.data.criação_redes_sociais}</li>
                   <li className="Cinza"  >{props.data.criação_modelos_personalizados}</li>
                  <li className="Azul"  >{props.data.criação_logo}</li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                        
                    </p>
                </div>
            </div>
            <div className="Boxcinco">
                <ul>
                <li className="Azul">{props.data.suporte}</li>
                <li className="Cinza">{handlerIcon(props.data.suporte_wp)}</li>
                <li className="Azul">{handlerIcon(props.data.sala_treinamento)}</li>
                <li className="Cinza">{props.data.horario_atendimento} (Seg-sexta)  </li>
                <li className="Azul">{handlerIcon(props.data.plantão)}</li>
                <li className="Cinza"> {props.data.treinamento} </li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                    </p>
                </div>
            </div>
            <div className="Boxseis   ">
                <div>
                <ul>
                    <li className="Azul">{props.data.garantia_arrependimento}</li>
                    <li className="Cinza Big">{props.data.grantia_satisfacao}</li>
                    <li className="Azul  ListaGrande "> {props.data.condições}</li>
                </ul>
                </div>
                <div className="Button">
                        <div className="StylePlan">{props.data.plano}</div>
                    </div>
                    

            </div>
        </div>
        </>
    )
}

export default CardColuna;


