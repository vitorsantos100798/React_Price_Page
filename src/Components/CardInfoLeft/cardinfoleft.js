import React from "react";
import "./cardinfoleft.css";



const CardInfoLeft = () => {
  return (
    <>
      <div className="ContainerCardInfo">
        <div className="BoxOne">
          <div className="Text_Header">
            {" "}
            <span>POR LOJA</span>
          </div>
          <p >Ideal Para</p>
          <p>Valor Por Mês</p>
          <p  >Contrato de </p>
          <p>Economia De</p>
          <div className="Text_Bottom">DS MINHA AGÊNCIA</div>
        </div>

        <div className="BoxTwo">
          <ul>
            <li className="Azul">
              Ações Semanais Realizadas por um Expert em Datasales
            </li>
            <li className="Cinza"> Total de Ações / Campanhas por mês</li>
          </ul>
          <div>
            <p className="TextBoxTwo" >Composição das Ações ou Campanhas De Ofertas ou Promoções</p>
          </div>
          <div>
            <p className="Text_Bottom" >
              DS MARKETING
            </p>
          </div>
        </div>

        <div className="BoxThree">
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

        <div className="BoxFour">
          <ul>
            <li className="Azul">
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

        <div className="BoxSixth">
          <ul>
            <li className="Azul">
            <div class="tooltip"><span>?</span>
              <span class="tooltiptext">Prazo de Entrega <br/>72h</span>
            </div>
              Criação e Edição de Redes Sociais (Facebook/Instagram)</li>

            <li className="Cinza">
            <div class="tooltip"><span>?</span>
              <span class="tooltiptext">Prazo de Entrega <br/>72h</span>
            </div>
              Criação de Modelos Personalizados</li>


            <li className="Azul">
            <div class="tooltip"><span>?</span>
              <span class="tooltiptext">Prazo de Entrega <br/>24h</span>
            </div>
              Criação de logotipo</li>
          </ul>
          <div>
            <p className="Text_Bottom"  >
              CANAIS DE ATENDIMENTO.
            </p>
          </div>
        </div>

        <div className="BoxSeventh" >
          <ul>
            <li className="Azul">Suporte</li>
            <li className="Cinza">Suporte Whatsapp</li>
            <li className="Azul">Sala de treinamento toda semana</li>
            <li className="Cinza">Horário de atendimento (Seg-sexta)  </li>
            <li className="Azul">Plantão de atendimento (Seg-sexta) 18h Às 21h  </li>
            <li className="Cinza"> Treinamento e mentoria Individual  (1h) </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardInfoLeft;