import React from 'react';
import "./collum.css";

const Collum = (props)=> {
  const handlerIcon = (value)=>{
    return value === true ? <i id="Success" class=" fa-solid fa-circle-check"></i> : <i id="Error" class="fa-solid fa-xmark"></i>
}

    return (
      <>
        <div className="ContainerColunas">
          <div className="BoxOnee">
            <div className="Text_Headerr">
              <span>{props.data.plano}</span>
            </div>
            <span className="Text_plan">{props.data.ideal_para}</span>
            <span>{props.valor.mes}</span>
            <span>{props.valor.contrato}</span>
            <span className= "Economia">{props.valor.economia}</span>
            <div className="Text_Bottom"></div>
          </div>

          <div className="BoxTwoo">
            <ul>
              <li className="Azul">
                {props.data.ações_semanais}
              </li>
              <li className="Cinza">{props.data.total_ações}</li>
            </ul>
          </div>
          <div  style={{ display:props.data.display }} className="boxConteudo">
          <div>
            <span>Uso da Metologia Datasales de Propagandas e Ofertas</span>
          </div>

          <p>Uma lista com 12 produtos ou uso da lista modelo;</p>
          <p>Criação de Encarte com até 12 produtos para impressão e/ou envio no whatsapp;</p>
          <p>Criação de até 3 posts com 4 produtos diferentes em cada;</p>
          <p>Criação de até 6 Stories com até 2 produtos diferentes em cada;</p>
          <p>Criação de até 12 Cartazes.(impressão é do cliente)</p>
          <p>Postagem nas redes sociais conectadas - Facebook, Intagram e Whatsapp</p>
          <p>Impulsionamento para moradores em até 2km.</p>
          <p>Usando modelos e os recursos ferramenta da DataSales.</p>
          <p>Publicação programada e com SLA de 24 horas.</p>
          <p>Confira as condições em  <a className="link" href="www.datasales.io/dsagenciatermos">www.datasales.io/dsagenciatermos</a></p>
          

          </div>

          <div style={{ marginTop:props.data.margin }} className="BoxThreee">
            <ul>
              <li className="Cinza">{props.data.estudio_criação} </li>{" "}
              <li className="Azul" >
                <i class="fa-brands redesSociais fa-instagram"></i>
                <i class="fa-brands redesSociais fa-facebook-f"></i>
                <i class="fa-brands redesSociais fa-whatsapp"></i>
              </li>{" "}


              <li className="Cinza" > {props.data.artes} </li>
              <li className="Azul" >{props.data.canal_wats} </li>{" "}
              <li className="Cinza" >{props.data.açoes_impu}</li>{" "}
              <li className="Azul" > {handlerIcon(props.data.radio_personalizada)} </li>{" "}
            </ul>
            <div>
              <p className="Text_Bottom" ></p>
            </div>
          </div>

          <div className="BoxFourr">
            <ul>
              <li className="Azul" > {handlerIcon(props.data.site_personalizado)} </li>{" "}
              <li className="Cinza" >{handlerIcon(props.data.receber_ofertas)} </li>
            </ul>
            <div>
              <p className="Text_Bottom"  >
              </p>
            </div>
          </div>

          <div className="BoxSixthv">
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

          <div className="BoxUltimo" >
            <div>
                <ul>
                  <li className="Azul">{props.data.suporte}</li>
                  <li className="Cinza">{handlerIcon(props.data.suporte_wp)}</li>
                  <li className="Azul">{handlerIcon(props.data.sala_treinamento)}</li>
                  <li className="Cinza">{props.data.horario_atendimento} (Seg-sexta)  </li>
                  <li className="Azul">{handlerIcon(props.data.plantão)}</li>
                  <li className="Cinza"> {props.data.treinamento} </li>
                </ul>
            </div>
            
            <div className="Button2">
              <div className="StylePlan">{props.data.plano}</div>
             
            </div>

          </div>
        </div>
      
      </>
    );
}

export default Collum;
