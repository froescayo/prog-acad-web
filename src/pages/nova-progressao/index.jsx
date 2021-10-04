import React, { useContext } from 'react';
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
import { createFormulary, setFormulary } from '../../store/reducers/formulary';
import { GlobalStateContext } from '../../store';
import { useHistory } from 'react-router';


const NovaProgressao = () => {

	const [state, dispatch] = useContext(GlobalStateContext)

	const [solicitacao, setSolicitacao] = React.useState('female');

	const history = useHistory();

	const handleSolicitacao = (event) => {
		setSolicitacao(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const {
			tipoSolicitacao,
			dataInicio,
			dataFim,
			primeiroProfessor,
			primeiroDepartamento,
			primeiroInstituto,
			segundoProfessor,
			segundoDepartamento,
			segundoInstituto,
			terceiroProfessor,
			terceiroDepartamento,
			terceiroInstituo
		} = event.target;


		const dto = {
			type: tipoSolicitacao.value, // tipo do formulario
			period: { // periodo do formulario
				from: dataInicio.value,
				to: dataFim.value,
			},
			comission: [
				{
					professorName: primeiroProfessor.value,
					department: primeiroDepartamento.value,
					institute: primeiroInstituto.value,
				},
				{
					professorName: segundoProfessor.value,
					department: segundoDepartamento.value,
					institute: segundoInstituto.value,
				},
				{
					professorName: terceiroProfessor.value,
					department: terceiroDepartamento.value,
					institute: terceiroInstituo.value,
				},
			],
			answers: []
		}

		
		setFormulary(dto, dispatch);
		console.log(state);
		
		history.push("/relatorio-de-atividades");
		// createFormulary
	}

	return (
		<Container>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Link to="/">
					<IconButton edge="start" aria-label="voltar">
						<ArrowBack />
					</IconButton>
				</Link>
				<Typography variant="h6">
					Nova Progressão
				</Typography>
			</div>

			<PaperContainer>
				<form onSubmit={handleSubmit}>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1 }}>
						<div style={{ marginBottom: '10px' }}>
							<Typography color="textSecondary">
								Nome do Docente
							</Typography>

							<Typography variant="h6" color="textSecondary">
								Nome do docente
							</Typography>
						</div>

						<div style={{ marginBottom: '10px' }}>
							<Typography color="textSecondary">
								Tipo de Solicitação
							</Typography>

							<FormControl component="fieldset">
								<RadioGroup
									row
									aria-label="position"
									name="tipoSolicitacao"
									defaultValue="top"
									value={solicitacao}
									onChange={handleSolicitacao}>
									<FormControlLabel value="Progressao" control={<Radio color="primary" />} label="Progressão" />
									<FormControlLabel value="Promocao" control={<Radio color="primary" />} label="Promoção" />
								</RadioGroup>
							</FormControl>
						</div>
					</div>
					<div style={{ flex: 1 }}>
						<Typography color="textSecondary">
							SIAPE
						</Typography>

						<Typography variant="h6" color="textSecondary">
							XXXXXXXX
						</Typography>

						<div>
							<Typography color="textSecondary">
								Interstício
							</Typography>

							<FormControl>
								<div style={{ display: 'flex', gap: 8, marginTop: '12px' }}>

									<TextField
										id="date"
										label="Início"
										size="small"
										variant="outlined"
										type="date"
										name="dataInicio"
										InputLabelProps={{
											shrink: true,
										}}
									/>

									<TextField
										id="date"
										label="Fim"
										name="dataFim"
										size="small"
										variant="outlined"
										type="date"
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</div>
							</FormControl>
						</div>
					</div>
				</div>

				<div>
					<Typography color="textSecondary">Comissão</Typography>

					<div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
						<TextField label="Professor" name="primeiroProfessor"/>
						<TextField label="Departamento" name="primeiroDepartamento"/>
						<TextField label="Instituto" name="primeiroInstituto"/>
					</div>

					<div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
						<TextField label="Professor" name="segundoProfessor"/>
						<TextField label="Departamento" name="segundoDepartamento"/>
						<TextField label="Instituto" name="segundoInstituto"/>
					</div>

					<div style={{ display: 'flex', gap: 24 }}>
						<TextField label="Professor" name="terceiroProfessor"/>
						<TextField label="Departamento"  name="terceiroDepartamento"/>
						<TextField label="Instituto"  name="terceiroInstituo"/>
					</div>
				</div>

				<div style={{ width: '100%', display: 'flex', paddingTop: '24px' }}>
					<Button
						variant="outlined"
						color="secondary"
						size="large"
						type="button"
						startIcon={<Delete />}>
						Cancelar Solicitação
					</Button>

						<Button
							style={{ marginLeft: 'auto' }}
							variant="contained"
							color="primary"
							size="large"
							type="submit"
							startIcon={<Add />}
						>
							Relatório de Atividades
						</Button>
				</div>
				</form>
			</PaperContainer>
		</Container>
	);
}

export default NovaProgressao;