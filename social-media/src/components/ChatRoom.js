import React,{useState} from 'react'
import {Box, Paper, Grid,AppBar, Toolbar, Typography, useScrollTrigger,Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Message from './Message';
function ChatRoom() {

	const [messages, setMessages] = useState([])
	const userName = "jaival";
	const handleClick = (e)=>{
		e.preventDefault();
		fetch('http://localhost:4000/api/chat')
			.then(res=>res.json())
			.then(data=>setMessages(data.Messages))
	}
  return (
	<div style={{height: '100%'}}>
	<Box sx={{flexGrow:1, height:"100%"}}>
		<Grid style={{height: '100%'}} container spacing={8}>
			<Grid sx={{textAlign:"center",boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"}} item xs={3}>
				Rooms
			</Grid>
			<Grid sx={{textAlign:"center",boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"}} item xs={6}>
				Chat	<button onClick={(e)=>handleClick(e)}>THIS IS MY BUTTO CCCLICK</button>

				<br/>
				<Toolbar />
				<Container>
					<Box sx={{ my: 2 }}>
					{messages.map(e=>{
						return <Message key={e._id} data={e}/>
					})}
					</Box>
				</Container>

			</Grid>
			<Grid sx={{textAlign:"center",boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"}} item xs={3}>
				Room Info
			</Grid>
		</Grid>
	</Box>
	</div>

	
  )
}

export default ChatRoom