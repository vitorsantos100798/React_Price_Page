import React from 'react';
import "./header.css"

const Header = (props) => {
    return (
        <>
            <div className="Container">
                <button  onClick={() => props.setTable(0)} className={props.table === 0 ?"BtnOne":"Btn"}> 
                MINHA AGÊNCIA 
                
                </button>
                <button onClick={() => props.setTable(1)} className={props.table === 1 ?"BtnOne":"Btn"}>
                    PLATAFORMA 
        
                </button>
            </div>
        </>
    );
}

export default Header;