import Header from './Header';
import Footer from './Footer';

export default function App({ children }) {
	return (
		<div className="bg-white min-h-screen relative flex flex-col">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
