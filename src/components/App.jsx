import UserForm from './UserForm';
import Footer from './Footer';

export default function App() {
	return (
		<div>
			<div className="min-h-screen relative pb-[80px] flex flex-col">
				<UserForm />
				<Footer />
			</div>
		</div>
	);
}
