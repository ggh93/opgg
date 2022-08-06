import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function MainPage() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/sign');
	};
	return (
		<div>
			<Header />
			<Button variant="contained" onClick={handleClick}>
				회원가입
			</Button>
		</div>
	);
}
