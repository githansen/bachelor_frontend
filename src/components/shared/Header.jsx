import GiDinStemmeIconNoBg from '../../assets/img/GiDinStemmeIconNoBg.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

	return (
		<header>
			<nav className="px-5 lg:px-6 py-10">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<NavLink to="/" className="flex items-center">
						<img src={GiDinStemmeIconNoBg} className="mr-1 h-6 sm:h-9" alt="GiDinStemme - Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap text-dark">GiDinStemme</span>
					</NavLink>
					<NavLink to="/om-oss" className="flex items-center lg:order-2">
						<p className='text-p hover:text-gray transition duration-150 ease-in-out'>Om oss</p>
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
