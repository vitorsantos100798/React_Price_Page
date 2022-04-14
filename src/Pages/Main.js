import React from 'react';
import "./Main.css";
import { useState } from 'react';
import Header from '../Components/Header/header.js';
import CardInfoLeft from '../Components/CardInfoLeft/cardinfoleft.js';
import Collum from "../Components/Collum/collum.js";
import CardInfo from "../Components/Plataforma/Card Info/CardInfo";
import CardColuna from "../Components/Plataforma/Coluna/Coluna.js";
import BoxResponsive from "../Components/Responsive/Responsive.js";
import Dropdown from "../Components/Dropdown/Dropdown.js";
import ResponsivoPlataforma from "../Components/Plataforma/ResposivoPlataforma/ResposivoPlataforma"
const Coluna = [
    {
        plano: "PADRÃO",
        ideal_para: "Para quem quer começar a fazer propagandas e ofertas e gerar relacionamento com os clientes e moradores da região.",
        ações_semanais: 1,
        total_ações: 4,
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 4,
        radio_personalizada: false,
        site_personalizado: false,
        receber_ofertas: false,
        criação_redes_sociais: "Adicional",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Chat e Email",
        suporte_wp: false,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: false,
        treinamento: "Adicional",
        metodologia:"Uso da Metologia",
       
      
    },
    {
        plano: "AVANÇADO",
        ideal_para: "Ideal para quem já faz propaganda e ofertas e precisa aumentar a frequência e o alcance das suas promoções e incentivar a recorrêcia de compra dos clientes.",
        ações_semanais: 2,
        total_ações: 8,
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 12,
        radio_personalizada: false,
        site_personalizado: false,
        receber_ofertas: false,
        criação_redes_sociais: "Adicional",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Telefone Chat e Email",
        suporte_wp: true,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: false,
        treinamento: "Adicional",
        metodologia: "Datasales de Propagandas",
        display: "none",
        margin: "31.7rem",
        
        
        
        
    },
    {
        plano: "EXPERT",
        ideal_para: "Melhor opção para quem quer crescer rápido e precisa manter ofertas com relevante frequência.",
        ações_semanais: 3,
        total_ações: 12,
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 20,
        radio_personalizada: true,
        site_personalizado: true,
        receber_ofertas: true,
        criação_redes_sociais: "Grátis",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Telefone Chat e Email",
        suporte_wp: true,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: true,
        treinamento: "2x",
        metodologia: "E Ofertas",
        display: "none",
        margin: "31.7rem",
        
        
        
        
    },
]
const Plataforma = [
    {
        plano: "PADRÃO",
        ideal_para: "Para quem quer começar a fazer propagandas e ofertas e gerar relacionamento com os clientes e moradores da região.",
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 4,
        radio_personalizada: false,
        site_personalizado: false,
        receber_ofertas: false,
        criação_redes_sociais: "Adicional",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Chat e Email",
        suporte_wp: false,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: false,
        treinamento: "Adicional",
        garantia_arrependimento: "7 dias",
        grantia_satisfacao: "N/A",
        condições: "",
        tamanhofont: "0.8rem",
        MargemdagarantiaTop: "30px",
        MargemdagarantiaAzulBottom:"10px",
    },
    {
        plano: "AVANÇADO",
        ideal_para: "Ideal para quem já faz propaganda e ofertas e precisa aumentar a frequência e o alcance das suas promoções e incentivar a recorrêcia de compra dos clientes.",
        ações_semanais: 2,
        total_ações: 8,
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 12,
        radio_personalizada: false,
        site_personalizado: false,
        receber_ofertas: false,
        criação_redes_sociais: "Adicional",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Telefone Chat e Email",
        suporte_wp: true,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: false,
        treinamento: "Adicional",
        garantia_arrependimento: "7 dias",
        grantia_satisfacao: "Sim, nos modelos de contrato semestral e anual",
        condições:<>Confira regras e condições em<a href="https://datasales.io/garantiaplataforma">https://datasales.io/garantiaplataforma</a></> ,
        tamanhofont: "0.8rem",
        MargemdagarantiaTop: "60px",
        tamanhofontCondiçoes:"0.8rem",
        MargemdagarantiaAzulBottom:"40px",
    },
    {
        plano: "EXPERT",
        ideal_para: "Melhor opção para quem crescer rápido e precisa manter ofertas com relevante frequência.",
        ações_semanais: 3,
        total_ações: 12,
        estudio_criação: "Ilimitado",
        automatizações: "Facebook, Intagram e Whatsapp",
        artes: "Posts, Stories, Encartes, Cartazes...",
        canal_wats:"1 canal",
        açoes_impu: 20,
        radio_personalizada: true,
        site_personalizado: true,
        receber_ofertas: true,
        criação_redes_sociais: "Grátis",
        criação_modelos_personalizados: "Adicional",
        criação_logo: "Adicional",
        suporte: " Telefone Chat e Email",
        suporte_wp: true,
        sala_treinamento: true,
        horario_atendimento: "09h Às 18h",
        plantão: true,
        treinamento: "2x",
        garantia_arrependimento: "7 dias",
        grantia_satisfacao: "Sim, nos modelos de contrato semestral e anual",
        condições:<>Confira regras e condições em <a href="https://datasales.io/garantiaplataforma">https://datasales.io/garantiaplataforma</a>  </> ,
        tamanhofont: "0.8rem",
        MargemdagarantiaTop: "60px",
        tamanhofontCondiçoes:"0.8rem",
        MargemdagarantiaAzulBottom:"40px",
        
    },
]

const Valores = [
[
    {
        mes: "R$ 699,00/mês",
        contrato: "R$ 699,00",
        economia: "R$ 0,00 em 1 ano",
    },
    {
        mes: "R$ 949/mês",
        contrato: "R$ 949,00",
        economia: "R$ 0,00 em 1 ano"
    },
    {
        mes: "R$ 1.249,00/mês",
        contrato: "R$ 1.249,00",
        economia: "R$ 0,00 em 1 ano"
    },
],
[
    {
        mes: "R$ 629,10/mês",
        contrato: "R$ 629,10",
        economia: "R$ 838,80 em 1 ano"
    },
    {
        mes: "R$ 854,10/mês",
        contrato: "R$ 854,10/mês",
        economia: "R$ 1.138,80 em 1 ano"
    },
    {
        mes: "R$ 1.124,10/mês",
        contrato: "R$ 1.124,10",
        economia: "R$ 1.498,80 em 1 ano"
    }
],
[
    {
        mes: "R$ 419,40/mês",
        contrato: "R$ 5.032,80",
        economia: "R$ 3.355,20 em 1 ano"
    },
    {
        mes: "R$ 569,40/mês",
        contrato: "R$ 6.832,80",
        economia: "R$ 4.555,20 em 1 ano"
    },
    {
        mes: "R$ 749,40/mês",
        contrato: "R$ 8.992,80",
        economia: "R$ 5.995,20 em 1 ano"
    }
],
[
    {
        mes: "R$ 629,10/mês",
        contrato: "R$ 7.549,20",
        economia: "R$ 838,80 em 1 ano"
    },
    {
        mes: "R$ 854,10/mês",
        contrato: "R$ 10.249,20",
        economia: "R$ 1.138,80 em 1 ano"
    },
    {
        mes: "R$ 1.124,10/mês",
        contrato: "R$ 13.489,20",
        economia: "R$ 1.498,80 em 1 ano"
    }
],
[
        {
        mes: "R$ 559,20/mês",
        contrato: "R$ 3.355,20",
        economia: "R$ 1.677,60 em 1 ano"
    },
    {
        mes: "R$ 759,20/mês",
        contrato: "R$ 4.555,20",
        economia: "R$ 2.277,60 em 1 ano"
    },
    {
        mes: "R$ 999,20/mês",
        contrato: "R$ 5.995,20",
        economia: "R$ 2.997,60 em 1 ano"
    },
    
],

]

const Valores2 = [
    [
        {
            mes: "R$ 329,00/mês",
            contrato: "R$ 329,00",
            economia: "R$ 0,00 em 1 ano",
        },
        {
            mes: "R$ 599/mês",
            contrato: "R$ 599,00",
            economia: "R$ 0,00 em 1 ano"
        },
        {
            mes: "R$ 799,00/mês",
            contrato: "R$ 799,00",
            economia: "R$ 0,00 em 1 ano"
        },
    ],
    [
        {
            mes: "R$ 296,10/mês",
            contrato: "R$ 296,10",
            economia: "R$ 394,80 em 1 ano"
        },
        {
            mes: "R$ 539,10/mês",
            contrato: "R$ 539,10/mês",
            economia: "R$ 718,80 em 1 ano"
        },
        {
            mes: "R$ 719,10/mês",
            contrato: "R$ 719,10",
            economia: "R$ 958,80 em 1 ano"
        }
    ],
    [
        {
            mes: "R$ 197,40/mês",
            contrato: "R$ 2.368,80",
            economia: "R$ 1.579,20 em 1 ano"
        },
        {
            mes: "R$ 359,40/mês",
            contrato: "R$ 4.312,80",
            economia: "R$ 2.875,20 em 1 ano"
        },
        {
            mes: "R$ 479,40/mês",
            contrato: "R$ 5.752,80",
            economia: "R$ 3.835,20 em 1 ano"
        }
    ],
    [
        {
            mes: "R$ 296,10/mês",
            contrato: "R$ 3.553,20",
            economia: "R$ 394,80 em 1 ano"
        },
        {
            mes: "R$ 539,10/mês",
            contrato: "R$ 6.469,20",
            economia: "R$ 718,80 em 1 ano"
        },
        {
            mes: "R$ 719,10/mês",
            contrato: "R$ 719,10",
            economia: "R$ 958,80 em 1 ano"
        }
    ],
    [
            {
            mes: "R$ 263,20/mês",
            contrato: "R$ 1.579,20",
            economia: "R$ 789,60 em 1 ano"
        },
        {
            mes: "R$ 479,20/mês",
            contrato: "R$ 2.875,20",
            economia: "R$ 1.437,60 em 1 ano"
        },
        {
            mes: "R$ 639,20/mês",
            contrato: "R$ 3.835,20",
            economia: "R$ 1.917,60 em 1 ano"
        },
        
    ],
    
    ]
    

const desconto = [ " ","10%","40%","10%","20%",]

const Main = () => {
    const [ table,setTable] = useState(0);

    const [ valor, setValor] = useState(0);
    return (
        <>
            <div className="ContainerHeader">
                <Header table={table} setTable={setTable}/>
            </div>
            <div className="ContainerHeader" >
                <Dropdown  desconto={desconto[valor]}  setValor={setValor} />
            </div>
            |<div className="ContainerCollum">
                {table === 0 ? (
                    <>
                    <BoxResponsive table={table} valor={Valores[valor][0]}   data={Coluna[0]}  />
                    <BoxResponsive table={table} valor={Valores[valor][1]}  data={Coluna[1]}  />
                    <BoxResponsive table={table} valor={Valores[valor][2]}  data={Coluna[2]}  />
                    <CardInfoLeft/>
                    <Collum table={table} valor={Valores[valor][0]} data={Coluna[0]}/>
                    <Collum table={table} valor={Valores[valor][1]} data={Coluna[1]}/>
                    <Collum table={table} valor={Valores[valor][2]} data={Coluna[2]}/>
                    </>
                ):(
                    <>
                    <div className="ContainerPlataforme">
                    <ResponsivoPlataforma table={table} valor={Valores2[valor][0] }  data={Plataforma[0]} />
                    <ResponsivoPlataforma table={table} valor={Valores2[valor][0] }  data={Plataforma[1]} />
                    <ResponsivoPlataforma table={table} valor={Valores2[valor][0] }  data={Plataforma[2]} />
                     <CardInfo/>
                     <CardColuna   valor={Valores2[valor][0]} data={Plataforma[0]}/>
                     <CardColuna   valor={Valores2[valor][1]} data={Plataforma[1]}/>
                     <CardColuna   valor={Valores2[valor][2]} data={Plataforma[2]}/>
                     </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Main;