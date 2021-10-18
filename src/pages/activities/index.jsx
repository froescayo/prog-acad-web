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
import { setActivity, updateFormAnswer, getFormulary } from '../../store/reducers/formulary';
import { Snackbar, CircularProgress } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const SnackAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Activities = () => {

    const params = useParams();
    const history = useHistory();

    const [openModal, setOpenModal] = useState(false);
    const [atividadeSelected, setAtividadeSelected] = useState({});

    const [state, dispatch] = useContext(GlobalStateContext);

    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false)

    

    const campo = (state.report.fields || []).find(el => el.id === params.campoId) || {}

    useEffect(() => {

        getActivities(params.campoId, dispatch).catch(console.log);
    }, [dispatch]);

    // const [atividadesRealizadas, setAtividadesRealizadas] = useState([]);

    let fieldAnswers = (state.formulary.data || {}).dbFormularyAnswers || [].filter(ans => ans.fieldId === params.campoId)

    const handleAtividadesRealizadas = async (atividade) => {
        
        atividade.fieldId = params.campoId;
        atividade.formularyId = params.formularyId
        try {
            await updateFormAnswer(atividade, dispatch);
            setSuccess(true);
        } catch (error) {
            setErrorMessage(error.response.data.error)
			setOpen(true);
        }
        
    }

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
        setErrorMessage("");
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSuccess(false);
    };

    const getPontuacao = () => {
        // return fieldAnswers.reduce((soma, atv) => {
        //     soma += Number(atv.points);
        //     return soma;
        // }, 0)
        let soma = 0;
        fieldAnswers.forEach(fan => {
            let activity = (state.report.activities || []).find(act => fan.activityId === act.id)
            if(activity){
                const sum = Number(fan.answer[0].quantity) + Number(fan.answer[1].quantity) + Number(fan.answer[2].quantity) + Number(fan.answer[3].quantity);
                let dto = Number(sum/activity.peso);
                soma += Number((dto * activity.pontos).toFixed(2));
            }
        })
        return soma;
    }

    const handleClose = async () => {
        
        
        setOpenModal(false);
        setAtividadeSelected({});
        getFormulary(params.formularyId, dispatch).catch(console.log);
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
            {state.formulary.loading && <div style={{width: "100%", height: "100%", zIndex: 9999, top: 0, left: 0, position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,.3)"}}>
				<CircularProgress />
			</div>}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                <div>
                    <IconButton edge="start" aria-label="voltar" onClick={goBack}>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="button">
                        Relatório de Atividades
                    </Typography>
                </div>
                <Typography variant="subtitle1">
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

            <div style={{padding: '8px 0', display: 'flex', justifyContent:"center"}}>
                    <Button variant="contained" color="primary" onClick={goBack}>Confirmar</Button>
            </div>

            <AtividadeModal open={openModal} handleClose={handleClose} atividade={atividadeSelected} onSubmit={handleAtividadesRealizadas}/>
            <Snackbar open={open} autoHideDuration={3500} onClose={handleCloseSnack}>
                <SnackAlert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </SnackAlert>
            </Snackbar>
            <Snackbar open={success} autoHideDuration={3500} onClose={handleCloseSuccess}>
                <SnackAlert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Atividade foi salva!
                </SnackAlert>
            </Snackbar>
        </Container>
    );
}

export default Activities;