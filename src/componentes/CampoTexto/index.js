import styled from "styled-components";

const EstiloCampoTexto = styled.div`
    position:relative;
    top:50px;
    width: 100%;
    margin: 10px auto;
    margin-botom:10px;
 
`
const EstiloLabel = styled.label`
    font-size: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #212121;
    

`
const EstiloInputCampoTexto = styled.input`
    background: #FFFFFF;
    mix-blend-mode: normal;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    width:100%;
    height: 60px;
    border:none;
    box-sizing:border-box;
`


const CampoTexto = (props)=> {

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value);
    }
    return(
        <EstiloCampoTexto>
            <EstiloLabel>{props.label}</EstiloLabel>
            <EstiloInputCampoTexto value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></EstiloInputCampoTexto>
        </EstiloCampoTexto>
    )
}
export default CampoTexto;