import React from 'react';
import { 
	AppBar, 
	Toolbar, 
	Typography, 
	Menu, 
	MenuItem, 
	IconButton,
	Button
} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import styles from "./styles";


function Header() {

	const classes = styles();

	const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

	const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar className={classes.container}>
				<div className={classes.wrapper}>

				<Typography variant="h6" className={classes.appTitle}>
					procad
				</Typography>
				
				<div className={classes.userMenu}>
					<Button
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<AccountCircle style={{marginRight: '10px'}}/>
						<Typography>User Name</Typography>
					</Button>

					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Minha Conta</MenuItem>
						<MenuItem onClick={handleClose}>Sair</MenuItem>
					</Menu>
				</div>

				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Header;