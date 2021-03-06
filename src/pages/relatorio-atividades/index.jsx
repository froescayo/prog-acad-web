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
import VisualizarProgresso from '../visualizarProgresso';
import FieldsTable from '../../components/FieldsTable';

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
        getFormulary(params.formularyId, dispatch).catch(console.log);
        getFields(dispatch).catch(console.log);
    }, [dispatch])

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };


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
                                Lista de Solicita????es
                            </Typography>

                        </div>
                        <div>
                            <Typography variant="subtitle1" >
                                Relat??rio de Atividades
                            </Typography>

                        </div>
                    </div>

                    <div>
                        <div style={{display:'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                            <div>
                                <Typography variant="body1" color="textSecondary">
                                    Tipo de Solicita????o: {((state.formulary.data || {}).dbFormulary || {}).type}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Interst??cio: {`${new Date(((state.formulary.data || {}).dbFormulary || {}).from).toLocaleDateString()} a ${new Date(((state.formulary.data || {}).dbFormulary || {}).to).toLocaleDateString()}`}
                                </Typography>
                                
                            </div>

                            <div style={{display:'flex'}}>
                                <Typography variant="body1" color="textSecondary">
                                    Comiss??o:
                                </Typography>
                                <div style={{marginLeft: '8px'}}>
                                {comissao.length ? <Comission list={comissao} /> : <Typography variant="body1" color="textSecondary">&nbsp;N/A</Typography>}
                                </div>
                            </div>
                        </div>

                        <FieldsTable list={(state.report.fields || [])}/>
                        {/* <div style={{maxHeight: '450px', overflowY: 'auto', padding: '0 8px', boxShadow: '0px -2px 2px rgba(0,0,0,.1) inset'}}>
                            {  (state.report.fields || []).map(el => <AreaItem campo={el} key={el.id}/>) }
                        </div> */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
                        <Link to={`${match.url}/progresso`}>
                            <Button variant="contained" color="primary" >Visualizar Progresso</Button>
                        </Link>
                    </div>
                    
                    <Snackbar open={open} autoHideDuration={3500} onClose={handleClose} >
                        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Relat??rio criado com sucesso!
                        </MuiAlert>
                    </Snackbar>
                </Container>
            </Route>

            <Route path={`${match.path}/progresso`}>
                <VisualizarProgresso/>
            </Route>
        </Switch>
    );
}

export default RelatorioAtividades
