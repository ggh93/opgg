import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './core/router';

const theme = createTheme({
	typography: {
		fontFamily: ['"Pretendard"', '"Spoqa Han Sans Neo"', '"Roboto"'].join(','),
	},
	mixins: {
		toolbar: {
			minHeight: '4rem',
			paddingLeft: '1rem',
			paddingRight: '1rem',
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}></ThemeProvider>
			<Box sx={{ display: 'flex' }}>
				<Box>
					<Router />
				</Box>
			</Box>
		</>
	);
}

export default App;
