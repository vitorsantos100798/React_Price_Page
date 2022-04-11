import React from 'react';
import {  useState } from 'react';      
import "./Dropdown.css";


   


const Dropdown = (props) => {
    
    return (
        <>
            <div className="ContainerDropdown">
                <div className="TextDropdown">
                    <p>Forma De Pagamento em Nossos</p>
                    <p>Economia De</p>
                </div>
                <div className="Dropdown"  >
                    <div class="navbar">
                        <div class="dropdown">
                            <button class="dropbtn">PLANOS
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a onClick={() => props.setValor(0)}>Mensal No Boleto</a>
                                <a onClick={() => props.setValor(1)}>Mensal No Cartão</a>
                                <a onClick={() => props.setValor(2)}>Anual No Cartão </a>
                                <a onClick={() => props.setValor(3)}>Anual No Boleto</a>
                                <a onClick={() => props.setValor(4)}>Semestral no Cartão</a>
                            </div>
                        </div>
                    </div>


                    <div className="Porcentagem" >
                         <span>{props.desconto}</span>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Dropdown;