import { Button, Box, Container } from '@mui/material';
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
			<Box
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				maxWidth="xss"
			>
				<Container maxWidth="xs">
					<Box>
						
					</Box>
				</Container>
				<Button onClick={handleClick}>회원가입</Button>
			</Box>
		</div>
	);
}

export default SignPage;
