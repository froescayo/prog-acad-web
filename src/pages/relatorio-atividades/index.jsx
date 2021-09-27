import React from 'react';
import { 
    Button,
    Container, 
    IconButton, 
    Typography,
} from '@material-ui/core'
import { ArrowBack } from "@material-ui/icons";
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import AreaItem from '../../components/AreaItem';
import Campos from '../../services/procad';
import Activities from '../activities';


const RelatorioAtividades = () => {

    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:campoId`}>
                <Activities/>
            </Route>
            <Route path={match.path}>
                <Container>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Link to="/">
                            <IconButton edge="start" aria-label="voltar">
                                <ArrowBack/>
                            </IconButton>
                        </Link>
                        <Typography variant="h6">
                            Relatório de Atividades
                        </Typography>
                    </div>

                    <PaperContainer>
                        <div style={{maxHeight: '450px', overflowY: 'auto', padding: '0 8px', boxShadow: '0px -2px 2px rgba(0,0,0,.1) inset'}}>
                            { Campos.map(el => <AreaItem campo={el} key={el.id}/>) }
                        </div>
                    </PaperContainer>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
                        <Button variant="contained" color="primary">Gerar Relatório</Button>
                    </div>
                </Container>
            </Route>
            
        </Switch>
    );
}

export default RelatorioAtividades
