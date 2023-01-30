import { useState } from 'react';
import FourOFourIcon from '../../img/FourOFour.png';



export default function FourOFour() {
	return (
		<div>
			<div className="min-h-[50rem] flex flex-col place-items-center justify-center">
				<img src={FourOFourIcon} className='w-[18rem] mb-10'></img>

				<h2 className='text-h1 mb-1'>404 Ikke Funnet...</h2>
				<p className='text-h4 mb-5'>
					Oops! Denne siden finnes ikke.
				</p>
				<button className="transScale bg-secondary px-4 py-4 font-bold mb-2 text-h4 text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pr-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
					Tilbake hjem
				</button>
			</div>
		</div>
	);
}
