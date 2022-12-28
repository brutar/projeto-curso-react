import styled from "styled-components";

const AgrupaLista = styled.div`
        position:relative;
        top:50px;
        width: 100%;
        margin: 10px auto;
        margin-botom:10px;
`
const EstiloLabelLista = styled.label`
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
const SelectListaSuspensa = styled.select`
        background: #FFFFFF;
        mix-blend-mode: normal;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        border-radius: 0px;
        width:100%;
        height: 60px;
        border:none;
        box-sizing:border-box;
        margin-top:;
`

const ListaSuspensa = (props)=>{
    return(
        <AgrupaLista>
            <EstiloLabelLista>{props.label}</EstiloLabelLista>
            <SelectListaSuspensa onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {return <option>{item}</option>})}
            </SelectListaSuspensa>
        </AgrupaLista>
    )
} 
export default ListaSuspensa;