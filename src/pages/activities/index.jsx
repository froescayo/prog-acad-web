import React, { useState } from 'react';
import { 
    Button, 
    Container, 
    IconButton, 
    Typography, 
    Modal, 
    Box, 
    TextField ,
    Input
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import Campos from '../../services/procad';
import AtividadeItem from '../../components/AtividadeItem';
import { modalStyle } from './styles';
import AtividadeModal from '../../components/AtividadeModal';



const Activities = () => {

    const params = useParams();
    const [campo, setCampo] = useState(Campos.find(el => el.id == params.campoId));
    const [atividades, setAtividades] = useState(Campos.find(el => el.id == params.campoId).atividades);
    const [openModal, setOpenModal] = useState(false);
    const [atividadeSelected, setAtividadeSelected] = useState({});

    const [atividadesRealizadas, setAtividadesRealizadas] = useState([]);

    const handleAtividadesRealizadas = (atividade) => {
        let alreadyExist = atividadesRealizadas.findIndex(atv => atv.id === atividade.id);
        if(alreadyExist > -1) {
            atividadesRealizadas[alreadyExist] = atividade;
        }else {
            atividadesRealizadas.push(atividade)
        }

        console.log(atividadesRealizadas)

        
    }

    const getPontuacao = () => {
        return atividadesRealizadas.reduce((soma, atv) => {
            soma += Number(atv.pontuacao);
            return soma;
        }, 0)
    }

    const handleClose = () => {
        setOpenModal(false);
        setAtividadeSelected({});
    };

    const handleSelectItem = (atividade) => {
        setAtividadeSelected(atividade);
        setOpenModal(true);
    }

    const isDone = (id) => {
        return !!atividadesRealizadas.find(atv => atv.id === id);
    }

    return (
        <Container>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/relatorio-de-atividades">
                    <IconButton edge="start" aria-label="voltar">
                        <ArrowBack/>
                    </IconButton>
                </Link>
                <Typography variant="h6">
                    Adicionar Atividade
                </Typography>
            </div>

            <PaperContainer>
                <div style={{padding: '0 8px 8px 8px'}}>
                    <Typography>{campo.campo}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {campo.observacao}
                    </Typography>
                </div>
                <div style={{maxHeight: '400px', overflowY: 'auto'}}>
                    <div style={{padding: '0 8px'}}>
                        { atividades.map(atv => <AtividadeItem atividade={atv} key={atv.id} onSelectItem={handleSelectItem} done={isDone(atv.id)}/>) }

                    </div>
                </div>

                <div style={{marginTop: '12px', padding: '0 8px'}}>
                    <Typography>Pontuação Total: {getPontuacao()}</Typography>
                </div>
            </PaperContainer>

            <div style={{padding: '8px 0'}}>
                <Link to="/relatorio-de-atividades">
                    <Button color="default" variant="contained">Voltar</Button>
                </Link>
            </div>

            <AtividadeModal open={openModal} handleClose={handleClose} atividade={atividadeSelected} onSubmit={handleAtividadesRealizadas}/>
            
        </Container>
    );
}

export default Activities;