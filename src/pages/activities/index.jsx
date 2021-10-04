import React, { useEffect, useState, useContext } from 'react';
import { 
    Button, 
    Container, 
    IconButton, 
    Typography
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import Campos from '../../services/procad';
import AtividadeItem from '../../components/AtividadeItem';
import { modalStyle } from './styles';
import AtividadeModal from '../../components/AtividadeModal';
import { getActivities } from '../../store/reducers/report';
import { GlobalStateContext } from '../../store';
import { setActivity } from '../../store/reducers/formulary';



const Activities = () => {

    const params = useParams();
    const [atividades, setAtividades] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [atividadeSelected, setAtividadeSelected] = useState({});

    const [state, dispatch] = useContext(GlobalStateContext);

    const campo = (state.report.fields || []).find(el => el.id === params.campoId) || {}

    useEffect(() => {

        getActivities(params.campoId, dispatch);
    }, []);

    const [atividadesRealizadas, setAtividadesRealizadas] = useState([]);

    const handleAtividadesRealizadas = (atividade) => {
        let alreadyExist = ((state.formulary.data || {}).answers || []).findIndex(atv => atv.activityId === atividade.activityId);
        if(alreadyExist > -1) {
            // atividadesRealizadas[alreadyExist] = atividade;
        }else {
            setActivity(atividade, dispatch);
        }
        console.log(atividade)
        console.log(state)
        
    }

    const getPontuacao = () => {
        return (((state.formulary.data || {}).answers[0] || []).answer || []).reduce((soma, atv) => {
            soma += Number(atv.points);
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

    const isDone = (activityId) => {
        return !!((state.formulary.data || {}).answers || []).find(atv => atv.activityId === activityId);
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
                    <Typography>{campo.observacao}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {}
                    </Typography>
                </div>
                <div style={{maxHeight: '400px', overflowY: 'auto'}}>
                    <div style={{padding: '0 8px'}}>
                        { (state.report.activities || []).map(atv => <AtividadeItem atividade={atv} key={atv.id} onSelectItem={handleSelectItem} done={isDone(atv.id)}/>) }

                    </div>
                </div>

                <div style={{marginTop: '12px', padding: '0 8px'}}>
                    <Typography>Pontuação Total: {getPontuacao()}</Typography>
                </div>
            </PaperContainer>

            <div style={{padding: '8px 0', display: 'flex'}}>
                <Link to="/relatorio-de-atividades" style={{margin: '0 auto', display:'block'}}>
                    <Button color="default" variant="contained" color="primary">Confirmar</Button>
                </Link>
            </div>

            <AtividadeModal open={openModal} handleClose={handleClose} atividade={atividadeSelected} onSubmit={handleAtividadesRealizadas}/>
            
        </Container>
    );
}

export default Activities;