import React, { useContext, useEffect } from 'react'
import { Button, Container, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PaperContainer from '../PaperContainer';
import { GlobalStateContext } from '../../store'
import { getFormularies } from '../../store/reducers/formulary';
import FormulariesTable from '../FormulariesTable';
import { useHistory } from 'react-router';

export default function ProgressionList() {

    const history = useHistory();
    const [state, dispatch] = useContext(GlobalStateContext);

    useEffect(() => {
        getFormularies(dispatch).catch(err => {
            history.push("/")
        })
    }, [dispatch])


    return (
        <Container>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '24px'}}>
            <Link to="/nova-solicitacao">
            <Button
                style={{marginLeft: 'auto'}}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Add />}
            >
                Nova Solicitação
            </Button>
            </Link>
        </div>

        <div>
                <Typography variant="h6" style={{marginBottom: "20px"}}>Lista de Solicitações</Typography>
                { state.formulary.list.length ? 
                    <FormulariesTable list={state.formulary.list}/>
                 : 
                <div>
                    <div style={{textAlign: 'center', marginTop: '10px'}}>
                        <Typography variant="body1" color="textSecondary">Nenhuma solicitação em progresso</Typography>
                    </div>
                </div>
                }
        </div>

        </Container>
    )
}
