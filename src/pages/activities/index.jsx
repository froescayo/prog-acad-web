import React, { useEffect, useState, useContext } from 'react';
import { 
    Button, 
    Container, 
    IconButton, 
    Typography
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams, useHistory } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import AtividadeItem from '../../components/AtividadeItem';
import AtividadeModal from '../../components/AtividadeModal';
import { getActivities } from '../../store/reducers/report';
import { GlobalStateContext } from '../../store';
import { setActivity, updateFormAnswer } from '../../store/reducers/formulary';



const Activities = () => {

    const params = useParams();
    const history = useHistory();

    const [openModal, setOpenModal] = useState(false);
    const [atividadeSelected, setAtividadeSelected] = useState({});

    const [state, dispatch] = useContext(GlobalStateContext);

    const campo = (state.report.fields || []).find(el => el.id === params.campoId) || {}

    useEffect(() => {

        getActivities(params.campoId, dispatch);
    }, [dispatch]);

    // const [atividadesRealizadas, setAtividadesRealizadas] = useState([]);

    let fieldAnswers = (state.formulary.data || {}).dbFormularyAnswers || [].filter(ans => ans.fieldId === params.campoId)

    const handleAtividadesRealizadas = async (atividade) => {
        
        atividade.fieldId = params.campoId;
        atividade.formularyId = params.formularyId
        await updateFormAnswer(atividade, dispatch);
        
    }

    const getPontuacao = () => {
        // return fieldAnswers.reduce((soma, atv) => {
        //     soma += Number(atv.points);
        //     return soma;
        // }, 0)
        let soma = 0;
        fieldAnswers.forEach(fan => {
            let activity = (state.report.activities || []).find(act => fan.activityId === act.id)
            const sum = Number(fan.answer[0].quantity) + Number(fan.answer[1].quantity) + Number(fan.answer[2].quantity) + Number(fan.answer[3].quantity);
            let dto = Number(sum/activity.peso);
            soma += Number((dto * activity.pontos).toFixed(2));
        })
        console.log("[SOMA]", soma)
        return soma;
    }

    const handleClose = () => {
        setOpenModal(false);
        setAtividadeSelected({});
    };

    const handleSelectItem = (atividade) => {
        let answers = fieldAnswers.find(act => act.activityId === atividade.id) || {};
        setAtividadeSelected({...atividade, answers});
        setOpenModal(true);
    }

    const isDone = (activityId) => {
        return !!fieldAnswers.find(atv => atv.activityId === activityId);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <Container>
            <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton edge="start" aria-label="voltar" onClick={goBack}>
                        <ArrowBack/>
                    </IconButton>
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
                    <Button variant="contained" color="primary">Confirmar</Button>
                </Link>
            </div>

            <AtividadeModal open={openModal} handleClose={handleClose} atividade={atividadeSelected} onSubmit={handleAtividadesRealizadas}/>
            
        </Container>
    );
}

export default Activities;