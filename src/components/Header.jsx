import PolitietLogo from '../img/pappegoye-logo.png';

export default function Header() {
	return (
			<div className="flex justify-center p-5">
				<a href="#">
					<img src={PolitietLogo} className="object-contain h-12 w-12"></img>
				</a>
			</div>
	);
}
