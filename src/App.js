import { Box } from '@mui/material';
import Router from './core/router';
import Header from './pages/Header';

function App() {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				{/* <Header /> */}
				<Box>
					<Router />
				</Box>
			</Box>
		</>
	);
}

export default App;
