import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignPage() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/test');
	};
	return (
		<div>
			<h3>회원가입</h3>
			<form></form>
			<Button onClick={handleClick}>저장</Button>
		</div>
	);
}

export default SignPage;
