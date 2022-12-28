import styled from "styled-components";

const BoxColaborador = styled.div`
    width:280px;  
      
`
const CabecalhoColaborador = styled.div`
    background-color:#f0f0f0;
    border-radius:10px 10px 0 0;
    box-shadow:5px 5px 15px rgba(0,0,0,0.08);
`
const RodapeColaborador = styled.div`
    background:#ffffff;
    box-shadow:5px 5px 15px rgba(0,0,0,0.08);
    border-radius: 0 0 10px 10px; 
    padding-top:60px;
    padding-bottom:10px;
    h4{
        color: #627BF7;
        font-size:18px;
        line-height: 20px;
        font-weight:bold;
        margin-bottom:5px;
    }
    h5{
        font-size:18px;
        line-height: 22px;
        color:#212121;
        padding:0 10px;
    }
`
const ImagemColaborador = styled.img`
    border-radius:50%;
    width:100px;
    position:relative;
    bottom:-50px;
`
const Colaborador = ({imagem, nome, cargo, corDeFundo})=>{
    return(
        <BoxColaborador>
            <CabecalhoColaborador style={{backgroundColor:corDeFundo}}>
                <ImagemColaborador src={imagem}></ImagemColaborador>
            </CabecalhoColaborador>
            <RodapeColaborador>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </RodapeColaborador>
        </BoxColaborador>
    )
}
export default Colaborador;