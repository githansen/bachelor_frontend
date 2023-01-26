import { useState } from 'react';
import Select from 'react-select'
import Header from './Header';



export default function Thanks() {
	return (
		<div>
		<Header />
			<div className="h-[60rem] flex flex-col place-items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-30 h-30 text-red">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
				</svg>

				<h2 className='text-h2 mb-5 uppercase'>Takk for ditt bidrag!</h2>
				<p className='text-p mb-14'>
					Din bidragskode er <span className='SlettKode p-3 ml-2'><b>123E4567-E89B-12D30-EG94348</b></span>
				</p>
				<button className="transScale bg-primary px-4 py-4 font-bold py-2 mb-2 text-h4 text-white mt-2  w-48 rounded inline-flex justify-center items-center gap-2">
					Bidra igjen?
				</button>
				<button className="bg-light px-4 py-2 mt-2 text-black w-50 rounded  inline-flex justify-center items-center gap-2 hover:bg-dark hover:text-light">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
					Tilbake hjem
				</button>
			</div>
		</div>
	);
}
