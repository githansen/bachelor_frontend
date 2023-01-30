import heroimg1 from '../assets/img/hero-img-1.webp';
import heroimg2 from '../assets/img/hero-img-2.webp';
import heroimg3 from '../assets/img/hero-img-3.webp';
import heroimg4 from '../assets/img/hero-img-4.webp';
import heroimg5 from '../assets/img/hero-img-5.webp';
import heroimg6 from '../assets/img/hero-img-6.webp';
import heroimg7 from '../assets/img/hero-img-7.webp';

import Layout from '../components/shared/Layout';
import HomePlaceholder from '../assets/img/HomePlaceholder.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<Layout>
			<div className='3xl:h-[65rem] 2xl:h-[50rem] max-w-screen-xl mx-auto flex place-items-center justify-between gap-20'>

				<div className="sm:max-w-lg">
					<img src={HomePlaceholder} className='w-[12rem]'></img>
					<h1 className="text-h1 font-bold tracking-tight text-black">
						Bidra med din stemme!
					</h1>
					<h4 className="text-h4 text-dark mb-5">
						Vi leter mennesker i alle aldre, med ulike morsmål, forskjellige dialekter og alle kjønn!

						<span className='text-p bg-secondary-soft rounded w-fit p-1 ml-2'>
							Utviklet i 🇳🇴 for Norge.
						</span>
					</h4>
					<button 
						onClick={() => navigate('/intro')}
						className="transScale bg-secondary px-4 py-4 font-bold text-h4 text-white mt-2 text-black w-48 rounded inline-flex justify-center items-center gap-2"
						>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
						Sett i gang
					</button>
				</div>

				<div>
					<div className="flex items-center space-x-6 lg:space-x-8">
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
								<img
									src={heroimg7}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg2}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg3}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg1}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg4}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg5}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="h-64 w-44 overflow-hidden rounded-lg">
								<img
									src={heroimg6}
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
