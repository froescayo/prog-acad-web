import React from 'react';
import { 
    Container, 
    IconButton, 
    Button, 
    Typography,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    TextField
} from '@material-ui/core'
import { ArrowBack, Add, Delete } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';


const NovaProgressao = () => {

    const [solicitacao, setSolicitacao] = React.useState('female');

    const handleSolicitacao = (event) => {
        setSolicitacao(event.target.value);
    };

    return (
        <Container>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <Link to="/">
                    <IconButton edge="start" aria-label="voltar">
                        <ArrowBack/>
                    </IconButton>
                </Link>
                <Typography variant="h6">
                    Nova Progressão
                </Typography>
            </div>

            <PaperContainer>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <Typography variant="h6">
                            Nome do docente
                        </Typography>

                        <div>
                            <Typography>
                                Tipo de Solicitação
                            </Typography>

                            <FormControl component="fieldset">
                                <RadioGroup 
                                    row 
                                    aria-label="position" 
                                    name="position" 
                                    defaultValue="top"
                                    value={solicitacao} 
                                    onChange={handleSolicitacao}>
                                    <FormControlLabel value="progressao" control={<Radio color="primary" />} label="Progressão" />
                                    <FormControlLabel value="promossao" control={<Radio color="primary" />} label="Promoção" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{flex: 1}}>
                        <Typography variant="h6">
                            SIAPE
                        </Typography>

                        <div>
                            <Typography>
                                Interstício
                            </Typography>
                            
                            <div style={{display: 'flex', gap: 8}}>
                                <TextField
                                    id="date"
                                    label="Início"
                                    size="small"
                                    variant="outlined"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    id="date"
                                    label="Fim"
                                    size="small"
                                    variant="outlined"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Typography>Comissão</Typography>

                    <div style={{display: 'flex', gap: 24, marginBottom: 16}}>
                        <TextField label="Professor" />
                        <TextField label="Departamento" />
                        <TextField label="Instituto" />
                    </div>

                    <div style={{display: 'flex', gap: 24, marginBottom: 16}}>
                        <TextField label="Professor" />
                        <TextField label="Departamento" />
                        <TextField label="Instituto" />
                    </div>

                    <div style={{display: 'flex', gap: 24}}>
                        <TextField label="Professor" />
                        <TextField label="Departamento" />
                        <TextField label="Instituto" />
                    </div>
                </div>

                <div style={{width: '100%', display: 'flex', paddingTop: '24px'}}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        size="large"
                        startIcon={<Delete />}>
                        Cancelar Solicitação
                    </Button>

                    <Link to="/relatorio-de-atividades" style={{marginLeft: 'auto'}}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<Add />}
                        >
                            Relatório de Atividades
                        </Button>
                    </Link>
                </div>
            </PaperContainer>
        </Container>
    );
}

export default NovaProgressao;