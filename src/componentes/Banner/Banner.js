import styled from "styled-components";

const ImagemBanner = styled.img`
    width:100%;
    backgroung-color: #6278F7;
    text-align:center;
`

function Banner(){
    //isso é o JSX
    return(
        <header>
            <ImagemBanner src="/imagens/banner.png" alt="Banner da pagina principal"></ImagemBanner>
        </header>
    )
}
export default Banner;