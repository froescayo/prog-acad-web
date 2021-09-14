import React from 'react'
import { Button, Container, Card, CardContent, Typography, List, ListItem } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PaperContainer from '../PaperContainer';

export default function ProgressionList() {
    return (
        <Container>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '24px'}}>
            <Link to="/nova-progressao">
            <Button
                style={{marginLeft: 'auto'}}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Add />}
            >
                Nova Progressão
            </Button>
            </Link>
        </div>

        <PaperContainer>
                <Typography variant="h6">Progression List</Typography>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <Typography variant="h6" color="disabled">Nenhuma solicitação em progresso</Typography>
                </div>
        </PaperContainer>

        </Container>
    )
}
