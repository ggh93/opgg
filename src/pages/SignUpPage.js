import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState, useForm } from 'react-hook-form';

/**
 *  email: string;
 *	name: string;
 *	pw: string;
 *	checkPw: string;
 *	phone: string;
 *	birth: string;
 */

function SignPage() {
	const { handleSubmit } = useForm();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/test');
	};
	return (
		<div>
			<h3>회원가입</h3>
			<form onSubmit={handleSubmit}></form>
			<Button onClick={handleClick}>저장</Button>
		</div>
	);
}

export default SignPage;
