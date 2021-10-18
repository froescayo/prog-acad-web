import React from 'react'
import { TextField, Button, Typography, Grid } from '@material-ui/core'
import './style.css';
import { Link } from 'react-router-dom';

export default function LoginForm({ handleSubmit }) {
	return (
		<Grid container alignItems="center" flexwrap="wrap" style={{height: '100vh'}} >
			<Grid justifyContent="flex-end" xs={12} md={6}>
					<div className="title-auth">
							<h1 className="procad">procad</h1>
							<p className="subtitle">Sistema de progressão e promoção de carreira acadêmica</p>
					</div>
			</Grid>

			<Grid container justifyContent="center" xs={12} md={6} className="login-form-container">
					<form className="login-form-wrapper" noValidate autoComplete="off" onSubmit={handleSubmit}>
						<Typography variant="h4" style={{ marginBottom: '12px', padding: '8px' }}>Login</Typography>
						<TextField
							required
							id="outlined-required"
							fullWidth
							label="Email"
							size="small"
							name="email"
							variant="outlined"
							style={{ marginBottom: '12px' }}
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
							style={{ marginBottom: '24px' }}
						/>
						<Button
							color="primary"
							variant="contained"
							type="submit"
							fullWidth
							style={{ marginBottom: '12px' }}>
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
			</Grid>
		</Grid>
	)
}
