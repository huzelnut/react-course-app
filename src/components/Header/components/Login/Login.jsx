import { Button } from 'common/Button/Button';

import 'components/Header/components/Login/login.css';

export function Login() {
	return (
		<div class='login-container'>
			<div class='login-username'>
				<b>Johnny Walker</b>
			</div>
			<div class='login-button'>
				<Button text='Logout' />
			</div>
		</div>
	);
}
