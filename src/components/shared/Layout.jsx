//Shared components
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

//App component is the parent of all other components in the app and is used to wrap the Header and
//Footer components around the rest of the app. This is done to avoid having to repeat the Header
//and Footer components in every page component.
export default function App({ children }) {
    return (
        <div className="min-h-screen relative flex flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
