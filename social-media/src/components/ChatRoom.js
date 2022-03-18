import React from 'react'
function ChatRoom() {

	const handleClick = (e)=>{
		e.preventDefault();
		fetch('http://localhost:4000/api/chat')
			.then(res=>res.json())
			.then(data=>console.log(data))
	}

  return (
	<>
	<div>THIS IS A CHAT ROOM</div>
	<form>
	<button onClick={(e)=>handleClick(e)}>THIS IS MY BUTTO CCCLICK</button>
	</form>
	</>

	
  )
}

export default ChatRoom