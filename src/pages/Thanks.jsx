import { useState } from 'react';
import ThanksIcon from '../assets/img/thanks.png';



export default function Thanks() {
	return (
		<div>
			<div className="min-h-[50rem] flex flex-col place-items-center justify-center">
				<img src={ThanksIcon} className='w-[16rem] mb-5'></img>

				<h2 className='text-h2 mb-5 uppercase'>Takk for ditt bidrag!</h2>
				<p className='text-p mb-10'>
					Din bidragskode er <span className='border-2 border-secondary bg-secondary-soft p-3 ml-1 rounded-lg'><b>123E4567-E89B-12D30-EG94348</b></span>
				</p>
				<button className="transScale bg-secondary px-8 py-4 font-bold mb-2 text-h4 text-black mt-2  w-fit rounded inline-flex justify-center items-center gap-2">
					Vil du bidra igjen?
				</button>
				<button className="bg-light px-5 py-2 mt-2 text-black w-40 rounded inline-flex border-2 border-light hover:bg-secondary-soft hover:border-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pr-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
					Tilbake hjem
				</button>
			</div>
		</div>
	);
}
