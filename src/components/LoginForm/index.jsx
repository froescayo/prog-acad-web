import React from 'react'
import { TextField, Button, Typography, Select } from '@material-ui/core'
import './style.css';
import { Link } from 'react-router-dom';

export default function LoginForm({handleSubmit}) {
	return (
		<div className="signin-container">
			<div className="signin">
				<form className="root" noValidate autoComplete="off" onSubmit={handleSubmit}>
					<Typography variant="h4" style={{marginBottom: '12px'}}>Login</Typography>
					<TextField
						required
						id="outlined-required"
						fullWidth
						label="Email"
						size="small"
						name="email"
						variant="outlined"
						style={{marginBottom: '12px'}}
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
						style={{marginBottom: '24px'}}
					/>
					<Button
						color="primary"
						variant="contained" 
						type="submit"
						fullWidth>
						Entrar
					</Button>
					<Link to="/cadastro">
					<Button 
					color="primary"
						className="margin"
						fullWidth>
						Registrar-se
					</Button>
					</Link>
				</form>
			</div>
		</div>
	)
}
