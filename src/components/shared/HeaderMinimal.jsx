import PolitietLogo from '../../assets/img/pappegoye-logo.png';

export default function Header() {
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
				<div className="flex justify-center mx-auto max-w-screen-xl">
					<a href="#" className="flex items-center">
						<img src={PolitietLogo} className="mr-1 h-6 sm:h-9" alt="GiDinStemme - Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap text-dark">GiDinStemme</span>
					</a>
				</div>
			</nav>
		</header>
	);
}
