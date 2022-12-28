import styled from "styled-components";

const AreaRodape = styled.footer`
    display:flex;
    justify-content:space-around;
    position:relative;
    margin: 250px auto 0 auto;
    background: #6278F7;
    background-image:url("/imagens/fundo.png");
    background-repeat: no-repeat;
    height:213px;
`

const LogoRedeSocial = styled.div`
    position:relative;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    height:20px;
    width:200px;
    padding-top:100px;
`
const LogoOrgano = styled.div`
    width:200px;
    padding-top:80px;
    
`
const Direitos = styled.div`
    position:relative;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    height:20px;
    padding-top:100px;
    color:#fff;
    font-style: normal;
    font-weight: 400;
`

const Rodape = ()=>{
    return(
        <AreaRodape>
            <LogoRedeSocial>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="Facebook"></img>
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="Twiter"></img>
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="Instagram"></img>
                </a>
            </LogoRedeSocial>
            <LogoOrgano>
                <img src="/imagens/logo.png" alt="Logo"></img>
            </LogoOrgano>
            <Direitos>
                <p>Desenvolvido por Alura</p>
            </Direitos>
        </AreaRodape>
    )
}
export default Rodape;