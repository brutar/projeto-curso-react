import { useState } from "react"
import styled from "styled-components"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"

const EstiloCard = styled.section`
        position:relative;
        width: 80%;
        top:100px;

        margin: 0 auto;

        background: #F7F7F7;
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
        border-radius: 20px;

        form{
            position:relative;
            width: 80%;
            margin: 0 auto 0 auto;
            justify-content:center;
        }
`
const TituloHdois = styled.h2`
    display:flex;
    text-align:center;
    max-width: 100%;
    line-height: 43px;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto 0 auto;
    padding-top:50px;
`

export const Card = (props)=>{
   

     // let valor = "Guilherme Silveira";
     const [nome, setNome] = useState('');
     const [cargo, setCargo] = useState('');
     const [imagem, setImagem] = useState('');
     const [time, setTime] = useState('');

    const aoSalvar = (event)=>{
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }
   

    return(
        <EstiloCard>
            <form onSubmit={aoSalvar}>
                <TituloHdois>Preencha os campos dos colaboradores</TituloHdois>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado = {valor => setCargo(valor)}
                    />
                    
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Endereço da URL de sua imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomeDoTime} 
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </EstiloCard>
    )
}