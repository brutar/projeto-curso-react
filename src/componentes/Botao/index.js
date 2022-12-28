import styled from "styled-components";

const BotaoCard = styled.button`
    position:relative;
    diplay:flex;
    margin:50px auto;
    border:none;

    background: #6278F7;
    mix-blend-mode: normal;
    border-radius: 10px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    height: 50px;

    text-align: center;

    color: #FFFFFF;
    &:hover{
        background: #627800;
    }
`

const Botao =(props)=>{
    return(
        <BotaoCard>{props.children}</BotaoCard>
    )
}
export default Botao;