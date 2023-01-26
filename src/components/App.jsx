import UserForm from './UserForm';
import Header from './Header';
import Footer from './Footer';
import Reader from './Reader';
import Thanks from './Thanks';
import Home from './Home';

export default function App() {
	return (
		<div>
			<div className="min-h-screen relative flex flex-col">
				<Header />
				<UserForm />
				<Footer />
			</div>
		</div>
	);
}
