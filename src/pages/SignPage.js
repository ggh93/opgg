import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignPage() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/test');
	};
	return (
		<div className="shrink-0">
			<h3>로그인</h3>
			<Button onClick={handleClick}>회원가입</Button>
		</div>
	);
}

export default SignPage;
