import React from 'react';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage';
import MainPage from '../pages/MainPage';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/test" element={<TestPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
