import React, { useContext, useEffect } from 'react'
import { TextField, Button, Typography, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

import './style.css';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from "../../store/index";
import { getAcademicDegrees, getCareers, getLevels, getRoles } from '../../store/reducers/common';

export default function UserForm({handleSubmit}) {

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
    }, [])

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
		<div className="signup-container">
			<div className="signup">
				<form className="root" noValidate autoComplete="off" onSubmit={handleSubmit}>
					<Typography variant="h4" style={{marginBottom: '12px'}}>Cadastro</Typography>
					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Formação</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={academicDegreeId}
							fullWidth
							onChange={(event) => setAcademicDegreeId(event.target.value)}
							label="Formação"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Carreira</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={careerId}
							fullWidth
							onChange={(event) => setCareerId(event.target.value)}
							label="Carreira"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Estado Civil</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={civilStatus}
							fullWidth
							onChange={(event) => setCivilStatus(event.target.value)}
							label="Estado Civil"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Nível</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={levelId}
							fullWidth
							onChange={(event) => setLevelId(event.target.value)}
							label="Nível"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Nacionalidade</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={nationalityId}
							fullWidth
							onChange={(event) => setNationalityId(event.target.value)}
							label="Nacionalidade"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Perfil</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={roleId}
							fullWidth
							onChange={(event) => setRoleId(event.target.value)}
							label="Perfil"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

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
						style={{marginBottom: '8px'}}
					/>


					<TextField
						required
						id="outlined-required"
						fullWidth
						label="Naturalidade"
						size="small"
						name="naturalidade"
						variant="outlined"
						style={{marginBottom: '8px'}}
					/>

					<TextField
						required
						id="outlined-required"
						fullWidth
						label="siape"
						size="small"
						name="siape"
						variant="outlined"
						style={{marginBottom: '8px'}}
					/>

					<TextField
						required
						id="outlined-required"
						fullWidth
						label="Email"
						size="small"
						name="email"
						variant="outlined"
						style={{marginBottom: '8px'}}
					/>

					<TextField
						id="outlined-password-input"
						fullWidth
						size="small"
						label="Password"
						type="password"
						name="password"
						autoComplete="current-password"
						variant="outlined"
						style={{marginBottom: '12px'}}
					/>
					<Button
						color="primary"
						variant="contained"
						type="submit"
						fullWidth>
						Registre-se
					</Button>
					<Link to="/login">
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
