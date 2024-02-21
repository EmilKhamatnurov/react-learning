import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarDetail from '../../components/screens/car-detail/CarDetail'
import Home from '../screens/home/Home'


export const Router = () => {
	return <BrowserRouter>
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<CarDetail />} path='/car/:id' />
			<Route element={<>Страница не найдена</>} path='*' />
		</Routes>
	</BrowserRouter>
}