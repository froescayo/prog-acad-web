import React, { useContext, useEffect } from 'react';
import { 
    Button,
    Container, 
    IconButton, 
    Typography,
} from '@material-ui/core'
import { ArrowBack } from "@material-ui/icons";
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import AreaItem from '../../components/AreaItem';
import Activities from '../activities';
import { getFields } from '../../store/reducers/report';
import { GlobalStateContext } from '../../store';
import { createFormulary, getFormulary } from '../../store/reducers/formulary';
import { Snackbar, Alert } from '@mui/material';

const MuiAlert = React.forwardRef(function Alert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Comission = ({list}) => {
    return (
        <>
        {list.map((comis, idx) => <Typography variant="body1" color="textSecondary" key={idx}>
            {`${comis.professorName}, ${comis.institute}, ${comis.department}`}
        </Typography>)}
        
        </>
    )
}


const RelatorioAtividades = () => {
    
    const [state, dispatch] = useContext(GlobalStateContext);
    const match = useRouteMatch();
    const params = useParams();

    useEffect(() => {

        //Chama os campos
        getFormulary(params.formularyId, dispatch);
        getFields(dispatch);
    }, [dispatch])

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };


    const saveFormulary = () => {
        // let dto = state.formulary.data || {}
        // createFormulary(dto, dispatch).then(r => {
        //     setOpen(true);
        // })
    }

    let comissao = ((state.formulary.data || {}).dbFormulary || {}).comission || []

    return (
        <Switch>
            <Route path={`${match.path}/campo/:campoId`}>
                <Activities/>
            </Route>
            <Route exact path={match.path}>
                <Container>
                    
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div>
                            <Link to="/">
                                <IconButton edge="start" aria-label="voltar">
                                    <ArrowBack/>
                                </IconButton>
                            </Link>
                            <Typography variant="button">
                                Lista de Solicitações
                            </Typography>

                        </div>
                        <div>
                            <Typography variant="subtitle1" >
                                Relatório de Atividades
                            </Typography>

                        </div>
                    </div>

                    <PaperContainer>
                        <div>
                            {/* state.formulary.data.dbFormulary 
                                .type 
                                .comission
                                .from
                                .to
                                 */}
                            <Typography variant="body1" color="textSecondary">
                                Tipo de Solicitação: {((state.formulary.data || {}).dbFormulary || {}).type}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Interstício: {`${new Date(((state.formulary.data || {}).dbFormulary || {}).from).toLocaleDateString()} a ${new Date(((state.formulary.data || {}).dbFormulary || {}).to).toLocaleDateString()}`}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Comissão:
                            </Typography>
                            
                            <Comission list={comissao} />

                        </div>

                        <div style={{maxHeight: '450px', overflowY: 'auto', padding: '0 8px', boxShadow: '0px -2px 2px rgba(0,0,0,.1) inset'}}>
                            {  (state.report.fields || []).map(el => <AreaItem campo={el} key={el.id}/>) }
                        </div>
                    </PaperContainer>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
                        <Button variant="contained" color="primary" onClick={saveFormulary}>Gerar Relatório</Button>
                    </div>
                    
                    <Snackbar open={open} autoHideDuration={3500} onClose={handleClose} >
                        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Relatório criado com sucesso!
                        </MuiAlert>
                    </Snackbar>
                </Container>
            </Route>
            
        </Switch>
    );
}

export default RelatorioAtividades
