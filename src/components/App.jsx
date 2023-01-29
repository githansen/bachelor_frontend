import UserForm from './UserForm';
import Header from './Header';
import Header2 from './Header2';
import FourOFour from './statusCodes/FourOFour';
import FiveHundred from './statusCodes/FiveHundred';
import Footer from './Footer';
import Reader from './Reader';
import Thanks from './Thanks';
import Home from './Home';

export default function App() {
	return (
		<div className='bg-white'>
			<div className="min-h-screen relative flex flex-col">
				<Header2 />
				<Reader />
				<Footer />
			</div>
		</div>
	);
}
