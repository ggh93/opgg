import { Box } from '@mui/material';
import Router from './core/router';
import SignPage from './pages/SignPage';

function App() {
	return (
		<>
			<div className="m-5 bg-yellow-500 text-blue-500 font-bold">
				배워서 나주는 React에 Tailwind Css 적용하기
			</div>
			{/* <Box sx={{ display: 'flex' }}>
				<SignPage />
				<Box>
					<Router />
				</Box>
			</Box> */}
		</>
	);
}

export default App;
