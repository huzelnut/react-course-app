import { Logo } from 'components/Header/components/Logo/Logo';
import { Login } from 'components/Header/components/Login/Login';

import 'components/Header/header.css';

export function Header() {
	return (
		<div class='header-area'>
			<div class='header-container'>
				<div class='header-block header-logo'>
					<Logo />
				</div>
				<div class='header-block header-login'>
					<Login />
				</div>
			</div>
		</div>
	);
}
