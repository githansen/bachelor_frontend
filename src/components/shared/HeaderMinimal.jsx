import PolitietLogo from '../../assets/img/pappegoye-logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-5">
				<div className="flex justify-center mx-auto max-w-screen-xl">
					<NavLink to="/" className="flex items-center">
						<img src={PolitietLogo} className="mr-1 h-6 sm:h-9" alt="GiDinStemme - Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap text-dark">GiDinStemme</span>
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
