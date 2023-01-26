import heroimg1 from '../img/hero-img-1.webp';
import heroimg2 from '../img/hero-img-2.webp';
import heroimg3 from '../img/hero-img-3.webp';
import heroimg4 from '../img/hero-img-4.webp';
import heroimg5 from '../img/hero-img-5.webp';
import heroimg6 from '../img/hero-img-6.webp';
import heroimg7 from '../img/hero-img-7.webp';
import pappegoye from '../img/pappegoye-logo.png';



export default function Home() {


	return (
		<div className='h-[80rem] grid content-center'>
		<div className="relative">
		<div className="sm:pt-24 sm:pb-40 lg:pt-60 lg:pb-48">
		  <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
			<div className="sm:max-w-lg mt-14">
				<img
                className="h-8 pb-5 sm:h-24"
                src={pappegoye}
                alt="Logo"
              />
			  <h1 className="text-h1 font-bold tracking-tight text-black">
				Bidra med din stemme!
			  </h1>
			  <h4 className="text-h4 text-dark mb-5">
			  	Vi leter mennesker i alle aldre, med ulike morsmål, forskjellige dialekter og alle kjønn!
			  </h4>
			  <button className="transScale bg-secondary px-4 py-4 font-bold py-2 text-h4 text-white mt-2 text-black w-48 rounded inline-flex justify-center items-center gap-2">
			  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
				Sett i gang
			  </button>


			</div>
			<div>
			  <div className="mt-10">
				{/* Decorative image grid */}
				<div
				  aria-hidden="true"
				  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
				>
				  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:translate-x-8">
					<div className="flex items-center space-x-6 lg:space-x-8">
					  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
						  <img
							src={heroimg7}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg2}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
					  </div>
					  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg3}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg1}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg4}
							alt=""
							className="h-fullobject-cover object-center"
						  />
						</div>
					  </div>
					  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg5}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
						<div className="h-64 w-44 overflow-hidden rounded-lg">
						  <img
							src={heroimg6}
							alt=""
							className="h-full object-cover object-center"
						  />
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  </div>
	);
}
