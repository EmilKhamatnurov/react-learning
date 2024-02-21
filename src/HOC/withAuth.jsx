import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

export const withAuth = (Component) => (props) => {
	// По задумке эта страница показывается только для авторизованных пользователей
	// Так что сперва мы получает значение авторизации 
	const { user } = useContext(AuthContext)

	if (!user) return <p>Вы не авторизованы в системе  Нет доступа к странице</p>

	return <Component {...props} />
}