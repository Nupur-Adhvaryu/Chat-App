import React,{useState} from 'react'
import {Box, Paper, Grid,AppBar, Toolbar, Typography, useScrollTrigger,Container} from '@mui/material'
import { styled } from '@mui/material/styles';

function Message({data}) {
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		lineHeight: '60px',
	  }));
  return (<Item elevation={3}>
	{`Message:${data.messageText}
	Sender:${data.sender}
	receiver:${data.receiver}
	dateSent:${data.dateSent}
	`}
  </Item>)
}

export default Message