import styled from "styled-components";
import Colaborador from "../Colaborador";

const SectionTime = styled.section`
    position:relative;
    top:250px;
    text-align:center;
    padding:32px;
    background-color: ${props => props.primary ? props.corPrimaria:props.corSecundaria};
    h3{
        font-size:32px;
        /* border-bottom: 4px solid #57C278;
        display:inline-block; */
        margin-bottom:10px;
    }
    span{
        position:relative;
        border: 4px solid;
        display:inline-block;
        width:40px;
        padding:0px;
    }
`
const Colaboradores = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:32px;
`
const Time = (props)=>{
    return(
        props.colaboradores.length > 0 && <SectionTime style={{backgroundColor:props.corSecundaria}}>
            <h3>{props.nome}</h3>
            <span style={{borderColor:props.corPrimaria, backgroundColor:props.corPrimaria}}></span>
            <Colaboradores>
                {props.colaboradores.map(
                    colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />
                )}
            </Colaboradores>
        </SectionTime>
    )
}
export default Time;