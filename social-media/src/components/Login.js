import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
function Login() {
  return (
	<Container sx={{marginTop:"13%"}} maxWidth="sm">
        <Box component="span" sx={{height:"100vh"}}>

			<Grid container spacing={2}>
				<Grid item xs={12}>
				<TextField id="outlined-basic" label="Username" variant="outlined" fullWidth/>
				</Grid>
				<Grid item xs={12}>
				<TextField id="outlined-basic" label="email" variant="outlined" fullWidth/>
				</Grid>
				<Grid item xs={12}>
				<TextField id="outlined-basic" label="Firstname" variant="outlined" fullWidth/>
				</Grid>
				<Grid item xs={12}>
				<TextField id="outlined-basic" label="Lastname" variant="outlined" fullWidth/>
				</Grid>
			</Grid>
			<br/>
			<Grid container spacing={5}>
				{/* <Grid item xs={12}>
				<Button variant="contained">Contained</Button>
				</Grid> */}
				<Grid item xs={12}>
				<Button variant="outlined" href="/room">REGISTER</Button>
				</Grid>
			</Grid>
    	</Box>
      </Container>
  )
}

export default Login