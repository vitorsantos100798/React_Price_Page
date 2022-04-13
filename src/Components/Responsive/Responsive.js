import React from 'react';
import "../Responsive/Responsive.css"
import { useState } from "react"

const BoxResponsive = (props) => {

    const handlerIcon = (value)=>{
        return value === true ? <i id="Success" class=" fa-solid fa-circle-check"></i> : <i id="Error" class="fa-solid fa-xmark"></i>
    }

    const [showElement, setShowElement] = useState(true)
    const showOrHide = () => setShowElement(!showElement)
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

    <div className="Adicionais">
      <div className="InfoAdicionais" onClick={showOrHide}>INFORMAÇÕES ADICIONAIS
      
      <i class="fa fa-caret-down"></i>
      
      </div>
      { showElement ? 
      			<ul>
                  <div>
                      <span>
                      DS MINHA AGÊNCIA
                      </span>
                      
                      </div>
                  <li >
                      <span>Ações Semanais Realizadas por um Expert em Datasales:  </span>
                      {props.data.ações_semanais}
                  </li>
                  <li>
                      <span>Total de Ações / Campanhas por mês:  </span>
                      {props.data.total_ações}
                  </li>
                  <div>
                      <span>
                      DS MARKETING
                      </span>
                  </div>
                  <li>
                      <span>Estúdio de Criação:  </span>

                      {props.data.estudio_criação} </li>{" "}
                  <li >
                      <span   
                      >Automatização de postagens nas redes sociais:  </span>
                      <i class="fa-brands redesSociais fa-instagram"></i>
                      <i class="fa-brands redesSociais fa-facebook-f"></i>
                      <i class="fa-brands redesSociais fa-whatsapp"></i>
                  </li>{" "}

                  <li>

                      <span>Artes para:  </span>

                      {props.data.artes} </li>

                  <li>

                      <span>Canal de whatsapp para disparo:</span>

                      {props.data.canal_wats} </li>{" "}

                  <li>
                      <span>Ações Impulsionadas(Facebook / Instagram):</span>
                      {props.data.açoes_impu}</li>{" "}

                  <li>
                      <span> Rádio Personalizada: </span>
                      {handlerIcon(props.data.radio_personalizada)} </li>{" "}

                  <div>
                      <span>
                      DS COMMERCE
                      </span>
                  </div>

                  <li>
                      <span>Site Personalizado:</span>

                      {handlerIcon(props.data.site_personalizado)} </li>{" "}
                  <li>
                      <span>Recebe Pedidos das promoções e ofertas:</span>
                      {handlerIcon(props.data.receber_ofertas)} </li>

                  <div>
                      <span>
                      SERVIÇOS DE CRIAÇÃO
                      </span>
                  </div>
                  <li>
                    <span className="Logo">Criação e Edição de Redes Sociais: 
                        <i class="fa-brands redesSociais fa-instagram"></i>
                        <i class="fa-brands redesSociais fa-facebook-f"></i>
                    
                    </span>
                      {props.data.criação_redes_sociais}</li>

                  <li>
                      <span>Criação de Modelos Personalizados: </span>
                      {props.data.criação_modelos_personalizados}</li>

                  <li>
                      <span>Criação de logotipo:  </span>
                      {props.data.criação_logo}</li>

                  <div>
                      <span>
                        CANAIS DE ATENDIMENTO.
                      </span>
                  </div>
                  <li>
                      <span>Suporte: </span>
                      {props.data.suporte}</li>

                  <li>
                      <span>Suporte Whatsapp: </span>
                      {handlerIcon(props.data.suporte_wp)}</li>

                  <li>
                      <span>Sala de treinamento toda semana: </span>
                      {handlerIcon(props.data.sala_treinamento)}</li>

                  <li>
                      <span>Horário de atendimento: (Seg-sexta) 09h Às 18h 

                      </span>
                      </li>

                  <li>
                      <span>Plantão de atendimento: (Seg-sexta) 18h Às 21h </span>
                      {handlerIcon(props.data.plantão)}</li>

                  <li>
                      <span> Treinamento e mentoria Individual (1h):  </span>
                      {props.data.treinamento} </li>

              </ul>
      
      
      : null }
    </div>



        </div>
        </>
    );
}
export default BoxResponsive;