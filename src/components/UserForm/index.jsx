import React, { useContext, useEffect } from 'react'
import { 
	TextField, 
	Button, 
	Typography, 
	FormControl, 
	Select, 
	InputLabel, 
	MenuItem,
	Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { GlobalStateContext } from "../../store/index";
import { getAcademicDegrees, getCareers, getLevels, getRoles } from '../../store/reducers/common';
import { CIVIL_STATUS } from '../../utils/constants';

import './style.css';

export default function UserForm({ handleSubmit }) {

	const [state, dispatch] = useContext(GlobalStateContext);
	// const [selectedDate, setSelectedDate] = React.useState(new Date());

	useEffect(() => {
		async function fetchCommonData() {
			getAcademicDegrees(dispatch)
			getCareers(dispatch)
			getLevels(dispatch)
			getRoles(dispatch)
		}
		fetchCommonData();
	}, [dispatch])

	// const handleDateChange = (date) => {
	// 	setSelectedDate(date);
	// };

	const [academicDegreeId, setAcademicDegreeId] = React.useState('');
	const [careerId, setCareerId] = React.useState('');
	const [civilStatus, setCivilStatus] = React.useState('');
	const [levelId, setLevelId] = React.useState('');
	const [nationalityId, setNationalityId] = React.useState('');
	const [roleId, setRoleId] = React.useState('');


	return (
		<div style={{marginTop: '64px'}}>
			<div className="app-title-container">
				<h1 className="app-title">procad</h1>
			</div>

			<div className="signup-container">
					<form className="signup-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
						<Typography variant="h5" style={{ marginBottom: '16px', alignSelf: 'start' }}>Cadastro</Typography>

						<Grid container spacing={2}>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="formacao-input-label">Formação</InputLabel>
								<Select
									labelId="formacao-input-label"
									id="formacao-input"
									value={academicDegreeId}
									fullWidth
									onChange={(event) => setAcademicDegreeId(event.target.value)}
									label="Formação"
								>
									{ state.common.academicDegrees.map(acd => (
										<MenuItem value={acd.id} key={acd.id}>
											{ acd.name }
										</MenuItem>
									)) }
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="carreira-input-label">Carreira</InputLabel>
								<Select
									labelId="carreira-input-label"
									id="carreira-input"
									value={careerId}
									fullWidth
									onChange={(event) => setCareerId(event.target.value)}
									label="Carreira"
								>
									{ state.common.careers.map(career => (
										<MenuItem value={career.id} key={career.id}>
											{ career.name }
										</MenuItem>
									)) }
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="estadocivil-input-label">Estado Civil</InputLabel>
								<Select
									labelId="estadocivil-input-label"
									id="estadocivil-input"
									value={civilStatus}
									fullWidth
									onChange={(event) => setCivilStatus(event.target.value)}
									label="Estado Civil"
								>
									<MenuItem value={CIVIL_STATUS.SINGLE}>
										Solteiro
									</MenuItem>
									<MenuItem value={CIVIL_STATUS.MARRIED}>
										Casado
									</MenuItem>
									<MenuItem value={CIVIL_STATUS.DIVORCED}>
										Divorciado
									</MenuItem>
									<MenuItem value={CIVIL_STATUS.WIDOWED}>
										Viúvo
									</MenuItem>
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="nivel-input-label">Nível</InputLabel>
								<Select
									labelId="nivel-input-label"
									id="nivel-input"
									value={levelId}
									fullWidth
									onChange={(event) => setLevelId(event.target.value)}
									label="Nível"
								>
									{ state.common.levels.map(level => (
										<MenuItem value={level.id} key={level.id}>
											{ level.name }
										</MenuItem>
									)) }
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="nacionalidade-input-label">Nacionalidade</InputLabel>
								<Select
									labelId="nacionalidade-input-label"
									id="nacionalidade-input"
									value={nationalityId}
									fullWidth
									onChange={(event) => setNationalityId(event.target.value)}
									label="Nacionalidade"
								>
									{ state.common.nationalities.map(nat => (
										<MenuItem value={nat.id} key={nat.id}>
											{ nat.name }
										</MenuItem>
									)) }
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<FormControl variant="outlined" fullWidth size="small" style={{ marginBottom: '8px' }}>
								<InputLabel id="perfil-input-label">Perfil</InputLabel>
								<Select
									labelId="perfil-input-label"
									id="perfil-input"
									value={roleId}
									fullWidth
									onChange={(event) => setRoleId(event.target.value)}
									label="Perfil"
								>
									{ state.common.roles.map(role => (
										<MenuItem value={role.id} key={role.id}>
											{ role.name }
										</MenuItem>
									)) }
								</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<TextField
									id="date"
									label="Nascimento"
									fullWidth
									size="small"
									variant="outlined"
									type="date"
									InputLabelProps={{
										shrink: true,
									}}
									style={{ marginBottom: '8px' }}
								/>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<TextField
									required
									id="naturalidade-input"
									fullWidth
									label="Naturalidade"
									size="small"
									name="naturalidade"
									variant="outlined"
									style={{ marginBottom: '8px' }}
								/>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<TextField
									required
									id="siape-input"
									fullWidth
									label="siape"
									size="small"
									name="siape"
									variant="outlined"
									style={{ marginBottom: '8px' }}
								/>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<TextField
									required
									id="email-input"
									fullWidth
									label="Email"
									size="small"
									name="email"
									variant="outlined"
									style={{ marginBottom: '8px' }}
								/>
							</Grid>
							<Grid item xs={12} md={4} sm={6} lg={3}>
								<TextField
									id="password-input"
									fullWidth
									size="small"
									label="Password"
									type="password"
									name="password"
									autoComplete="current-password"
									variant="outlined"
									style={{ marginBottom: '24px' }}
								/>
							</Grid>
						</Grid>
						
						<Grid container justifyContent="center">
							<Grid xs={12} md={4}>
								<Button
									color="primary"
									variant="contained"
									type="submit"
									fullWidth>
									Registre-se
								</Button>
							</Grid>
						</Grid>
						<Link to="/login" style={{ marginTop: '8px' }}>
							<Button
								color="primary"
								className="margin"
								fullWidth>
								Fazer Login
							</Button>
						</Link>


					</form>
			</div>

		</div>

	)
}
