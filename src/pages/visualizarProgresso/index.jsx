import React, { useContext, useEffect } from 'react';
import {
	Button,
	Container,
	IconButton,
	Typography,
} from '@material-ui/core'
import { ArrowBack } from "@material-ui/icons";
import { Link, Switch, Route, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import AreaItem from '../../components/AreaItem';
import Activities from '../activities';
import { getFields, getActivitiesCompleted } from '../../store/reducers/report';
import { GlobalStateContext } from '../../store';
import { createFormulary, getFormulary } from '../../store/reducers/formulary';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import ProgressTable from '../../components/ProgressTable';

const Comission = ({list}) => {
	return (
			<>
			{list.map((comis, idx) => <Typography variant="body1" color="textSecondary" key={idx}>
					{`${comis.professorName}, ${comis.institute}, ${comis.department}`}
			</Typography>)}
			
			</>
	)
}


const VisualizarProgresso = () => {

	const [state, dispatch] = useContext(GlobalStateContext);
	const match = useRouteMatch();
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		let answers = (state.formulary.data || {}).dbFormularyAnswers || [];
		getActivitiesCompleted(answers, state.report.fields, dispatch);
	}, [])

	const getTotal = () => {
		return state.report.allActivities.reduce((soma, next) => {
			soma += Number(next.points);
			return soma;
		}, 0)
	}

	const goBack = () => {
		history.goBack()
	}

	let comissao = ((state.formulary.data || {}).dbFormulary || {}).comission || []

	return (
		<Container>
			{state.report.loading && <div style={{width: "100%", height: "100%", zIndex: 9999, top: 0, left: 0, position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,.3)"}}>
				<CircularProgress />
			</div>}
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div>
						<IconButton edge="start" aria-label="voltar" onClick={goBack}>
							<ArrowBack />
						</IconButton>
					<Typography variant="button">
						Relatório de Atividades
					</Typography>

				</div>
				<div>
					<Typography variant="subtitle1" >
						Progresso
					</Typography>

				</div>
			</div>

			<PaperContainer>
				<div style={{display: 'flex'}}>
					<div>
																
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

					<div style={{marginTop: '12px', padding: '0 8px', marginLeft: 'auto'}}>
							<Typography>Pontuação Total: {getTotal()}</Typography>
					</div>
				</div>

				<ProgressTable list={state.report.allActivities}/>
				
			</PaperContainer>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
				<Button variant="contained" color="primary" disabled>Gerar Relatório</Button>
			</div>
		</Container>
	);
}

export default VisualizarProgresso
