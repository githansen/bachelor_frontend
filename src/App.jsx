import UserForm from './pages/UserForm';
import Header from './components/shared/Header';
import HeaderMinimal from './components/shared/HeaderMinimal';
import FourOFour from './pages/statusCodes/FourOFour';
import FiveHundred from './pages/statusCodes/FiveHundred';
import Footer from './components/shared/Footer';
import Reader from './pages/Reader';
import Thanks from './pages/Thanks';
import Home from './pages/Home';

export default function App() {
	return (
		<div className='bg-white'>
			<div className="min-h-screen relative flex flex-col">
				<HeaderMinimal />
				<FourOFour />
				<Footer />
			</div>
		</div>
	);
}
