import React from "react";
import "./Cardinfo.css";
const CardInfo = () => {
    return(
    <>
        <div className="ContainerInformacao" >
            <div className="Box1">
                <div className="Text_Header">
                    <span>POR LOJA</span>
                </div>
                <span>Ideal Para</span>
                <span>Valor Por Mês</span>
                <span>Contrato de </span>
                <span >Economia De</span>
                <div className="Text_Bottom">DS MARKETING</div>
            </div>
            <div className="Box2">
                <ul>
                    <li className="Cinza"> Estúdio de Criação </li>{" "}
                    <li className="Azul" > Automatização de postagens nas redes sociais </li>{" "}
                    <li className="Cinza" > Artes para </li>
                    <li className="Azul" > Canal de whatsapp para disparo </li>{" "}
                    <li className="Cinza" > Ações Impulsionadas(Facebook / Instagram) </li>{" "}
                    <li className="Azul" > Rádio Personalizada </li>{" "}
                </ul>
                <div>
                    <p className="Text_Bottom" >DS COMMERCE</p>
                </div>
            </div>
            <div className="Box3">
                <ul>
                    <li className="Azul" > 
                        <div class="tooltip"><span>?</span>
                            <span class="tooltiptext">10 Dias Úteis</span>
                        </div>
                    Site Personalizado </li>{" "}
                    <li className="Cinza" > Recebe Pedidos das promoções e ofertas </li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                        SERVIÇOS DE CRIAÇÃO
                    </p>
                </div>
            </div>
            <div className="Box4">
                <ul>
                    <li className="Azul">
                        <div class="tooltip"><span>?</span>
                            <span class="tooltiptext">Prazo de Entrega <br />24h</span>
                        </div>
                        Criação e Edição de Redes Sociais (Facebook/Instagram)</li>
                    <li className="Cinza">
                        <div class="tooltip"><span>?</span>
                            <span class="tooltiptext">Prazo de Entrega <br />72h</span>
                        </div>
                        Criação de Modelos Personalizados</li>
                    <li className="Azul">
                         <div class="tooltip"><span>?</span>
                            <span class="tooltiptext">Prazo de Entrega <br />24h</span>
                        </div>
                        Criação de logotipo</li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                        CANAIS DE ATENDIMENTO.
                    </p>
                </div>
            </div>
            <div className="Box5">
                <ul>
                    <li className="Azul">Suporte</li>
                    <li className="Cinza">Suporte Whatsapp</li>
                    <li className="Azul">Sala de treinamento toda semana</li>
                    <li className="Cinza">Horário de atendimento (Seg-sexta)  </li>
                    <li className="Azul">Plantão de atendimento (Seg-sexta) 18h Às 21h  </li>
                    <li className="Cinza"> Treinamento e mentoria Individual  (1h) </li>
                </ul>
                <div>
                    <p className="Text_Bottom"  >
                        GARANTIA
                    </p>
                </div>
            </div>
            <div className="Box6 BorderNone  ">
                <ul>
                    <li className="Azul">Garantia de arrependimento</li>
                    <li className="Cinza Big">Garantia de satisfação nos 90 primeiros dias;
                        No mínimo a ferramenta aumenta o faturamento 3x o investimento.
                        Condição: Uso a ferramenta 100% conforme metodologia Datasales.
                        Reembolso 100% do valor pago.</li>
                    <li className="Azul ListaGrande2 ">Condições</li>
                </ul>
            </div>
        </div>
    </>
    );
}
export default CardInfo;