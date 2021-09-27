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
import { modalStyle } from './styles';
import PaperContainer from '../PaperContainer';
import { HighlightOff, CloudUpload } from "@material-ui/icons"


const headerContainer = {
    display: 'flex',
}

const AtividadeModal = ({open, handleClose, atividade, onSubmit}) => {

    const [semestre1, setSemestre1] = useState(0);
    const [semestre2, setSemestre2] = useState(0);
    const [semestre3, setSemestre3] = useState(0);
    const [semestre4, setSemestre4] = useState(0);

    const getTotal = () => {
        const sum = semestre1 + semestre2 + semestre3 + semestre4;
        let dto = sum/atividade.peso;
        return (dto * atividade.pontos).toFixed(2);
    }

    const handleSemestreInput = (value, semestre) => {
        let dto = Number(value);
        if(Number.isNaN(dto) || dto < 0){
            dto = 0;
        }
        semestre(dto);
    }

    const onClose = () => {
        setSemestre1(0);
        setSemestre2(0);
        setSemestre3(0);
        setSemestre4(0);
        handleClose()
    }

    const handleSubmit = () => {
        const dto = {...atividade, pontuacao: getTotal()}
        onSubmit(dto);
        onClose();
    }

    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Container>
                <div style={{marginTop: '10%'}}>
                <PaperContainer>

                    <div style={headerContainer}>
                        <div style={{flex: 1}}>
                            <Typography id="modal-modal-title" variant="h6" component="h3">
                            {atividade.atividade}
                            </Typography>
                        </div>
                        
                        <div style={{width: 'maxContent', marginLeft: 8}}>
                            <IconButton 
                                onClick={handleClose}
                                aria-label="close" 
                                style={{padding: 6}} 
                                color="secondary"
                            >
                                <HighlightOff />
                            </IconButton>
                        </div>
                    </div>
                    <div style={{marginTop: 36}}>
                        
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 2}}>
                                <Typography color="textSecondary" variant="body2">
                                    Quantidade durante o período: 2020 a 2021
                                </Typography>
                                <div style={{display: 'flex', gap: 8, marginTop: 8}}>
                                    <TextField 
                                        variant="outlined" 
                                        label="2020.1" 
                                        type="number" 
                                        size="small"
                                        value={semestre1}
                                        onChange={(event) => handleSemestreInput(event.target.value, setSemestre1)}/>

                                    <TextField 
                                        variant="outlined" 
                                        label="2020.2" 
                                        type="number" 
                                        size="small"
                                        value={semestre2}
                                        onChange={(event) => handleSemestreInput(event.target.value, setSemestre2)}/>

                                    <TextField 
                                        variant="outlined" 
                                        label="2021.1" 
                                        type="number" 
                                        size="small"
                                        value={semestre3}
                                        onChange={(event) => handleSemestreInput(event.target.value, setSemestre3)}/>

                                    <TextField 
                                        variant="outlined" 
                                        label="2021.2" 
                                        type="number" 
                                        size="small"
                                        value={semestre4}
                                        onChange={(event) => handleSemestreInput(event.target.value, setSemestre4)}/>

                                </div>
                            </div>
                        
                            <div style={{flex: 1}}>
                                <div style={{margin: '0 auto', width: 'max-content'}}>
                                    <Typography color="textSecondary" variant="body2">Referencia</Typography>
                                    <div style={{marginTop: 8, textAlign: 'center'}}>
                                        <small>{atividade.label}</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div style={{marginTop: 24, display: 'flex', gap: 36}}>
                            <div>

                                <Typography color="textSecondary" variant="body2">Comprovante de atividades</Typography>
                                
                                <label 
                                    htmlFor="comprovante-atividade" 
                                    style={{
                                        background: '#c4cccb', 
                                        padding: 10, 
                                        borderRadius: 4, 
                                        display: 'inline-block', 
                                        textAlign: 'center',
                                        marginTop: 8
                                    }}>
                                    <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                                    
                                    <div>
                                        <Input 
                                            accept="application/pdf,application/vnd.ms-excel" 
                                            id="comprovante-atividade" 
                                            type="file"
                                            style={{display: 'none'}}
                                        />

                                        <Button variant="contained" component="span" size="small" color="primary">
                                            Upload
                                        </Button>
                                    </div>
                                    
                                    
                                    <Typography color="textSecondary">
                                        Anexar Documento
                                    </Typography>
                                    <CloudUpload/>

                                    </div>
                                    
                                </label>
                            </div>

                            <div>
                                <Typography color="textSecondary" variant="body2">Total de pontos</Typography>
                                <div style={{marginTop: 8, textAlign: 'center'}}>
                                    <small>{getTotal()}</small>
                                </div>
                            </div>

                        </div>

                        <div>
                            <Button variant="contained" color="primary" style={{marginLeft: 'auto', display: 'block'}} onClick={handleSubmit}>Salvar</Button>
                        </div>
                    </div>
                </PaperContainer>
                </div>
            </Container>
        </Modal>
    );
}

export default AtividadeModal;