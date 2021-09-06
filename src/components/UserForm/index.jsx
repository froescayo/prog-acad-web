import React from 'react'
import { TextField, Button, Typography, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

import './style.css';
import { Link } from 'react-router-dom';
/* 
				table.date("birthdate").notNullable();
		table.integer("workload").notNullable();
		table.text("academicDegreeId").notNullable();
		table.text("careerId").notNullable();
		table.text("civilStatus").notNullable().defaultTo("Single");
		table.text("email").unique().notNullable();
		table.text("firstName").notNullable();
		table.text("lastName").notNullable();
		table.text("levelId").notNullable();
		table.text("nationalityId").notNullable().defaultTo("BRA");
		table.text("naturalidade").nullable();
		table.text("password").notNullable();
		table.text("roleId").notNullable();
		table.text("siape").unique().notNullable();
*/

export default function UserForm({handleSubmit}) {

	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
    setSelectedDate(date);
  };

	const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

	return (
		<div className="signup-container">
			<div className="signup">
				<form className="root" noValidate autoComplete="off" onSubmit={handleSubmit}>
					<Typography variant="h4" style={{marginBottom: '12px'}}>Resgistar</Typography>
					<FormControl variant="outlined" fullWidth size="small" style={{marginBottom: '8px'}}>
						<InputLabel id="demo-simple-select-outlined-label">Formação</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={age}
							fullWidth
							onChange={handleChange}
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
							value={age}
							fullWidth
							onChange={handleChange}
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
							value={age}
							fullWidth
							onChange={handleChange}
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
							value={age}
							fullWidth
							onChange={handleChange}
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
							value={age}
							fullWidth
							onChange={handleChange}
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
							value={age}
							fullWidth
							onChange={handleChange}
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
