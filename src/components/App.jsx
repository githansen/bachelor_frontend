import UserForm from './UserForm';
import Footer from './Footer';
import Reader from './Reader';

export default function App() {
	return (
		<div>
			<div className="min-h-screen relative pb-[80px] flex flex-col">
				<Reader />
				<Footer />
			</div>
		</div>
	);
}
